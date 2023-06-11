let contador = document.getElementById("contador");
let marcasEl = {
    vuelta: document.getElementById("vuelta-el"),
    tiempo: document.getElementById("tiempo-el"),
}
let contando = false;
let intervalCount
let calculando = {
    milesimas: 0,
    segundos: 0,
    minutos: 0,
    horas: 0
};
let tiempo = {
    horas: "0",
    minutos: "00",
    segundos: "00",
    milesimas: "00"
};
contador.textContent = `${tiempo.horas},${tiempo.minutos},${tiempo.segundos}.${tiempo.milesimas}`;
let marcas = {
    vuelta: 0,
    tiempo: []
};
let render ={
    vuelta: "",
    tiempo: ""
}
const btn = {
    start: document.getElementById("btn-start"),
    restart: document.getElementById("btn-restart"),
    stop: document.getElementById("btn-stop"),
    mark: document.getElementById("btn-mark")
};

btn.start.addEventListener("click", function(){  
    if (contando === false) {
        intervalCount = setInterval(contandoa, 10);  
    }
    contando = true;
});

btn.mark.addEventListener("click", function(){
    marcas.tiempo.push(`${tiempo.horas},${tiempo.minutos},${tiempo.segundos}.${tiempo.milesimas}`);
    marcas.vuelta ++;
    for (var i = 0; i < marcas.tiempo.length; i++) {
       render.vuelta = `<li id="vuelta-el">${marcas.vuelta}</li>`;
       render.tiempo = `<li id="vuelta-el">${marcas.tiempo[i]}</li>`;
    }
    marcasEl.vuelta.innerHTML += render.vuelta;
    marcasEl.tiempo.innerHTML += render.tiempo;
});

btn.stop.addEventListener("click", function(){
    clearInterval(intervalCount);
    contando = false;
});

btn.restart.addEventListener("click", function(){
    calculando.minutos = "00"
    calculando.segundos = "00";
    calculando.milesimas = "00";
    tiempo.minutos = "00"
    tiempo.segundos = "00";
    tiempo.milesimas = "00";
    marcasEl.vuelta.innerHTML = "";
    marcasEl.tiempo.innerHTML = "";
    marcas.vuelta = 0;
    clearInterval(intervalCount);
    contando = false;
    contador.textContent = `${tiempo.horas},${tiempo.minutos},${tiempo.segundos}.${tiempo.milesimas}`;
});

function contandoa() {
    calculando.milesimas += "+1"
    tiempo.milesimas = eval(calculando.milesimas)
    if(tiempo.milesimas >= 100){
        calculando.segundos += "+1";
        tiempo.segundos = eval(calculando.segundos);
        calculando.milesimas = "00";
        tiempo.milesimas = "00";
    } 
    else if(tiempo.segundos >= 60){
        calculando.minutos += "+1";
        tiempo.minutos = eval(calculando.minutos);
        calculando.segundos = "00";
        calculando.milesimas = "00";
        tiempo.segundos = "00";
        tiempo.milesimas = "00";
    }
    else if(tiempo.minutos >= 60){
        calculando.horas += "+1";
        tiempo.horas = eval(calculando.horas);
        calculando.minutos = "00"
        calculando.segundos = "00";
        calculando.milesimas = "00";
        tiempo.minutos = "00"
        tiempo.segundos = "00";
        tiempo.milesimas = "00";
    }

    if (tiempo.milesimas <= 9){
        tiempo.milesimas = tiempo.milesimas.toString().padStart(2,"0");
    }
    if (tiempo.segundos <= 9){
        tiempo.segundos = tiempo.segundos.toString().padStart(2,"0");
    }
    if (tiempo.minutos <= 9){
        tiempo.minutos = tiempo.minutos.toString().padStart(2,"0");
    }
    
    contador.textContent = `${tiempo.horas},${tiempo.minutos},${tiempo.segundos}.${tiempo.milesimas}`;
}