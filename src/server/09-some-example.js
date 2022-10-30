////Debemos verificar que una cita no se cruza con las del objeto
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const myDate = {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con una piruja",
}

const ifCitaExiste = dates.some((element) => {
    if(element.title == myDate.startDate){
        return element;
    }
});

console.log('La cita existe', ifCitaExiste);
