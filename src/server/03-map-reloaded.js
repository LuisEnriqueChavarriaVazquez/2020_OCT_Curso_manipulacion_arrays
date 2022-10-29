const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

//Debemos extraer el valor de los totales

const totales = orders.map( element =>{
    return element.total;
});

//Error común
/*
*   Si hacemos esto estamos agregando
*   tax pero el problema es que se modifica el
*   objeto original dentro del array. 
*/

//Codigo de error
// const totales2 = orders.map(element =>{
//     element.tax = 0.19
//     return item
// });

//Lo que debemos hacer es ...
/*
*   Crear un nuevo objeto...
*   este nuevo objeto se crea
*   retornandolo con el nuevo valor agregado.
*   
*   Paso 1: se usa el spread operator para
*   traer todo el contenido del objeto original
*   
*   Paso 2: se pone al lado el atributo tax
*   , el cual es el nuevo atributo.
*   
*   Asi el objeto del array original se mantiene
*   intacto... y nosotros tenemos un array tranformado
*   con un nuevo objeto también tranformado. 
*/
const totales3 = orders.map(element => {
    return {
        ...element,
        tax: .19
    }
});

console.log('original ', orders);
console.log('tranformado', totales);
console.log('tranformado objeto', totales3);