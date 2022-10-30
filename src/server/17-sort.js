const months = ["March", "Jan", "Feb", "Dec"];


const numbers = [1, 30, 4, 21, 100000];
const numberOrdenados = numbers.sort((current, previous) => {
    return current - previous;
});
console.log(numberOrdenados)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta)