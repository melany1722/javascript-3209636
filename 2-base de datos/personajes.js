import { comic } from "./bd.js";

const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id"));

const personaje = comic.personajes.find(p => p.id === id);
const contenedor = document.querySelector(".contenedor");

contenedor.innerHTML = `
<section class="ficha">

  <div class="portada">
    <img src="${personaje.image}" alt="${personaje.nombre}">
  </div>

  <div class="info">
    <h1>${personaje.nombre}</h1>

    <div class="datos">
      <p><span>Rol:</span> Personaje principal</p>
      <p><span>Universo:</span>PIKTARA</p>
    </div>

    <p class="descripcion">
      ${personaje.descripcion}
    </p>

    <div class="acciones">
      <a href="index.html#eligeatuPersonaje" class="btn primary">← Volver</a>
    </div>
  </div>

</section>
`;



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



