const numbers = [1, 2, 3, 4, 5];
const numbersMultiplyByTwo = numbers.map(function(number){
    return number * 2

})
const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age){
    return age % 2 === 0

});

const ages2 = [8, 13, 27, 30, 22, 40];
const sumOfAges = ages2.reduce(function(age, accumalator){
    return accumalator + age
    
}, 0)

console.log(sumOfAges)