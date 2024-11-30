function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')



for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
     console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    console.log(contador);

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    
    }

    tecla.onupkey = function() {
        tecla.classList.remove('ativa')
    }
}

