
const STATS = [
  { name: "HTML / CSS",           value: 75 },
  { name: "Bootstrap / Tailwind", value: 60 },
  { name: "JavaScript",           value: 60 },
  { name: "React + Vite",         value: 60 },
];

// Proyectos (niveles): para añadir uno nuevo, copia un bloque { ... } y pégalo al final.
const PROJECTS = [
  {
    title: "Tarjeta de presentación",
    description: "Mi primera tarjeta como desarrolladora web: presentación personal, avatar y enlaces de contacto. Versionada con Git y publicada en GitHub.",
    icon: "id-card",
    image: "img/semana1-tarjeta.jpg",
    tags: ["HTML", "CSS", "Git", "GitHub"],
    category: "HTML/CSS",
    week: "Semana 1",
    difficulty: 1,       // estrellas de 1 a 5
    status: "done",      // "done" o "wip"
    demo: "",            // link a la demo publicada (déjalo vacío si no hay)
    code: "https://github.com/Cm-byte/Portafolio-web-uncp",
  },
  {
    title: "Sitio tributo Adéla",
    description: "Sitio responsivo para una cantautora: navbar colapsable, hero con gradiente, grilla de discografía y formulario de registro con validación y accesibilidad.",
    icon: "mic",
    image: "img/semana3-adela.jpg",
    tags: ["Bootstrap 5", "Tailwind CSS", "Responsive", "Lighthouse"],
    category: "HTML/CSS",
    week: "Semana 3",
    difficulty: 2,
    status: "done",
    demo: "",
    code: "https://github.com/Cm-byte/PracticaSemana3",
  },
  {
    title: "Ecosistema del río Amazonas",
    description: "Simulación interactiva de un tramo del río en Loreto: peces, hojas y lluvia animados en Canvas, modo noche, fichas de especies y controles validados.",
    icon: "fish",
    image: "img/semana4-amazonas.jpg",
    tags: ["JavaScript", "Canvas API", "DOM", "requestAnimationFrame"],
    category: "JavaScript",
    week: "Semana 4",
    difficulty: 3,
    status: "done",
    demo: "",
    code: "https://github.com/Cm-byte/Semana04_Actividad",
  },
  {
    title: "Moda Andina · Panel",
    description: "Panel de administración de una boutique de Huancayo: tarjetas de métricas, menú lateral y arquitectura de componentes con props y children.",
    icon: "shirt",
    image: "img/semana5-moda-andina.jpg",
    tags: ["React", "Vite", "JSX", "CSS Modules"],
    category: "React",
    week: "Semana 5",
    difficulty: 3,
    status: "done",
    demo: "",
    code: "https://github.com/Cm-byte/Semana5Tienda",
  },
  {
    title: "Veterinaria Patitas",
    description: "SPA para una veterinaria: rutas con React Router, lista de mascotas consumida desde una API con Axios, formulario de registro y página 404.",
    icon: "paw",
    image: "img/semana6-veterinaria.jpg",
    tags: ["React", "React Router", "Axios", "async/await"],
    category: "React",
    week: "Semana 6",
    difficulty: 4,
    status: "done",
    demo: "",
    code: "https://github.com/Cm-byte/Semana6Veterinaria",
  },
  {
    title: "Sistema académico CEID-UNCP",
    description: "Sistema web académico para el Centro de Idiomas de la UNCP, desarrollado en mis prácticas pre-profesionales. El backend lo integró la Oficina de Tecnologías de Información.",
    role: "Análisis de requerimientos y desarrollo frontend",   // tu parte en el proyecto
    icon: "school",
    image: "",           // si tienes una captura, ponla aquí: "img/ceid.jpg"
    tags: ["Requerimientos", "AS-IS / TO-BE", "BPMN", "Figma", "Frontend"],
    category: "Prácticas",
    week: "Pre-profesional",
    boss: true,          // lo muestra como "nivel jefe"
    difficulty: 5,
    status: "done",
    demo: "",
    code: "",
  },
];

// Cuaderno: una entrada por semana. Escribe la reflexión con tus propias palabras.
const NOTEBOOK = [
  {
    week: "Semana 1",
    topic: "Fundamentos de la tecnología web, Git y GitHub",
    learned: "La diferencia más grande que noté es que una aplicación web funciona en cualquier dispositivo o sistema operativo, porque corre sobre el navegador: se accede igual desde una PC, un celular o una tablet sin instalar nada.",
    lab: "Tarjeta de presentación",
    reflection: "",
  },
  {
    week: "Semana 3",
    topic: "Frameworks CSS: Bootstrap 5 y Tailwind CSS, layouts responsivos y tipografía",
    learned: "",
    lab: "Sitio tributo Adéla",
    reflection: "",
  },
  {
    week: "Semana 4",
    topic: "JavaScript: DOM, closures, IIFE, arrow functions y Canvas API",
    learned: "",
    lab: "Ecosistema del río Amazonas",
    reflection: "",
  },
  {
    week: "Semana 5",
    topic: "React con Vite: JSX, componentes, props, children y CSS Modules",
    learned: "",
    lab: "Moda Andina · Panel",
    reflection: "",
  },
  {
    week: "Semana 6",
    topic: "React: eventos, renderizado condicional, formularios, routing y consumo de APIs",
    learned: "",
    lab: "Veterinaria Patitas",
    reflection: "",
  },
];

