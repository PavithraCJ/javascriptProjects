let names=["john","smith","james","jacob","adam","clara"]
//display the names in uppercase using forEach function
names.forEach((name) => (console.log(name.toUpperCase())))
names.forEach((name) => console.log(name.charAt(0).toUpperCase()))
console.log(names)

//Filter Function - based on some condition, it will filter the values and return the new array
//display the names that starts with J
const namesWithJ =names.filter((name) => name.startsWith('j'))
console.log(namesWithJ);

let numbers=[1,2,3,4,5,6,7,8,9,22,24,89]
//display only the even numbers and copy that to another array
const evenNumbers = numbers.filter((values) => values%2==0)
//display only the odd numbers and copy that to another array
const oddNumbers = numbers.filter((values) => values%2!=0)

console.log(evenNumbers);
console.log(oddNumbers)