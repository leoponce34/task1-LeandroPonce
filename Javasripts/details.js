const contenedorDetails = document.getElementById('contenedorDetails');
let events = data.events;
let currentDate = data.currentDate;

function crearTarjeta_details(evento) {
    let queryString = location.search
    let params = new URLSearchParams(queryString)
    const id = params.get("id")
    const details = evento.find(d => d._id == id)
    let card
    
    if(details.date < currentDate) {
        card = `<section class="container-details">
        <div class="details-left">
            <img class="details-img" src="${details.image}" alt="photo">
        </div>
        <article class="details-right">
            <h2 class="details-title">${details.name}</h2>
            <p class="details-text">${details.description}</p>
            <p class="details-text"><span class= "items">Category:</span> ${details.category}</p>
            <p class="details-text"><span class= "items">Date:</span> ${details.date}</p>
            <p class="details-text"><span class= "items">Place:</span> ${details.place}</p>
            <p class="details-text"><span class= "items">Capacity:</span> ${details.capacity}</p>
            <p class="details-text"><span class= "items">Assistance: </span>${details.assistance}</p>
            <p class="details-text"><span class= "items">Price: </span> $${details.price}</p>
            <div class="cont-det-but">
                <button class= "but-details btn"><a href="index.html">HOME</a></button>
            </div>
        </article>
    </section>`
    } else if(details.date > currentDate){
        card = `<section class="container-details">
        <div class="details-left">
            <img class="details-img" src="${details.image}" alt="photo">
        </div>
        <article class="details-right">
            <h2 class="details-title">${details.name}</h2>
            <p class="details-text">${details.description}</p>
            <p class="details-text"><span class= "items">Category:</span> ${details.category}</p>
            <p class="details-text"><span class= "items">Date:</span> ${details.date}</p>
            <p class="details-text"><span class= "items">Place:</span> ${details.place}</p>
            <p class="details-text"><span class= "items">Capacity:</span> ${details.capacity}</p>
            <p class="details-text"><span class= "items">Estimate: </span>${details.estimate}</p>
            <p class="details-text"><span class= "items">Price: </span> $${details.price}</p>
            <div class="cont-det-but">
                <button class= "but-details btn"><a href="index.html">HOME</a></button>
            </div>
        </article>
    </section>`
    }
    return card
}
contenedorDetails.innerHTML = crearTarjeta_details(events)

