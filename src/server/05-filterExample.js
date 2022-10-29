////////////////////////////////////
//guardamos nuestra data
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

//Accedemos al input, button,container
let input = document.querySelector('#buscador');
let button = document.querySelector('#buscar');
let container = document.getElementById('container');

button.addEventListener('click', () => {
    let valorBusqueda = input.value;

    const elementosEncontrados = orders.filter(element => {
        if(valorBusqueda == element.customerName){
            return element;
        }
    });

    console.log('elementosEncontrados', elementosEncontrados)
    container.innerText = elementosEncontrados[0].customerName ?? "No encontrado";

});
