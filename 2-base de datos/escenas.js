import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const escena = comic.escenas.find(e => e.id === id);
const contenedor = document.querySelector(".padre");

contenedor.innerHTML = `
<section class="hero">

  <div class="video animate-left">
    <video src="${escena.video}" controls></video>
  </div>

  <div class="hero-info animate-right">
    <h1>${escena.nombre}</h1>
    <p>${escena.descripcion}</p>

    <div class="hero-buttons">
      <button class="btn play">▶ Play</button>
      <button class="btn download">⬇ Descargar</button>
    </div>

    <div class="volver">
      <a href="index.html">← Volver al inicio</a>
    </div>
  </div>

</section>
`;


window.addEventListener("load", () => {
  document.querySelectorAll(".animate-fade, .animate-left, .animate-right")
    .forEach(el => el.classList.add("active"));
});



window.addEventListener("load", () => {

  const flash = document.createElement("div");
  flash.className = "power-flash";
  document.body.appendChild(flash);

  const page = document.querySelector(".page-enter");
  if (page) {
    setTimeout(() => {
      page.classList.add("power-on");
    }, 300); 
  }

  setTimeout(() => {
    flash.remove();
  }, 1200);
});

