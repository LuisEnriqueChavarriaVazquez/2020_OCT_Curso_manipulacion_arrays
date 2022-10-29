//Accedemos al input y al boton
const tareasInput = document.getElementById('tareas');
const buttonAgregar = document.getElementById('agregar');
const buttonEliminar = document.getElementById('eliminar');

//Accedemos a los contenedores
const containerTareas = document.getElementById('containerListaTareas');

//Array para la lista de tareas.
let listaTareas = [];

const imprimirTareas = () => {
    containerTareas.innerHTML = null;
    listaTareas.forEach((element) =>{
        containerTareas.innerHTML += `<p><b> ${element} </b></p>`;
    });
};

//Al hacer click agregamos la tarea
buttonAgregar.addEventListener('click', () => {
    let valorInput = tareasInput.value;
    listaTareas.push(valorInput);
    imprimirTareas();
});

buttonEliminar.addEventListener('click', () =>{
    listaTareas.pop();
    imprimirTareas();
});
