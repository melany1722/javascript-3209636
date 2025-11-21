const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")
const contenedor=document.querySelector("card-container")

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
        <img src="${escenas.image}">
        <h3>${escenas.nombre}</h3>
        `
    


    listaCapitulos.appendChild(micard)
    console.log(escenas.nombre)
})


comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("card")
    micard.innerHTML= `
        <img src="${escenas.image}">
        <h3>${escenas.personajes}</h3>
        `
    


    contenedor.appendChild(micard)
    console.log(escenas.nombre)
})
