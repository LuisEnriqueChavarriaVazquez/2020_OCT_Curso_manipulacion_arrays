const array = ['Luis', 'Maria', 'Natalipa', 'Juan', 'Manolo'];

//Busca el nombre Luis
const resultado = array.filter((element) => {
    if (element == 'Luis') {
        return element;
    }
});

//Busca los nombre con longitud de cuatro
const resultado2 = array.filter((element) => {
    if (element.length == 4) {
        return element;
    }
});

//Retorna dos arrays con los nombre que cumplen la condicion
console.log(resultado);
console.log(resultado2);


////////////////////////////////////
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

//No se altera el valor original del objeto, solo se filtra.

//Debemos filtrar las ordenes de compra que sean mayor a 150
const filtrado = orders.filter( element => {
    if(element.total >= 150){
        return element;
    }
});

//Retornamos lo que dicen delivered (en una sola linea)
const filtrado2 = orders.filter( element => element.delivered == true);

console.log('original', orders);
console.log('total mayor a 150', filtrado);
console.log('delivered igual a true', filtrado2);