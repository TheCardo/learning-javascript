const names = ["felipe", "joão", "julia", 10, false];

const joao = names[1];
console.log(joao);

//.push serve para adicionar um elemento no final da lista
names.push("pedro");


// o .unshift serve para adicionar um elemento no inicio da lista
names.unshift("fernanda");


//excluir o ultimo valor de uma lista
names.pop();
names.pop();
names.pop();

//mudar um elemento de uma lista atraves de seu índice
names[3] = "gustavo";

//retorna o indice do elemento que eu estiver procurando
const indexOFfelipe = names.indexOf("felipe");

//ordena a lista em ordem alfabetica
const sortedNames = names.sort();

//retorna booleano se o array é realmente um array
const namesIsArray = Array.isArray(names);

console.log(names.length)
console.log(names);
console.log(sortedNames)
console.log(namesIsArray)
