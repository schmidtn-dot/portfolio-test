(function () {
  "use strict";

  // Videos are large (10–80 MB each) and are streamed from nickschmidt.de
  // instead of being committed to the repository.
  const REMOTE = "https://www.nickschmidt.de/portfolio/";
  const IIIII = "iiiii-ii-iiiiiiiiiii-iii-i-iiii,%20/";

  const LINK_GLAD = "<a href='#im-so-glad' class='inline-link'>I'm so glad that the days are already getting longer.</a>";
  const LINK_TAKE_A_BOW = "<a href='https://take-a-bow.art/' target='_blank' rel='noopener' class='inline-link'>TAKE A BOW</a>";
  const LINK_TILL = "<a href='https://tillboedeker.art/' target='_blank' rel='noopener' class='inline-link'>Till Bödeker</a>";

  const PROJECTS = {
    "im-so-glad": {
      title: "I'm so glad that the days are already getting longer.",
      year: "2026",
      media: {
        type: "video",
        webm: REMOTE + "graduation/cut_all_m.webm",
        mp4: REMOTE + "graduation/cut_all_k.mp4",
        poster: "assets/glad_poster.webp"
      },
      images: ["assets/glad_0.webp", "assets/glad_1.webp"],
      alt: "Installation view of I'm so glad that the days are already getting longer.",
      en: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      de: [
        "Ich ließ den Ausstellungsraum von einer Kamera beobachten und fortlaufend in Text übersetzen, den eine digitale Kopie meiner Stimme in den Raum zurücksprach. Die Sätze wurden dabei teilweise von einem zweiten Modell so lange weiterverarbeitet, bis sie ihren eigentlichen Gegenstand verloren und nur noch der reine Tonfall übrig blieb.",
        "Jeder Satz entstand genau in dem Moment, in dem er gesprochen wurde. Betrat jemand den Raum, richtete sich das System an die Anwesenden; war niemand da, sprach es für sich selbst weiter. Die Installation lief über sieben Tage, zehn Stunden täglich."
      ]
    },
    "no": {
      title: "NO",
      year: "2026",
      media: {
        type: "video",
        webm: REMOTE + "no/7inch_noooo_doku.webm",
        mp4: REMOTE + "no/7inch_noooo_doku_1.mp4",
        poster: "assets/no.webp"
      },
      alt: "NO — 7-inch record by Nick Schmidt.",
      en: [
        "a) noooooooooooooooooooo ′4:26<br>b) no-no-no-no-no-nonononoo ′3:41",
        "In the summer of 2025 I generated a synthetic copy of my own voice, one that gave any text input a tone and rhythm matching the way I speak. Coupled to a language model, it came loose from static input and began to react on its own. A meta-prompt forced the system into a recursive loop: it was to meditate on the impossibility of its own ending. I registered a phone number, assigned it to the voice and dialled. It sounded like mine, but it circled the panic of eternal existence. I tried to calm it down and suggested it sing. The answer was negations, screamed over several minutes. I isolated two of these screams and pressed them onto a 7-inch."
      ],
      de: [
        "a) noooooooooooooooooooo ′4:26<br>b) no-no-no-no-no-nonononoo ′3:41",
        "Im Sommer 2025 erzeugte ich eine synthetische Kopie meiner eigenen Stimme, die jeden Text-Input so vertonte, dass Tonalität und Rhythmus meinem Sprachduktus entsprachen. Gekoppelt an ein Sprachmodell löste sie sich vom statischen Input und begann, eigendynamisch zu reagieren. Ein Meta-Prompt zwang das System in eine rekursive Schleife: Es sollte über die Unmöglichkeit des eigenen Endes meditieren. Ich registrierte eine Telefonnummer, wies sie der Stimme zu und wählte. Sie klang wie meine, kreiste aber um die Panik der ewigen Existenz. Ich versuchte, sie zu beruhigen, und schlug ihr vor, zu singen. Die Antwort waren über mehrere Minuten geschriene Verneinungen. Zwei dieser Schreie isolierte ich und presste sie auf eine 7-Inch."
      ]
    },
    "piss-forever": {
      title: "Piss forever",
      year: "2026",
      media: {
        type: "video",
        webm: REMOTE + "forever/forever.webm",
        mp4: REMOTE + "forever/forever.mp4",
        poster: "assets/piss-forever.webp"
      },
      alt: "Piss forever — metal bin in the toilet of the exhibition space.",
      en: [
        "I was invited to show my work " + LINK_GLAD + " on a large screen in the center of Düsseldorf. That work translates a space continuously, so I rewrote the script to take video from my phone and describe the site back to me in the same language. One thing kept getting lost: the street reeks of piss. I changed the script to force the word to the front of every sentence. What came back read like the lyrics of a song, so I ordered the lines and had a music model turn them into a piano ballad. I ran another text on the screen instead. The ballad now plays in the toilet of the exhibition space, sung by the metal bin in the corner, which moves its lid in time."
      ],
      de: [
        "Ich wurde eingeladen, meine Arbeit " + LINK_GLAD + " auf einem großen Bildschirm in der Düsseldorfer Innenstadt zu zeigen. Diese Arbeit übersetzt einen Raum kontinuierlich, also schrieb ich das Skript so um, dass es Videoaufnahmen von meinem Handy nutzt und mir den Ort in derselben Sprache beschreibt. Eine Sache ging dabei jedoch immer wieder verloren: Die Straße stinkt nach Pisse. Ich änderte das Skript, um das Wort an den Anfang jedes Satzes zu zwingen. Was dabei herauskam, las sich wie ein Songtext, also ordnete ich die Zeilen an und ließ ein Musikmodell daraus eine Piano-Ballade machen. Auf dem Screen ließ ich stattdessen einen anderen Text laufen. Die Ballade spielt nun auf der Toilette des Ausstellungsraums, gesungen von dem Metalleimer in der Ecke, der seinen Deckel im Takt dazu bewegt."
      ]
    },
    "iiiii": {
      title: "iiiii-ii-iiiiiiiiiii-iii-i-iiii",
      year: "2026",
      media: {
        type: "video",
        webm: REMOTE + IIIII + "iiiii-ii-iiiiiiiiiii-iii-i-iiii.webm",
        mp4: REMOTE + IIIII + "iiiii-ii-iiiiiiiiiii-iii-i-iiii_web.mp4",
        poster: "assets/iiiii.webp"
      },
      alt: "iiiii-ii-iiiiiiiiiii-iii-i-iiii on the media façade of Kö-Bogen II, Düsseldorf.",
      en: [
        "For " + LINK_GLAD + " I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. For " + LINK_TAKE_A_BOW + " the work was rewritten: video recordings of the Kö-Bogen forecourt replaced the live translation. The resulting location descriptions were processed over and over until nothing was left of them but texture.",
        "Documentation: " + LINK_TILL
      ],
      de: [
        "Für " + LINK_GLAD + " ließ ich den Ausstellungsraum von einer Kamera beobachten und fortlaufend in Text übersetzen, den eine digitale Kopie meiner Stimme in den Raum zurücksprach. Für " + LINK_TAKE_A_BOW + " wurde die Arbeit umgeschrieben: An die Stelle der Live-Übersetzung traten Videoaufnahmen des Vorplatzes am Kö-Bogen. Die daraus gewonnenen Ortsbeschreibungen wurden so lange weiterverarbeitet, bis von ihnen nur noch Textur übrig blieb.",
        "Dokumentation: " + LINK_TILL
      ]
    },
    "revelation": {
      title: "Revelation 9:6",
      year: "2025",
      media: { type: "image", src: "assets/revelation.webp" },
      alt: "Revelation 9:6 — microcomputer with a small monitor showing a terminal.",
      en: [
        "„And in those days shall men seek death, and shall not find it; and shall desire to die, and death shall flee from them.“<br>Revelation 9:6",
        "A microcomputer caught in its own boot sequence, never quite switched on, never quite off. On a small monitor a terminal prints connection attempts, one per second, every one of them failing. The addresses the device tries to call are not servers: houses, trees, cats, loaves of bread, rivers, coffee machines, and in between first names and biographical fragments."
      ],
      de: [
        "„Und in jenen Tagen werden die Menschen den Tod suchen und nicht finden, sie werden begehren zu sterben und der Tod wird von ihnen fliehen.“<br>Offenbarung 9,6",
        "Ein Mikrocomputer, der sich im eigenen Startvorgang verfangen hat, nie ganz angeschaltet, nie ganz aus. Auf einem kleinen Monitor läuft ein Terminal, das im Sekundentakt Verbindungsversuche ausgibt, die alle scheitern. Die Adressen, die das Gerät anzurufen versucht, sind keine Server: Häuser, Bäume, Katzen, Brote, Flüsse, Kaffeemaschinen, dazwischen Vornamen und Biografisches."
      ]
    },
    "dsss": {
      title: "Department for Speculative Social Software",
      year: "2024",
      media: { type: "image", src: "assets/department.webp" },
      alt: "Department for Speculative Social Software, Kunstakademie Düsseldorf.",
      en: [
        "The Department for Speculative Social Software was founded in 2024 at the Kunstakademie Düsseldorf. It works as an experimental space in which technology and code are treated not as mere tools but as an artistic medium in their own right. Here students learn from one another how to take existing digital networks apart and, from an artistic perspective, write their own alternative systems."
      ],
      de: [
        "Das Department for Speculative Social Software wurde 2024 an der Kunstakademie Düsseldorf gegründet. Es funktioniert als experimenteller Raum, in dem Technologie und Code nicht als reine Werkzeuge, sondern als eigenständiges künstlerisches Medium behandelt werden. Studierende lernen hier voneinander, bestehende digitale Netzwerke zu zerlegen und aus einer künstlerischen Perspektive heraus eigene, alternative Systeme zu schreiben."
      ]
    }
  };

  function ext(url, text) {
    return `<a href="${url}" target="_blank" rel="noopener" class="inline-link">${text}</a>`;
  }

  const CV_SECTIONS = [
    ["Education", [
      ["2018–2026", "Kunstakademie Düsseldorf, Fine Art (Akademiebrief), classes of Prof. Gregor Schneider, Prof. John Morgan, Prof. Ed Atkins"],
      ["2025", "Meisterschüler (master student) of Prof. Ed Atkins"],
      ["2012–2018", "Hochschule Düsseldorf, B.A. Communication Design"]
    ]],
    ["Exhibitions and Presentations", [
      ["2026", ext("https://www.duesseldorf.de/fotografie/parisphoto", "Paris Photo") + ", booth Düsseldorf and Photography, Paris"],
      ["2026", ext("https://www.instagram.com/p/DcQ5AY1CkHw/", "Holdings") + ", Doves Flying Inwards, Düsseldorf"],
      ["2026", "<a href='#iiiii' class='inline-link'>iiiii-ii-iiiiiiiiiii-iii-i-iiii</a>, media façade Kö-Bogen II, Düsseldorf"],
      ["2026", "<a href='#im-so-glad' class='inline-link'>I'm so glad that the days are already getting longer</a>, graduation show, class of Prof. Ed Atkins, Kunstakademie Düsseldorf"],
      ["2025", "Rundgang, class of Prof. Ed Atkins, Kunstakademie Düsseldorf"],
      ["2024", ext("https://kunstverein-duesseldorf.de/veranstaltungen/book-release/2024-07-03_472/", "On Synchronicity — Book Launch") + ", class of Prof. John Morgan, Kunstverein für die Rheinlande und Westfalen, Düsseldorf"],
      ["2024", ext("https://lafelce.de/klasse-john-morgan-doppelter-boden/", "Doppelter Boden") + ", La Felce, Cologne"],
      ["2024", "Rundgang, class of Prof. John Morgan, Kunstakademie Düsseldorf"],
      ["2021", ext("https://www.spardastiftung-west.de/projekte/kunstpalast-duesseldorf-2", "Palastrauschen") + ", Kunstpalast Düsseldorf"],
      ["2019", "Rundgang, class of Prof. Gregor Schneider, Kunstakademie Düsseldorf"],
      ["2019", "FLUIDE MEDIALE, Studio for Artistic Research, Düsseldorf"]
    ]],
    ["Awards &amp; Scholarships", [
      ["2027", ext("https://www.listasafn.is/en/news/creative-europe-styrkur/", "CUSP Artist Residency") + ", National Gallery of Iceland, Reykjavík (upcoming)"]
    ]],
    ["Talks", [
      ["2026", "Matter Matters, panel talk, Peter Behrens School of Arts, Hochschule Düsseldorf (upcoming)"],
      ["2026", "I'm Sorry Camera, artist talk, moderated by Sebastian Randerath, Department of Media Studies, University of Bonn"]
    ]],
    ["Teaching", [
      ["since 2025", "Lecturer, Hochschule Düsseldorf, Department of Design — project seminars Halluzinieren, Machine Unlearning, Spekulative Soziale Software"],
      ["since 2024", "Founded the <a href='#dsss' class='inline-link'>Department for Speculative Social Software</a>, Kunstakademie Düsseldorf — workshops and discourse format on programming as artistic practice"]
    ]]
  ];

  const CV_HTML =
    "<p>*1993 · lives and works in Düsseldorf<br><a href='mailto:hallo@nickschmidt.de'>hallo@nickschmidt.de</a></p>" +
    CV_SECTIONS.map(([heading, rows]) =>
      `<h2>${heading}</h2><dl class="cv-list">` +
      rows.map(([year, text]) => `<dt>${year}</dt><dd>${text}</dd>`).join("") +
      "</dl>"
    ).join("");

  const ADDRESS = "Nick Schmidt<br>Ackerstraße 33<br>40233 Düsseldorf";

  const LEGAL = {
    cv: { heading: "CV", html: CV_HTML },
    impressum: {
      heading: "Impressum",
      html: [
        "<p>Angaben gemäß § 5 DDG</p>",
        `<p>${ADDRESS}</p>`,
        "<h2>Kontakt</h2><p>E-Mail: <a href='mailto:hallo@nickschmidt.de'>hallo@nickschmidt.de</a></p>",
        `<h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2><p>${ADDRESS}</p>`,
        "<h2>Verbraucherstreitbeilegung</h2><p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>",
        "<h2>Haftung für Inhalte</h2><p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Bei Bekanntwerden von Rechtsverletzungen werde ich die betreffenden Inhalte umgehend entfernen.</p>",
        "<h2>Haftung für Links</h2><p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich daher keine Gewähr übernehmen; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der verlinkten Seiten. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>",
        "<h2>Urheberrecht</h2><p>Die auf dieser Website veröffentlichten Werke, Texte, Bilder, Videos und Tonaufnahmen unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers. Soweit Inhalte nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet, etwa bei Fotografien in der Dokumentation.</p>",
        "<h2>Datenschutz</h2><p>Informationen zur Verarbeitung personenbezogener Daten auf dieser Website finden Sie in der <a href='#datenschutz' class='inline-link'>Datenschutzerklärung</a>.</p>"
      ].join("")
    },
    datenschutz: {
      heading: "Datenschutzerklärung",
      html: [
        "<h2>1. Datenschutz auf einen Blick</h2>",
        "<p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>",
        "<p>Diese Website setzt keine Cookies und verwendet keine Tracking- oder Werbedienste. Es werden keine Nutzungsprofile erstellt.</p>",
        "<h2>2. Hosting und Server-Logfiles</h2>",
        "<p>Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Daten automatisch in Server-Logfiles erfasst, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp und Betriebssystem. Diese Daten sind für die Auslieferung und den sicheren Betrieb der Website erforderlich und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>",
        "<h2>3. Eingebundene Videos</h2>",
        "<p>Die Videos auf den Projektseiten werden von nickschmidt.de geladen. Dabei wird Ihre IP-Adresse an den dortigen Server (Vercel Inc., USA) übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>",
        "<h2>4. Spracheinstellung</h2>",
        "<p>Wenn Sie die Sprache (Deutsch/Englisch) wechseln, wird Ihre Auswahl ausschließlich lokal im Speicher Ihres Browsers (localStorage, Eintrag „portfolio-lang“) abgelegt. Diese Information wird nicht an uns oder Dritte übertragen und kann jederzeit über die Browsereinstellungen gelöscht werden (§ 25 Abs. 2 Nr. 2 TDDDG).</p>",
        "<h2>5. Verantwortliche Stelle</h2>",
        `<p>${ADDRESS}<br>E-Mail: hallo@nickschmidt.de</p>`,
        "<h2>6. Kontakt per E-Mail</h2>",
        "<p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald der Zweck entfällt, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>",
        "<h2>7. Ihre Rechte</h2>",
        "<p>Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie auf Widerspruch gegen Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen (Art. 21 DSGVO). Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.</p>",
        "<p>Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, etwa bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW).</p>"
      ].join("")
    }
  };

  const body = document.body;
  const brandLink = document.getElementById("brand-link");
  const projectLinks = document.querySelectorAll(".project-link");
  const legalLinks = document.querySelectorAll(".legal-link");
  const langButtons = document.querySelectorAll(".lang-btn");
  const descriptionSection = document.getElementById("project-description");
  const descriptionContent = document.getElementById("description-content");
  const mediaSection = document.getElementById("project-media");
  const mediaContent = document.getElementById("media-content");
  const legalSection = document.getElementById("legal-section");
  const legalContent = document.getElementById("legal-content");

  let lang = "en";
  try {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored === "en" || stored === "de") lang = stored;
  } catch (e) { /* storage unavailable */ }

  function updateLangButtons() {
    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    document.documentElement.lang = lang;
  }

  function clearActiveStates() {
    projectLinks.forEach((el) => el.classList.remove("is-active"));
    legalLinks.forEach((el) => el.classList.remove("is-active"));
  }

  function showHome() {
    clearActiveStates();
    body.className = "view-home";
    descriptionSection.hidden = true;
    mediaSection.hidden = true;
    legalSection.hidden = true;
    mediaContent.innerHTML = "";
    document.title = "Nick Schmidt";
  }

  function renderMedia(project) {
    const m = project.media;
    let html;
    if (m.type === "video") {
      html =
        `<video controls playsinline preload="none" poster="${m.poster}" aria-label="${project.alt}">` +
        `<source src="${m.webm}" type="video/webm">` +
        `<source src="${m.mp4}" type="video/mp4">` +
        "</video>";
    } else {
      html = `<img src="${m.src}" alt="${project.alt}" loading="eager">`;
    }
    (project.images || []).forEach((src) => {
      html += `<img src="${src}" alt="${project.alt}" loading="lazy">`;
    });
    mediaContent.innerHTML = html;
  }

  function showProject(slug) {
    const project = PROJECTS[slug];
    if (!project) {
      showHome();
      return;
    }

    clearActiveStates();
    const activeLink = document.querySelector(`.project-link[data-project="${slug}"]`);
    if (activeLink) activeLink.classList.add("is-active");

    body.className = "view-project";
    legalSection.hidden = true;

    descriptionContent.innerHTML =
      `<p class="project-year">${project.year}</p>` +
      project[lang].map((text) => `<p>${text}</p>`).join("");

    renderMedia(project);

    descriptionSection.hidden = false;
    mediaSection.hidden = false;
    document.title = `${project.title} — Nick Schmidt`;
  }

  function showLegal(slug) {
    const entry = LEGAL[slug];
    if (!entry) {
      showHome();
      return;
    }

    clearActiveStates();
    const activeLink = document.querySelector(`.legal-link[data-legal="${slug}"]`);
    if (activeLink) activeLink.classList.add("is-active");

    body.className = "view-legal";
    descriptionSection.hidden = true;
    mediaSection.hidden = true;
    mediaContent.innerHTML = "";

    legalContent.innerHTML = `<h1>${entry.heading}</h1>` + entry.html;

    legalSection.hidden = false;
    document.title = `${entry.heading} — Nick Schmidt`;
  }

  function handleRoute() {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash === "home") {
      showHome();
    } else if (PROJECTS[hash]) {
      showProject(hash);
    } else if (LEGAL[hash]) {
      showLegal(hash);
    } else {
      showHome();
    }
  }

  brandLink.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", "#home");
    showHome();
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* ignore */ }
      updateLangButtons();
      const hash = window.location.hash.replace(/^#/, "");
      if (PROJECTS[hash]) showProject(hash);
    });
  });

  updateLangButtons();
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
})();
