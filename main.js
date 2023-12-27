function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play(); 
    } else{
        alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador= 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
                //o or (ou em portugues) em JS é || //usando operador or
        if(evento.code === 'Space' || evento.code === 'Enter'){ 
            tecla.classList.add('ativa');
        }
        
        /*if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }*/
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}



/* 
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        alert('Elemento não encontrado');
    }

    if(elemento != null){
        if(elemento.localName === 'audio'){
        elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador= 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {
                //o or (ou em portugues) em JS é || //usando operador or
        if(evento.code === 'Space' || evento.code === 'Enter'){ 
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}*/

/* primeira forma sem operador logico
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador= 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space'){ 
            tecla.classList.add('ativa');
        }
        
        if(evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}*/

/*  SEGUNDA FORMA
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador= 0;

//enquanto
while(contador < listaDeTeclas.length){


    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);


    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}*/

/* PRIMEIRA FORMA 
//pom
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
//clap
function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;
//tim
function tocaSomTim () {
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;
//puff
function tocaSomPuff () {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;
//splash
function tocaSomSplash () {
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;
//toim
function tocaSomToim () {
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;
//psh
function tocaSomPsh () {
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;
//tic
function tocaSomTic () {
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;
//tom
function tocaSomTom () {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;*/