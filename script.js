(function () {
  "use strict";

  const PROJECTS = {
    "im-so-glad": {
      title: "I'm so glad that the days are already getting longer",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Exhibition view of 'I'm so glad that the days are already getting longer': two visitors seated on the gallery floor facing a black screen on a sofa displaying the text 'a man and a woman sitting in a room...'"
    },
    "no": {
      title: "NO",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Installation view for NO by Nick Schmidt."
    },
    "piss-forever": {
      title: "Piss forever",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Installation view for Piss forever by Nick Schmidt."
    },
    "iiii": {
      title: "iiii-ii-iiiiiiiiiii-iii-i-iiii",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Installation view for iiii-ii-iiiiiiiiiii-iii-i-iiii by Nick Schmidt."
    },
    "revelation-9-6": {
      title: "Revelation 9:6",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Installation view for Revelation 9:6 by Nick Schmidt."
    },
    "dsss": {
      title: "Department for Speculative Social Software",
      paragraphs: [
        "I had a camera observe the exhibition space and continuously translate it into text, which a digital copy of my voice spoke back into the room. Some of the sentences were processed further by a second model until they had lost their actual subject and nothing was left but the tone itself.",
        "Every sentence came into being at the very moment it was spoken. When someone entered the room, the system addressed those present; when no one was there, it went on speaking to itself. The installation ran for seven days, ten hours a day."
      ],
      image: "assets/installation.jpg",
      alt: "Installation view for Department for Speculative Social Software by Nick Schmidt."
    }
  };

  const LEGAL = {
    impressum: {
      heading: "Impressum",
      paragraphs: [
        "Angaben gemäß § 5 DDG",
        "Nick Schmidt<br>Musterstraße 1<br>10115 Berlin",
        "Kontakt:<br>E-Mail: mail@nickschmidt.example"
      ]
    },
    datenschutz: {
      heading: "Datenschutz",
      paragraphs: [
        "Diese Website verwendet keine Cookies, keine Tracking-Dienste und keine externen Analyse-Tools.",
        "Beim Aufruf der Website werden durch den Hosting-Anbieter lediglich technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs) temporär verarbeitet."
      ]
    }
  };

  const body = document.body;
  const brandLink = document.getElementById("brand-link");
  const projectLinks = document.querySelectorAll(".project-link");
  const legalLinks = document.querySelectorAll(".legal-link");
  const descriptionSection = document.getElementById("project-description");
  const descriptionContent = document.getElementById("description-content");
  const mediaSection = document.getElementById("project-media");
  const projectImage = document.getElementById("project-image");
  const legalSection = document.getElementById("legal-section");
  const legalContent = document.getElementById("legal-content");

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
    document.title = "Nick Schmidt";
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

    descriptionContent.innerHTML = project.paragraphs
      .map((text) => `<p>${text}</p>`)
      .join("");

    projectImage.src = project.image;
    projectImage.alt = project.alt;

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

    legalContent.innerHTML =
      `<h1>${entry.heading}</h1>` +
      entry.paragraphs.map((text) => `<p>${text}</p>`).join("");

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

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
})();
