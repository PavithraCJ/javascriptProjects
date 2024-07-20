const square = (x)=>{return x*x};
//we can pass square as an argument to another function
//map is a HIGHER ORDER FUNCTION
//because it accepts other function as an argument

//EXAMPLE1 - predefined higher order function
let numbers=[10,20,30,40,50]
let squareNumbers = numbers.map(square)//map returns array of values
console.log(squareNumbers)

//EXAMPLE2
const add=(a,b)=>{return a+b};
const sub=(a,b)=>{return a-b};
function calculate(operation,a,b)
{
    return operation(a,b);
}
//here is calculate is HOF cause it accepts the another function as its argument
//operation is going to get another function as its value
//calculate(add,10,20) and calculate(sub,20,10)
console.log(calculate(add,10,20))
console.log(calculate(sub,20,10))
