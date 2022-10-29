//Declaro mi array
const numbers = [1,2,3,4];

/*
*   Tenemos que pasar el valor actual (es 
*   el valor que estamos recorriendo en este instante)
*   
*   Tenemos que pasar el valor siguiente.
*
*   Lo que reduce hace es iterar la suma
*   current = current + next
*   hasta que termina de hacer la suma. 
*/

//Current es la suma total
//Next element es el valor que se va sumando

let suma = numbers.reduce((currentElement, nextElement) => {
    return currentElement + nextElement;
});

console.log(suma);