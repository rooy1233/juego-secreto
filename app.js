let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function asignarNumero () {

}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya mostramos todos los nnúmeros
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto ();
        }   else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertastes el Número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja ();
    }
    return;
    function limpiarCaja () {
        document.querySelector ('#valorUsuario').value = '';
    }
}
function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego () {
    //Limpiar caja
    limpiarCaja ()
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Iniciar el número de intentos
    condicionesIniciales ()
    //Deshabilitar el botón de nuevo juego
    document.querySelector ('reiniciar').setAttribute ('diseable', 'true');

}
condicionesIniciales ();