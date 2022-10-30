//Declaramos nuestros array
const numbers = [1, 2, 3, 4, 5, 6, 4, 3, 2, 21, 2, 3];

//Buscamos el número 21 y 1000
const number21 = numbers.find((element) => element == 21);
const number1000 = numbers.find((element) => element == 1000);
console.log(number21); //Retorna 21
console.log(number1000); //retorna 1000

/////////////////////////////////////
//Buscamos el primer elemento con pizza
const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

//Buscamos el que tiene el emoji de pizza
const pizza = products.find( element => element.id == '🍕');
//Busca el indice 
const pizzaIndex = products.findIndex( element => element.id == '🍕');
console.log(pizza);
console.log(pizzaIndex);