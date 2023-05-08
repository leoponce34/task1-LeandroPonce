
const contenedorElementos = document.getElementById('pastcard')

function pasados(evento){
    let pasados = evento.filter(e => e.date < data.currentDate)

let tarjetas = ''
for (events of data.currentDate){
    tarjetas += `<section class="contenedor-card" id="pastcard">
    <div class="card" style="width: 18rem;">
        <img src=${events.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${events.name}</h5>
        <p class="card-text">${events.description}</p>
        <p> class="card-date">${events.date}</p>
        <p>$${events.price}</p>
        <a href="Details.html" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`

}

contenedorElementos.innerHTML = contenedor
}

