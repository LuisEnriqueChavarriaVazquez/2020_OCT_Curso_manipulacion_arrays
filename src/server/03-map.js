//Declaro mi array
const letters = ['a','b','c'];

/////////////////////////////////////////
//forma antigua de hacerlo
const newArray = []; //Declaro un nuevo array
for(let i = 0; i < letters.length; i++){
    const element = letters[i];
    //meto los elementos uno por uno
    newArray.push(element + "1");
}
console.log('original',letters)
console.log('tranformado',newArray); //Tengo el array tranformado

///////////////////////////////////////
//hacemos lo mismo con map
//automaticamente se guarda el array.
const nuevoArray = letters.map((element) => {
    return element + "2";
});
console.log('Tranformado con map', nuevoArray);