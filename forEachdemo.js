let numbers=[1,2,56,89,45,78,59,23,235]
for(let i=0;i<numbers.length;i++)
    {
        console.log(`Index is ${i} and the value is ${numbers[i]}`)
    }
console.log(`ForEachFunction`);
//forEach function
const callBackFunc = (value,index) => {
    console.log(`Index is ${index} value is ${value}`);
}
numbers.forEach(callBackFunc);
//this forEach is a inbuilt function which uses arrow function as an argument
//the arrowfunction used here is callBackfunc that is also an inbuilt function
//until the array ends this foreach function works
//until then callbackfunction is called repeatedly

//we can also use like

numbers.forEach((value,index) => console.log(`Index is ${index} value is ${value}`))

//finding even numbers
console.log(`Even numbers in numbers array`)
numbers.forEach((value) => {
    if(value%2==0)
        console.log(`${value}`)
})

//forEach is a function
//we are passing arrowFunction as an argument to each forEach function
//Arrow Function will get executed for each element in numbers array
