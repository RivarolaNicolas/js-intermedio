///<reference types="jquery" />

let base = "USD";

$(".moneda-base").click(function () {
    $(".monedas").remove();
    base = prompt("Escribi la divisa en 3 caracteres (ARS, USD, EUR, etc)").toUpperCase()
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .then(respuesta => respuesta.json()
            .then(respuestaJSON => {
                console.log(respuestaJSON.rates)
                Object.keys(respuestaJSON.rates).forEach((moneda, i) => {
                    i++
                    if (i % 2 === 0) {
                        $(".lista-monedas-1").append($(`<tr><td>${moneda}:</td><td> ${respuestaJSON.rates[moneda]}</td></tr>`).addClass("monedas table"))
                    } else {
                        $(".lista-monedas-2").append($(`<tr><td>${moneda}:</td><td> ${respuestaJSON.rates[moneda]}</td></tr>`).addClass("monedas table"))
                    }
                })
            }))

})



$(".fecha").click(function () {
    $(".monedas").remove();
    fecha = prompt("Escribi la fecha en formato año-mes-dia, por ejemplo: 2010-01-02")
    fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
        .then(respuesta => respuesta.json()
            .then(respuestaJSON => {
                console.log(respuestaJSON.rates)
                Object.keys(respuestaJSON.rates).forEach((moneda, i) => {
                    i++
                    if (i % 2 === 0) {
                        $(".lista-monedas-1").append($(`<tr><td>${moneda}:</td><td> ${respuestaJSON.rates[moneda]}</td></tr>`).addClass("monedas table"))
                    } else {
                        $(".lista-monedas-2").append($(`<tr><td>${moneda}:</td><td> ${respuestaJSON.rates[moneda]}</td></tr>`).addClass("monedas table"))
                    }
                })
            }))

})