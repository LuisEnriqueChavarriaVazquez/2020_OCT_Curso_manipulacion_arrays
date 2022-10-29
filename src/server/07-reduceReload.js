//Debemos contar la cantidad de veces que tenemos unos numeros en un array
//y devolverlo en un objeto
/*
*   1 = 1
*   2 = 2
*   3 = 5 veces 
*/

//Declaramos nuestro array
const numeros = [1,2,3,4,5,3,2,3,3,3];

//Primero debe ordenar los valores (de menor a mayor)
const numerosOrdenados = numeros.sort((current, next) => {
    return current - next;
});

//Convertimos los elementos en strings para que sean parametros del objeto
const parseToString = numerosOrdenados.map(element => {
    return element.toString();
});

//Creamos el objeto para llevar la cuenta
let counts = {}

//Debemos contar los elementos
const conteoNumeros = numeros.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1;
});  
console.log('conteoNumeros', conteoNumeros)
