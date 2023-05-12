// //CONSTANTES CAPTURADAS
const contenedorElementos = document.getElementById('card')
const contenedorCheck = document.getElementById('check')
const input = document.querySelector('input')


//EVENTOS
contenedorCheck.addEventListener('change', () => {
    let arrayFiltrado = filtrarPorCategoria(data.events, input.value)
    pegarTarjetas(arrayFiltrado)
})


input.addEventListener('keyup',()=>{
    let arrayFiltrado = filtrarPorTexto(data.events, input.value)
    pegarTarjetas(arrayFiltrado)
})



//LLAMAR FUNCIONES
crearcheckboxes(data.events)
pegarTarjetas(data.events)


//FUNCIONES
function pegarTarjetas(arrayDatos){
    if(arrayDatos.length == 0){
        contenedorElementos.innerHTML = "<h2 class='fw-bolder'>NO MATCHES!</h2>"
        return
    }
    let tarjetas = ''
    arrayDatos.forEach(elemento => {
        tarjetas += `<div class="card " style="width: 18rem;">
        <img src=${elemento.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${elemento.name}</h5>
        <p class="card-text">${elemento.description}</p>
        <p>$${elemento.price}</p>
        <button class="card-but btn"><a href="details.html?id=${elemento._id}" target="_blank">Details</a></button>
        </div>
        </div>
        `
    })
    contenedorElementos.innerHTML = tarjetas
}


function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}


function crearcheckboxes(arrayInfo){
    let checks = ''
    let categoriasRepetidos = arrayInfo.map(elemento => elemento.category)
    let categorias = new Set(categoriasRepetidos)
    console.log(categorias);
    let arrayCategorias = Array.from(categorias)   
    console.log(arrayCategorias);
    arrayCategorias.forEach(elemento => {
        console.log(elemento);
        checks += `<div class="form-check p-2 form-check-inline" id="check">
        <input class="form-check-input" type="checkbox" id=${elemento} value="${[elemento]}">
        <label class="form-check-label" for=${elemento}>${elemento}</label>
    </div>`
    })
    contenedorCheck.innerHTML = checks
}


function filtrarPorCategoria(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type=checkbox]")
    let arrayChecks = Array.from(checkboxes)
    let checksChecked = arrayChecks.filter(checks => checks.checked)
        console.log(checksChecked);
    if(checksChecked.length == 0) return arrayInfo
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
    return arrayFiltrado
}


