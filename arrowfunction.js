//normal function
function squarefunc(num)
{
    return num*num
}
console.log('Normal Function to find a square of 10 is '+squarefunc(10))
//Arrow function
let sqr=(num)=>{ return num*num};
console.log('Arrow Function is used to find the square of 10 is '+sqr(10));
//Dynamic values
let a=12;
//String interpolation is used 
//in that case we use backtick `
console.log(`String interpolation and arrow function is used with the help of value ${a} and the output is ${sqr(a)}`);
console.log(`One
Two
Three
Four`)
//It follows the same format