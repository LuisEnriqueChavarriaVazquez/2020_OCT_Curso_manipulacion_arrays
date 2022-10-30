//Junta dos arrays
let numbers = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

//Debemos guardarlo en un nuevo array
let newArray = numbers.concat(numbers2);

//Es inmutable y los arrays originales no se alteran
console.log('Primero = ',numbers);
console.log('Segundo = ',numbers2);
//EL nuevo array
console.log('FINAL = ',newArray);

//////////////Concatenacion con spread
const newArray2 = [...numbers, ...numbers2];
console.log('EJEMPLO CON SPREAD = ', newArray2);
