//Declaramos un objeto de usuarios
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute", [1,2,3]] },
    { userId: 2, username: "Mike", attributes: ["Lovely", [1,2]] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

/*
*   Se usan ambos, flat y map por separado. 
*/
//Debemos agregar a una copia del objeto la parte de attibutes pero aplanado.
const ejemplo1 = users.map((element) => {
    //Creamos la copia de nuestro objeto con los atributos plano.
    return {
        ...users,
        attributesflat: element.attributes.flat(2)
    };
});

const flatSeparado = users.map(element => element.attributes).flat(2);
const flatMapEjemplo = users.flatMap(element => element.attributes);
console.log(flatSeparado);
console.log(flatMapEjemplo);

