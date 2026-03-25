const img = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "Diabo.png",
    comendo: "Diabocomendo.png",
    feliz: "Diabofeliz.png",
    fome30: "Diabofome.png",
    fome60: "Diabomorto.png"
};

let contador = 0;
let intervalo = null;
let timeClick = null;
let timeOut = null;

function initConta(){
    if(intervalo) clearInterval (intervalo);

    intervalo = setInterval(() => {
        contador++;

    console.log("Tempo:",contador);

    if(contador == 30){
            img.src = estados.fome30
    }
    if(contador == 60){
            img.src = estados.fome60
    }
},1000)};

function alimentar (){

    img.src = estados.comendo
    contador = 0;
    console.log("Comendo");

    if(timeClick) clearInterval (timeClick)

        timeClick = setTimeout (() => {
            img.src = estados.feliz
            timeOut = setTimeout (() => {

                img.src = estados.normal;

        },2000);

        },1000);

initConta();
    }