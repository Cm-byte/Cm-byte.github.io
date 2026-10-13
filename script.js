
const STATS = [
  { name: "HTML / CSS",           value: 75 },
  { name: "Bootstrap / Tailwind", value: 60 },
  { name: "JavaScript",           value: 60 },
  { name: "React + Vite",         value: 60 },
];

const PROJECTS = [
  {
    title: "Tarjeta de presentación",
    description: "Mi primera tarjeta como desarrolladora web: presentación personal, avatar y enlaces de contacto. Versionada con Git y publicada en GitHub.",
    icon: "🪪",
    image: "img/semana1-tarjeta.jpg",
    tags: ["HTML", "CSS", "Git", "GitHub"],
    category: "HTML/CSS",
    week: "Semana 1",
    difficulty: 1,      
    status: "done",      
    demo: "",            
    code: "https://github.com/Cm-byte/Portafolio-web-uncp",
  },
  {
    title: "Sitio tributo Adéla",
    description: "Sitio responsivo para una cantautora: navbar colapsable, hero con gradiente, grilla de discografía y formulario de registro con validación y accesibilidad.",
    icon: "🎤",
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
    icon: "🐟",
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
    icon: "👗",
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
    icon: "🐾",
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
    title: "Refugio Orejitas",
    description: "Página responsiva de un refugio de conejos en Huancayo, armada con 7 componentes (uno por sección) en CSS puro, y un ejercicio que pasa un objeto por 4 componentes anidados hasta mostrarlo en una card.",
    icon: "🐰",
    image: "img/semana6-orejitas.jpg",
    tags: ["React", "Vite", "Componentes", "Props", "CSS puro"],
    category: "React",
    week: "Semana 6",
    difficulty: 3,
    status: "done",
    demo: "",
    code: "https://github.com/Cm-byte/semana6React",
  },
  {
    title: "Sistema académico CEID-UNCP",
    description: "Sistema web académico para el Centro de Idiomas de la UNCP, desarrollado en mis prácticas pre-profesionales. El backend lo integró la Oficina de Tecnologías de Información.",
    role: "Análisis de requerimientos y desarrollo frontend",  
    icon: "🏫",
    image: "img/ceid.jpg",           
    tags: ["Requerimientos", "AS-IS / TO-BE", "BPMN", "Figma", "Frontend"],
    category: "Prácticas",
    week: "Pre-profesional",
    boss: true,         
    difficulty: 5,
    status: "done",
    demo: "",
    code: "",
  },
];

// Cuaderno: una entrada por semana. 
const NOTEBOOK = [
  {
    week: "Semana 1",
    topic: "Fundamentos de la tecnología web, Git y GitHub",
    learned: "La diferencia más grande que noté es que una aplicación web funciona en cualquier dispositivo o sistema operativo, porque corre sobre el navegador: se accede igual desde una PC, un celular o una tablet sin instalar nada.",
    lab: "Tarjeta de presentación",
    reflection: "Esta primera práctica me permitió comprender mejor cómo se estructura una página web y cómo se complementan HTML y CSS para presentar información de forma organizada. También aprendí la importancia de utilizar Git y GitHub para guardar versiones de mis proyectos. Considero que esta actividad fue un primer paso para familiarizarme con el desarrollo web y ganar confianza al crear mis propias páginas",
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


const $ = (s) => document.querySelector(s);

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
      <div class="level-thumb">${p.boss ? '<span class="boss-tag pixel">★ NIVEL JEFE</span>' : ""}${p.image ? `<img src="${p.image}" alt="Captura de ${p.title}" loading="lazy">` : p.icon}</div>
      <div class="level-body">
        <span class="level-num pixel">NIVEL ${String(PROJECTS.indexOf(p) + 1).padStart(2, "0")}${p.week ? " · " + p.week.toUpperCase() : ""}</span>
        <h3>${p.title}</h3>
        <span class="difficulty" aria-label="Dificultad ${p.difficulty} de 5">${"★".repeat(p.difficulty)}${"☆".repeat(5 - p.difficulty)}</span>
        <p>${p.description}</p>
        ${p.role ? `<p class="role"><span class="pixel">MI ROL:</span> ${p.role}</p>` : ""}
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <span class="status ${p.status}">${p.status === "done" ? "✔ COMPLETADO" : "⏳ EN PROGRESO"}</span>
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