// GeeksforGeeks interview experience URL below.
const GFG_INTERVIEW_URL = "https://www.geeksforgeeks.org/interview-experiences/chubb-business-services-interview-experience-trainee-software-engineer-on-campus/";
// ======================

(function initGfgLink(){
  const link = document.getElementById("gfgLink");
  const note = link.querySelector(".gfg-note");
  if (GFG_INTERVIEW_URL) {
    link.href = GFG_INTERVIEW_URL;
    note.textContent = "geeksforgeeks.org";
  } else {
    link.href = "https://www.geeksforgeeks.org/";
    note.textContent = "add your article link in script.js";
  }
})();

// ====== mobile nav toggle ======
const siteHeader = document.querySelector(".site-header");
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

function closeNav() {
  siteHeader.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("click", (e) => {
  if (!siteHeader.classList.contains("nav-open")) return;
  if (!siteHeader.contains(e.target)) closeNav();
});

// ====== mode toggle ======
const body = document.body;
const modeSwitch = document.getElementById("modeSwitch");
const modeMini = document.getElementById("modeMini");
const modeMiniLabel = document.getElementById("modeMiniLabel");
const heroSub = document.querySelector(".hero-sub");

function setMode(mode, { skipTransition } = {}) {
  const doSwitch = () => {
    body.dataset.mode = mode;
    modeSwitch.setAttribute("aria-checked", mode === "create");
    modeMiniLabel.textContent = mode === "create" ? "Creator mode" : "Engineer mode";
    if (heroSub) {
      heroSub.textContent = mode === "create"
        ? heroSub.dataset.create
        : heroSub.dataset.build;
    }
  };

  if (skipTransition) { doSwitch(); return; }

  body.classList.add("mode-transitioning");
  window.setTimeout(() => {
    doSwitch();
    body.classList.remove("mode-transitioning");
  }, 260);
}

function toggleMode() {
  const next = body.dataset.mode === "build" ? "create" : "build";
  setMode(next);
}

modeSwitch.addEventListener("click", toggleMode);
modeMini.addEventListener("click", toggleMode);
modeSwitch.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMode(); }
});

// init hero sub text on load
setMode("build", { skipTransition: true });

// ====== scroll reveal ======
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => io.observe(el));

// ====== typewriter hero name ======
const typedEl = document.getElementById("typedText");
const TYPED_WORDS = ["Bhavya Lalchandani", "Software Engineer", "Content Creator", "Designer"];
const TYPE_SPEED = 110;      // ms per character while typing
const DELETE_SPEED = 40;    // ms per character while deleting
const HOLD_TIME = 1600;     // ms to pause once a word is fully typed

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentWord = TYPED_WORDS[wordIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = currentWord.slice(0, charIndex);
    if (charIndex === currentWord.length) {
      deleting = true;
      window.setTimeout(typeLoop, HOLD_TIME);
      return;
    }
    window.setTimeout(typeLoop, TYPE_SPEED);
  } else {
    charIndex--;
    typedEl.textContent = currentWord.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
      window.setTimeout(typeLoop, TYPE_SPEED);
      return;
    }
    window.setTimeout(typeLoop, DELETE_SPEED);
  }
}

if (typedEl) { typeLoop(); }
