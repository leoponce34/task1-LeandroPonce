const url = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(url)
.then(res => res.json())
.then(data => {
    const events = data.events
    const currentDate = data.currentDate


    const porcentajeAsistencia = events.filter(eve => eve.assistance).map(eve => {return{
        name: eve.name,
        assistance: eve.assistance,
        capacity: eve.capacity,
        percentage: ((eve.assistance / eve.capacity) * 100).toFixed(2)
    }})


    const ordenAsistencia = porcentajeAsistencia.sort((a,b) => b.percentage - a.percentage).map(eve => {return `${eve.name}: ${eve.percentage}%`})
    console.log(ordenAsistencia);

    const primerEvento = ordenAsistencia.slice(-3)
    console.log(primerEvento);
    const pasadoEv = events.filter(eve => eve.date < currentDate)
    console.log(pasadoEv);
    const ordenCapacidad = pasadoEv.sort((a,b) => b.capacity - a.capacity).map(eve => {return `${eve.name}: ${eve.capacity}`})
    console.log(ordenCapacidad);

    const primeraTabla = document.getElementById('primerTabla')
    primeraTabla.innerHTML = `
<tr>
    <td>${ordenAsistencia[0]}</td>
    <td>${primerEvento[2]}</td>
    <td>${ordenCapacidad[0]}</td>
</tr>
<tr>
    <td>${ordenAsistencia[1]}</td>
    <td>${primerEvento[1]}</td>
    <td>${ordenCapacidad[1]}</td>
</tr>
`






    const upEvents = events.filter(eve => eve.date > currentDate).map(eve => {return{
        name: eve.name,
        category: eve.category,
        capacity: eve.capacity,
        estimate: eve.estimate,
        price: eve.price,
        revenues:(eve.price * eve.estimate)
    }})
console.log(upEvents);



    const upMapCategorias = upEvents.map((upcat) => upcat.category)
    console.log(upMapCategorias);
    const uCCategorias = upMapCategorias.filter((item, index) => upMapCategorias.indexOf(item) == index)
    console.log(uCCategorias);

    function dataUpCCategorias(category) {
        let ingreUpCC= 0
        let capUpCC= 0
        let estUpCC= 0
        let eveUpCC= []
        upEvents.forEach((eve) => {if(eve.category == category){
            ingreUpCC += eve.revenues
            capUpCC += eve.capacity
            estUpCC += eve.estimate
        }
    });

        let porcentajeUpCC = ((estUpCC / capUpCC) * 100).toFixed(2)

        eveUpCC.push(ingreUpCC)

        eveUpCC.push(porcentajeUpCC)

        return eveUpCC
}

    function dataUc() {
        uCCategorias.forEach(categoriaUc => {
            arrayEveUpCC.push(dataUpCCategorias(categoriaUc))
        })
    }

    let arrayEveUpCC= []
    dataUc()

    
    const segundaTabla = document.getElementById('segundaTabla')
    segundaTabla.innerHTML = `
    <tr>
        <td>${uCCategorias[0]}</td>
        <td>$ ${arrayEveUpCC[0][0]}</td>
        <td>${arrayEveUpCC[0][1]} %</td>
    </tr>
    <tr>
        <td>${uCCategorias[1]}</td>
        <td>$ ${arrayEveUpCC[1][0]}</td>
        <td>${arrayEveUpCC[1][1]} %</td>
    </tr>
    <tr>
        <td>${uCCategorias[2]}</td>
        <td>$ ${arrayEveUpCC[2][0]}</td>
        <td>${arrayEveUpCC[2][1]} %</td>
    </tr>
    <tr>
        <td>${uCCategorias[3]}</td>
        <td>$ ${arrayEveUpCC[3][0]}</td>
        <td>${arrayEveUpCC[3][1]} %</td>
    </tr>
    <tr>
        <td>${uCCategorias[4]}</td>
        <td>$ ${arrayEveUpCC[4][0]}</td>
        <td>${arrayEveUpCC[4][1]} %</td>
    </tr>
    <tr>
        <td>${uCCategorias[5]}</td>
        <td>$ ${arrayEveUpCC[5][0]}</td>
        <td>${arrayEveUpCC[5][1]} %</td>
    </tr>`


    const pasEvents = events.filter(eve => eve.date < currentDate).map(eve => {return{
                name: eve.name,
                category: eve.category,
                capacity: eve.capacity,
                assistance: eve.assistance,
                percentage: Math.round((eve.assistance / eve.capacity) * 100),
                price: eve.price,
                revenues: eve.price * eve.assistance
    }})



    const pasMapCategorias = pasEvents.map((pascat) => pascat.category)


    const pasCategorias = pasMapCategorias.filter((item, index) => pasMapCategorias.indexOf(item) == index)


    function dataPasCCategory(categoriasPas){
        let ingrePasCC= 0
        let capPasCC= 0
        let asiPasCC= 0
        let evePasCC= []
        pasEvents.forEach(eve=> {if( eve.category == categoriasPas){
            ingrePasCC += eve.revenues
            capPasCC += eve.capacity
            asiPasCC += eve.assistance
        }
    });


    let porcentajePasCC = ((asiPasCC / capPasCC) * 100).toFixed(2)

    evePasCC.push(ingrePasCC)

    evePasCC.push(porcentajePasCC)

    return evePasCC
    }

    function dataPas(){
        pasCategorias.forEach(categoriasPas => {
            arrayEvePasC.push(dataPasCCategory(categoriasPas))
        })
    }
    let arrayEvePasC= []
    dataPas()


    const tercerTabla = document.getElementById('tercerTabla')
    tercerTabla.innerHTML = `
    <tr>
        <td>${pasCategorias[0]}</td>
        <td>$ ${arrayEvePasC[0][0]}</td>
        <td>${arrayEvePasC[0][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[1]}</td>
        <td>$ ${arrayEvePasC[1][0]}</td>
        <td>${arrayEvePasC[1][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[2]}</td>
        <td>$ ${arrayEvePasC[2][0]}</td>
        <td>${arrayEvePasC[2][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[3]}</td>
        <td>$ ${arrayEvePasC[3][0]}</td>
        <td>${arrayEvePasC[3][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[4]}</td>
        <td>$ ${arrayEvePasC[4][0]}</td>
        <td>${arrayEvePasC[4][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[5]}</td>
        <td>$ ${arrayEvePasC[5][0]}</td>
        <td>${arrayEvePasC[5][1]} %</td>
    </tr>
    <tr>
        <td>${pasCategorias[6]}</td>
        <td>$ ${arrayEvePasC[6][0]}</td>
        <td>${arrayEvePasC[6][1]} %</td>
    </tr>
    `
    
    
})
.catch(error => console.log(error))