// Bibliografía (libros y URLs, no videos)
const BIBLIOGRAPHY = [
  { title: "MDN Web Docs", url: "https://developer.mozilla.org/es/" },
  { title: "W3C – Open Web Platform", url: "https://www.w3.org/wiki/Open_Web_Platform" },
  { title: "Bootstrap 5", url: "https://getbootstrap.com/" },
  { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { title: "React", url: "https://react.dev/" },
  { title: "Vite", url: "https://vitejs.dev/" },
  { title: "React Router", url: "https://reactrouter.com/" },
  { title: "Axios", url: "https://axios-http.com/" },
];

/* =========================================================
   Lógica de renderizado (no hace falta editar)
   ========================================================= */
const $ = (s) => document.querySelector(s);

// Iconos SVG (estilo Lucide). Usa el nombre en el campo "icon" de cada proyecto.
const ICONS = {
  "id-card": '<path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/>',
  mic: '<path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/>',
  fish: '<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/>',
  shirt: '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>',
  paw: '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>',
  school: '<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  hourglass: '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

// Estrellas del fondo
const starsEl = $("#stars");
for (let i = 0; i < 60; i++) {
  const s = document.createElement("span");
  s.style.left = Math.random() * 100 + "%";
  s.style.top = Math.random() * 100 + "%";
  s.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
  starsEl.appendChild(s);
}

// Stats
$("#stats").innerHTML = STATS.map(s => `
  <div class="stat">
    <div class="stat-label"><span>${s.name}</span><span>LV ${Math.round(s.value / 10)}</span></div>
    <div class="bar"><div style="width:${s.value}%"></div></div>
  </div>`).join("");

// Filtros
const categories = ["Todos", ...new Set(PROJECTS.map(p => p.category))];
let current = "Todos";
function renderFilters() {
  $("#filters").innerHTML = categories.map(c =>
    `<button class="${c === current ? "active" : ""}" data-cat="${c}">${c.toUpperCase()}</button>`
  ).join("");
  document.querySelectorAll("#filters button").forEach(b =>
    b.onclick = () => { current = b.dataset.cat; renderFilters(); renderLevels(); }
  );
}

// Tarjetas de nivel
function renderLevels() {
  const list = PROJECTS.filter(p => current === "Todos" || p.category === current);
  $("#levels").innerHTML = list.map(p => `
    <article class="box level${p.boss ? " boss" : ""}">
      <div class="level-thumb">${p.boss ? '<span class="boss-tag pixel">★ NIVEL JEFE</span>' : ""}${p.image ? `<img src="${p.image}" alt="Captura de ${p.title}" loading="lazy">` : icon(p.icon)}</div>
      <div class="level-body">
        <span class="level-num pixel">NIVEL ${String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}${p.week ? " · " + p.week.toUpperCase() : ""}</span>
        <h3>${p.title}</h3>
        <span class="difficulty" aria-label="Dificultad ${p.difficulty} de 5">${"★".repeat(p.difficulty)}${"☆".repeat(5 - p.difficulty)}</span>
        <p>${p.description}</p>
        ${p.role ? `<p class="role"><span class="pixel">MI ROL:</span> ${p.role}</p>` : ""}
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <span class="status ${p.status}">${p.status === "done" ? icon("check") + " COMPLETADO" : icon("hourglass") + " EN PROGRESO"}</span>
        <div class="level-links">
          ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noopener">JUGAR</a>` : ""}
          ${p.code ? `<a class="btn alt" href="${p.code}" target="_blank" rel="noopener">CÓDIGO</a>` : ""}
        </div>
      </div>
    </article>`).join("");
}

// Cuaderno (partidas guardadas)
$("#notebook").innerHTML = NOTEBOOK.map((n, i) => `
  <details class="box save" ${i === 0 ? "open" : ""}>
    <summary>
      <span class="save-slot pixel">SAVE ${String(i + 1).padStart(2, "0")}</span>
      <span class="save-title"><strong>${n.week}</strong> · ${n.topic}</span>
    </summary>
    <div class="save-body">
      <h4 class="pixel">TEMAS APRENDIDOS</h4>
      <p>${n.learned || '<span class="todo">Por escribir con tus propias palabras.</span>'}</p>
      <h4 class="pixel">LABORATORIO</h4>
      <p>${n.lab ? `<a href="#niveles">▶ ${n.lab}</a>` : '<span class="todo">Sin laboratorio.</span>'}</p>
      <h4 class="pixel">REFLEXIÓN</h4>
      <p>${n.reflection || '<span class="todo">¿Qué aprendí? ¿Cómo lo aprendí?</span>'}</p>
    </div>
  </details>`).join("");

// Bibliografía
$("#bibliography").innerHTML = BIBLIOGRAPHY.map(b =>
  `<li><a href="${b.url}" target="_blank" rel="noopener">${b.title}</a></li>`
).join("");

renderFilters();
renderLevels();