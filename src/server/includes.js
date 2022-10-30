//Declaramos un array
const pets = ['cat', 'dog', 'bat'];

//Lo que hace es buscar la palabra
/*
*   Funciona para los array y para los strings
*   pero, no recibe un arrow function, solo
*   recibe el valor que estamos buscando.
*/
const ifIncludes = pets.includes('dog');

console.log(ifIncludes);