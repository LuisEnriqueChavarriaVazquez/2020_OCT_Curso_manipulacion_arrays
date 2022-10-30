//Creamos nuestro array
const numeros = [2, 4, 6, 8];

//Evaluamos que los valores sean pares.
const ifPair = numeros.every((element) => {
    if (element % 2 == 0) {
        return element;
    }
});

//Nos retorna true...
console.log(ifPair);



////////////////////////
//Debemos evaluar que la gente 
//(todos sean menores de 15 años)
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

//Usamos every
const ifMenor15 = team.every((element) => {
    //Evaluamos si es mayor e igual a 15
    if(element.age >= 15){
        return element; //No todos son mayores a 15
    }
});

//Retorna false
console.log(ifMenor15);