// ====== EDIT ME ======
// Paste your GeeksforGeeks interview experience URL below.
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
    modeMiniLabel.textContent = mode === "create" ? "Create mode" : "Build mode";
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
