let numeroSecreto = 0; //variable para almacenar el numero secreto
let intentos = 0;
let listaNumeroSorteados = [] // la funcion que tiene es para saber si un numero ya fue sorteado o no. 
let numeroMaximo = 10; //Declarada para arreglar la Recursividad

//funcion para cambiar el contenido de los elementos,como los titulos o los parrafos
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //metodo para capturar lo ingresado en el input del usuario
    console.log(numeroSecreto);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled'); //Activamos el boton por DOM. 
    } else if(numeroDeUsuario > numeroSecreto){
        //El usuario no acerto
      asignarTextoElemento('p','El Numero Secreto es menor');
    } else{
      asignarTextoElemento('p','El Numero Secreto es Mayor');
    }
    intentos++;
    limpiarInput();
    return;
}

//funcion para limpiar el imput cada vez que el usuario pierde. 
function limpiarInput(){
    let valorCaja = document.querySelector('#valorUsuario').value= '';

}


//funcion para generar el numero aleatorio, lo hacemos con return
function generarNumeroSecreto() {
     let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; //directamente ponemos el metodo aleatorio en el return.
    //Preguntar si ya sorteamos todos los numeros 
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya salieron todos los numeros');
    }else{
        //Si el numero generado esta incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


//Funcion para agrupar distintas funciones que hagan diversas cosas
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);     
    numeroSecreto = generarNumeroSecreto(); //llamamos la funcion pero no declaramos la variable de nuevo
    intentos = 1; 
}



//Daremos funcionalidad al boton nuevo juego
function reiniciarJuego() {
    //Limpiar caja
    limpiarInput();
    //Indicar mensaje del ingreso del intervalo de numeros
    //Generar el numero aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de 'nuevo juego' 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}


/*Llamada a la funcion para cambiar los elementos || Esto fue optimizado por la funcion mensajesIniciales() ||
asignarTextoElemento('h1','Juego del Numero Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10') */

condicionesIniciales();


 