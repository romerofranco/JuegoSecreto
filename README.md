let frutas = ['manzanas','bananas','peras']; // Asi se crean los arrays
console.log(frutas.length); // asi mostramos el tamaño, pero no nos dira lo que tiene adentro. 

let primero = frutas[0]; //Aca mostramos el primer elemento
console.log(primero); // podemos agregarlo de primeras a frutas[0] en el parametro y sera lo mismo

let ultimo = frutas[frutas.length-1]; // asi nos mostrara el ultimo. 
console.log(ultimo);// aca tambien podemos agregarle el parametro de arriba directamente y sera igual

console.log(frutas.push("Naranjas")); //de esta forma agregamos un nuevo elemento, lo ideal es darle la variable

frutas.forEach(function (elemento,indice){
    console.log(elemento,indice);
});