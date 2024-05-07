let formulario = document.querySelector("#destino")
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let Usuario = evento.target.campo.value
    let resultado = 0

    for (let x = 1; x <= Usuario; x++) {
        resultado = resultado + x
    }

    document.querySelector("#numeros").innerHTML = resultado
})


//Se necesita validar si un número ingresado por el usuario es par o impar//

let formpar = document.querySelector("#pares")
formpar.addEventListener("submit", function (botonprevent) {
    botonprevent.preventDefault()

    let campopar = botonprevent.target.numeropar.value

    if (campopar % 2 == 0) {
        document.querySelector("#paresres").innerHTML = "Su numero es par"
    }
    else {
        document.querySelector("#paresres").innerHTML = "Su numero NO es par"
    }

})

/*La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
Si es un niño menor o igual a 10 años, debe ir a reclamar un jugo.
Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza. 
Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
O si es un hombre, debe reclamar adicionalmente una porción de pizza tres carnes.
Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.*/

/* hombre tres carnes ------ mujer hawaiana */


let pizzaform = document.querySelector("#pizza")
pizzaform.addEventListener("submit", function (botonpz) {
    botonpz.preventDefault()

    let campopizza = botonpz.target.sectpizza.value
    let generopt = botonpz.target.genero.value
    let respuesta = ""


    if (campopizza == "op1") {
        respuesta += "Reclamar jugo"
        document.querySelector("#respizza").innerHTML = respuesta
        if (generopt == "hombre") {
            respuesta += " Mas pizza de 3 carnes"
            document.querySelector("#respizza").innerHTML = respuesta
        } else if (generopt == "mujer") {
            respuesta += " Mas pizza hawaiana"
            document.querySelector("#respizza").innerHTML = respuesta
        }
    } else if (campopizza == "op3") {
        respuesta += "Reclamar cerveza"
        if (generopt == "hombre") {
            respuesta += " Mas pizza de 3 carnes"
            document.querySelector("#respizza").innerHTML = respuesta
        } else if (generopt == "mujer") {
            respuesta += " Mas pizza hawaiana"
            document.querySelector("#respizza").innerHTML = respuesta
        }
    } else {
        if (generopt == "hombre") {
            respuesta += "xd"
            document.querySelector("#respizza").innerHTML = respuesta
        } else if (generopt == "mujer") {
            respuesta += "me gusta la monda"
            document.querySelector("#respizza").innerHTML = respuesta
        }
    }

}

)

/*Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, adicionalmente, se debe mostrar el total de las 
multiplicaciones solicitadas por el mismo.*/

let campomult = document.querySelector("#multi")
campomult.addEventListener("submit", function (botonmu) {
    botonmu.preventDefault()
    document.querySelector("#resulmult").innerHTML = ""
    let numusu = botonmu.target.usuario.value
    let multip = botonmu.target.multiplicacion.value
    for (i = 1; i <= multip; i++) {
        document.querySelector("#resulmult").innerHTML += `${numusu} X ${i} = ${i * numusu} <br>`
    }

})


/* 
Validar cuál es el valor de matrícula (1’000.000) que debe pagar un estudiante, teniendo en cuenta que:
Si el promedio fue menor a 3 no se le descuenta nada.
Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
Cuando el promedio sea mayor que 4, se le descuenta 50%

*/

let formpro = document.querySelector("#promedio")
formpro.addEventListener("submit", function (botonpro) {
    botonpro.preventDefault()
    let promedionota = parseFloat(botonpro.target.prompun.value)

    if (promedionota == "") {
        document.querySelector("#divprom").innerHTML = "Ingrese su nota retardado"
    }
    else if (promedionota < 3) {
        document.querySelector("#divprom").innerHTML = "No tiene descuento"
    } else if (promedionota >= 3 && promedionota <= 3.9) {
        document.querySelector("#divprom").innerHTML = "Se le descuenta el 5% = 50.000"
    } else if (promedionota >= 4 && promedionota <= 5) {
        document.querySelector("#divprom").innerHTML = "Se le descuenta el 50% = 500.000"
    }

})

/*
Se necesita crear un menú de opciones, donde la persona escriba que quiere de comer,
se le vaya sumando el valor a lo seleccionado hasta que el 
usuario escriba pagar, Una vez termine de comprar, se le debe mostrar el valor que debe pagar. 
(El menú y precios lo decide el programado@r.) 
Con 2 arrays o con 1 array de objeto FIND
*/

let total = 0
let formarr = document.querySelector("#formarr")
formarr.addEventListener("submit", function (botonarr) {
    botonarr.preventDefault()
    let arrayusuario = botonarr.target.usuarr.value

    let comidas = [
        {
            nombre: "hamburguesa",
            valor: 5000
        },
        {
            nombre: "perrito",
            valor: 500
        },
        {
            nombre: "mojon",
            valor: 100
        },
        {
            nombre: "miguel",
            valor: 30000
        }
    ]




    if (arrayusuario == "pagar") {
        document.querySelector("#divtotal").innerHTML = `su total es: ${total}`
    } else {

        let dataPlato = comidas.find(indigente => indigente.nombre == arrayusuario)
        total += dataPlato.valor


        document.querySelector("#divarray").innerHTML = `El valor es: ${dataPlato.valor}`
    }



})

