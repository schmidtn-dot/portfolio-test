// Vercel Routing Middleware: protects the whole site with HTTP Basic Auth.
// Set SITE_PASSWORD (and optionally SITE_USER) in the Vercel project's
// environment variables. Without SITE_PASSWORD the site stays locked.

export const config = {
  matcher: "/:path*",
};

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function unauthorized(message) {
  return new Response(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Portfolio", charset="UTF-8"',
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default function middleware(request) {
  const password = process.env.SITE_PASSWORD;
  const user = process.env.SITE_USER || "";

  if (!password) {
    return new Response("Site is locked: SITE_PASSWORD is not configured.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  const header = request.headers.get("authorization") || "";
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return unauthorized("Passwort erforderlich.");

  let decoded;
  try {
    const bytes = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
    decoded = new TextDecoder().decode(bytes);
  } catch {
    return unauthorized("Passwort erforderlich.");
  }

  const sep = decoded.indexOf(":");
  const givenUser = sep === -1 ? "" : decoded.slice(0, sep);
  const givenPass = sep === -1 ? decoded : decoded.slice(sep + 1);

  const userOk = user === "" || safeEqual(givenUser, user);
  if (!(userOk && safeEqual(givenPass, password))) return unauthorized("Falsches Passwort.");

  // No response returned: the request continues to the static files.
}
