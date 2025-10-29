// Klausās, kad lietotājs ritina lapu
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header'); // Atrod <header> ar klasi "header"

  if (window.scrollY > 10) {
    header.classList.add('scrolled'); // Ja lapu ir sākts skrollēt — pievieno .scrolled klasi
  } else {
    header.classList.remove('scrolled'); // Ja atgriežas pašā augšā — noņem .scrolled klasi
  }
});

// Atrodam logotipa elementu pēc ID
const logo = document.getElementById("logo");

// Kad uzbrauc ar peli — maina uz hover attēlu
logo.addEventListener("mouseenter", () => {
  logo.src = "m.images/HomePogaHover.svg";
});

// Kad noņem peli — atgriežas sākotnējais attēls
logo.addEventListener("mouseleave", () => {
  logo.src = "m.images/HomePoga.svg";
});

// Kad nospiež ar peli — arī maina uz sākotnējo (vai jebko citu)
logo.addEventListener("mousedown", () => {
  logo.src = "m.images/HomePoga.svg"; // Piemēram, "nospiešanas" variants
});

// Kad atlaiž peles pogu — atgriežas uz hover vai default
logo.addEventListener("mouseup", () => {
  logo.src = "m.images/HomePogaHover.svg";
});

// Scroll progress bar loģika
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".scroll-progress"); // Atrod indikatoru
  const scrollTop = window.scrollY;                              // Cik tālu ritināts
  const docHeight = document.body.scrollHeight - window.innerHeight; // Kopējais ritināmais garums
  const scrollPercent = (scrollTop / docHeight) * 100;           // Procentu attiecība
  scrollBar.style.width = scrollPercent + "%";                   // Pielāgo platumu
});

const menu = document.querySelector('.menu');
const hint = document.getElementById('menuHint');

if (menu && hint) {
  menu.addEventListener('scroll', () => {
    hint.style.display = 'none';
  }, { once: true }); // tikai pirmajā skrolēšanas reizē
}

// Vienīgais DOMContentLoaded – viss vienuviet
document.addEventListener("DOMContentLoaded", () => {
  // === Intro teksts ===
  const p = document.querySelector(".introduction p");
  if (p) {
    p.innerHTML = p.innerHTML
      .replace("Digital Creator", "<span class='intro-line'>Digital Creator</span>")
      .replace("Programming Engineer - studying", "<span class='intro-line align-right'>Programming Engineer - studying</span>")
      .replace("Antique Furniture Restorer", "<span class='intro-line'>Antique Furniture Restorer</span>");
  }

 const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    let currentPath = window.location.pathname;

    if (currentPath === "/") currentPath = "/index.html";
    if (!currentPath.endsWith(".html")) currentPath += ".html";

    const isLatvian = currentPath.includes("_lv");
    langToggle.textContent = isLatvian ? "EN" : "LV";

    langToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parts = currentPath.split("/");
      const filename = parts.pop();

      const newFilename = isLatvian
        ? filename.replace("_lv", "")
        : filename.replace(".html", "_lv.html");

      parts.push(newFilename);
      const newPath = parts.join("/");
      window.location.href = newPath;
    });
  }
}); 

document.querySelectorAll('.photo-compare').forEach(pc => {
  const range = pc.querySelector('.pc-range');
  const update = v => pc.style.setProperty('--pos', v + '%');
  range.addEventListener('input', e => update(e.target.value));
});


/* Atrodam visus salīdzināšanas konteinerus (ja būs vairāki) */
document.querySelectorAll('.photo-compare').forEach(pc=>{
  const range = pc.querySelector('.pc-range');                // saņem slīdni
  const update = v => pc.style.setProperty('--pos', v + '%'); // atjauno pozīciju CSS mainīgajā
  range.addEventListener('input', e => update(e.target.value)); // “dzīvais” vilkšanas notikums
  range.addEventListener('change', e => update(e.target.value)); // drošībai
});




document.querySelectorAll('.photo-compare').forEach(pc => {
  const range = pc.querySelector('.pc-range');
  const update = v => pc.style.setProperty('--pos', v + '%');
  range.addEventListener('input', e => update(e.target.value));
});


window.addEventListener("pageshow", () => {
  document.querySelectorAll(".menu-button").forEach(btn => btn.blur());
});