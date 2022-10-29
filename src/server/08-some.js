const numeros = [1,2,3,4,5,6,7,7,7,9];

//Debemos evaluar si tenemos pares;
const ifPares = numeros.some( element => {
    if(element % 2 == 0){
        return element;
    }
});

//Debemos evaluar si el valor 1000 esta en el array
const if1000 = numeros.some(element => {
    if(element == 1000){
        return element; //retorna tru o false
    }
});

console.log(ifPares); //retorna true
console.log(if1000); //retorna false