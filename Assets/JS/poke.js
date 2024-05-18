let btnsig = document.querySelector("#btnNext")
btnsig.setAttribute("data-url", "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
let btnprev = document.querySelector("#btnPrev")
btnprev.setAttribute("data-url", "")

consumoApi()

let inicio = document.querySelector("#btnini")
inicio.addEventListener("click", () => {
    location.href = "Pokemon.html"
})

let divGrillaPagina = document.querySelector('#grilla-personajes')



function consumoApi(url_api = 'https://pokeapi.co/api/v2/pokemon') {
console.log("🚀 ~ consumoApi ~ url_api:", url_api)

    let dataAPI = fetch(url_api)

    dataAPI.then(respuestaPromesa => respuestaPromesa.json())

        .then(infoPokemon => {
            divGrillaPagina.innerHTML = ""
            infoPokemon.results.forEach(enlacePokemon => {
                
                let urlInfoPokemon = enlacePokemon.url
                let data = fetch(urlInfoPokemon)
                data.then(respuestaPromesa => respuestaPromesa.json())
                    .then(pokemonInformacion => {

                        let liTipos = ''
                        pokemonInformacion.types.forEach(dataTipo => {
                            liTipos += `<li>${dataTipo.type.name}</li>`
                        });

                        let barrasEstadisticas = ''
                        pokemonInformacion.stats.forEach(dataStats => {
                            if (dataStats.stat.name == 'hp') {
                                barrasEstadisticas += `<div> vida: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-warning" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                            } else if (dataStats.stat.name == 'attack') {
                                barrasEstadisticas += `<div> ataque: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                            } else if (dataStats.stat.name == 'defense') {
                                barrasEstadisticas += `<div> defensa: <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-primary" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
                            }
                        })


                        divGrillaPagina.innerHTML += `
                        <div class="col">
                            <div class="card">
    
    
                            <div id="carruselPokemo_${pokemonInformacion.id}" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="${pokemonInformacion.sprites.other["official-artwork"].front_default}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${pokemonInformacion.sprites.other.home.front_default}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="${pokemonInformacion.sprites.other.home.front_shiny}" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carruselPokemo_${pokemonInformacion.id}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
    
                            <div class="card-body">
                                <h5 class="card-title">${pokemonInformacion.name}</h5>
                                <ul>
                                    ${liTipos}
                                </ul> 
                            </div>
    
                            <div class="px-3 pb-4">
                                ${barrasEstadisticas}
                            </div>
    
                            </div>
                        </div>
                        `
                    })
                });
                btnsig.setAttribute("data-url", infoPokemon.next)
                btnprev.setAttribute("data-url", infoPokemon.previous)
        })
}




function Btnprev() {
    btnprev.addEventListener("click", (e) => {
        let urlprev = e.target.dataset.url
        consumoApi(urlprev)
    })
}


function Btnsig() {
    btnsig.addEventListener("click", (e) => {
        let urlsig = e.target.dataset.url
        consumoApi(urlsig)
    })

}

Btnsig()
Btnprev()