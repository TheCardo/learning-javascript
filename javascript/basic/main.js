
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
]
//convertendo uma variavel para JSON
const todosJSON = JSON.stringify(todos);
console.log(todosJSON)

//convertendo JSON em uma variavel
const todosList = JSON.parse(todosJSON)
console.log(todosList)