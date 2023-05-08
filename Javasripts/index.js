
const contenedorElementos = document.getElementById('card')

let tarjetas = ''
for (events of data.events){
    tarjetas += `<section class="contenedor-card" id="card">
    <div class="card" style="width: 18rem;">
        <img src=${events.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${events.name}</h5>
        <p class="card-text">${events.description}</p>
        <p>$${events.price}</p>
        <a href="Details.html" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
}

contenedorElementos.innerHTML = tarjetas



