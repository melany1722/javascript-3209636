import { comic } from "./bd.js"


const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")
const contenedor=document.querySelector(".card-container")


infocomic.innerHTML=`
<h1>${comic.nombrecomic}</h1>
<p>${comic.sinopsis}</p>
<div class="hero-buttons">
<a class="btn primary">VER CAPITULOS</a>
<a class="btn secondary">VER TRAILER</a>
</div>`


comic.escenas.forEach(e=>{
const div=document.createElement("div")
div.className="cap"
div.innerHTML=`<a href="escenas.html?id=${e.id}"><img src="${e.image}"><h3>${e.nombre}</h3></a>`
listaCapitulos.appendChild(div)
})


comic.personajes.forEach(p=>{
const div=document.createElement("div")
div.className="card"
div.innerHTML=`<a href="personajes.html?id=${p.id}"><img src="${p.image}"><h3>${p.nombre}</h3></a>`
contenedor.appendChild(div)
})

// ================== CARRUSEL CON BOTONES ==================

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".carrusel-btn.prev");
const btnNext = document.querySelector(".carrusel-btn.next");

let index = 0;
const totalSlides = slide.length;

function mostrarSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

// Botón siguiente
btnNext.addEventListener("click", () => {
  index++;
  if (index >= totalSlides) {
    index = 0;
  }
  mostrarSlide(index);
});

// Botón anterior
btnPrev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalSlides - 1;
  }
  mostrarSlide(index);
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


