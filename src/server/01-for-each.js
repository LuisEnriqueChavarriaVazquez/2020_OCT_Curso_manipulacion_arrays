const letters = ['a','b','c','d'];

//La manera clásica
for(let i = 0; i < letters.length; i++){
    console.log('FOR clásico',letters[i]);
}

//Nueva forma
//forEach recibe una arrow function
letters.forEach((element) => { 
    console.log('forEach', element)
})