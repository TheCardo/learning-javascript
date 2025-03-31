const person = {
    firstName: 'Ricardo',
    lastName: 'Fragoso',
    age: 21,
    dog: {
        nome: "simba",
        age: 4


    },
    hobbies: ['ler', 'ir a praia', 'jogar', 'sair', 'conversar']

};
//const firstName = person.firstName
//const lastName = person.lastName
//const age = person.age
//const hobbies = person.hobbies

//Destructuring
//mesma coisa que acima
const {age, firstName: primeiroNome, hobbies, lastName} = person

const read = person.hobbies[4]

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
console.log(read)

//person.dog = 'simba'

console.log(person.dog.nome)

const todos = [
    {
        id:1,
        descripition: "estudar programação",
        isCompleted: false
    },
    {
        id:2,
        descripition: "ler",
        isCompleted: true
    },
    {
        id:3,
        descripition:"treinar",
        isCompleted:false
    }
];

//acessando o ultimo indice da lista com os objetos To do
const descripitionOfLastTodo = todos[2]
console.log(descripitionOfLastTodo)