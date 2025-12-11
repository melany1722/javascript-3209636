import { comic } from "./bd.js"




const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")
const contenedor=document.querySelector(".card-container")

console.log(listaCapitulos)
console.log(infocomic)
console.log(contenedor)

infocomic.innerHTML =`

    
         <div class="hero-content">
            <h1>${comic.nombrecomic}</h1>
              <p>${comic.sinopsis}</p>
      <div class="hero-buttons">
        <a href="#" class="btn primary">VER CAPITULOS</a>
        <a href="#" class="btn secondary">Ver Tráiler</a>
      </div>
    </div>

`
// aqui vamos a mostrar nombre de capitulos

comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("cap")
    micard.innerHTML= `
    <a href="escenas.html?id=${escenas.id}">
        <img src="${escenas.image}">
        <h3>${escenas.nombre}</h3>
     </a>   `
    


    listaCapitulos.appendChild(micard)
    
})


comic.personajes.forEach(personajes=>{
    const micard = document.createElement("div")
    micard.classList.add("card")
    micard.innerHTML= `
    <a href="personajes.html?id=${personajes.id}">
        <img src="${personajes.image}">
        <h3>${personajes.nombre}</h3>
       </a> `
    


    contenedor.appendChild(micard)
   
})

const slides = document.querySelectorAll(".slide");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicators = document.querySelector(".indicators");

let index = 0;

// Crear indicadores
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  indicators.appendChild(dot);

  dot.addEventListener("click", () => moveToSlide(i));
});

const updateCarousel = () => {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;

  // Activar indicador correcto
  document.querySelectorAll(".indicators button").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
};

const moveToSlide = (i) => {
  index = i;
  updateCarousel();
};

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Auto-play cada 4 segundos
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 4000);
