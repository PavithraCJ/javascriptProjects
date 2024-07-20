let numbers=[1,2,3,4,5]
console.log(`Length of an array is ${numbers.length}`)
//push
//pop
//shift
//unshift
//these are the predefined function used in an array

//push is inserting the elements at the end of an array and returns its length
let len = numbers.push(6,7,8);
console.log(`new length is ${len}`);
console.log(`new arrays ${numbers}`)
//pop removes the last element in an array and returns undefined if the array is empty
let popElement = numbers.pop();
console.log(`popped element is ${popElement}`)
//shift is removing the first element in an array and returns it
let shiftedElement =numbers.shift();
console.log(`after using shift func ${shiftedElement}`)
console.log(`new array is ${numbers}`)
//unshift is inserting elements at the start of an array

let length = numbers.unshift(12,13,14);
console.log(`new length is ${length}`)
console.log(`new array is ${numbers}`)

//map function
//find the square of each element in an array
const squareNumbers = numbers.map((num) => num*num);
console.log(squareNumbers);
//it wont modify anything in the numbers array else it creates a new array and store these values
//increment each number in an array by 10
const incr = numbers.map((num) =>num+10)
console.log(`After incrementing each value by 10 ${incr}`)

//using string array
let names=["john","jacob","smith","clara","adam"]
const cap = names.map((name) => name.toUpperCase())
console.log(`names array is ${names}`)
console.log(`New array to Uppercase ${cap}`)

//new predefined function gets used in string is includes
let containsletterA = names.filter((name) =>name.includes('a'))
console.log(`names array containes letter a is ${containsletterA}`)

/*if we use the above lines using map
let containsletterA = names.filter((name) =>name.includes('a'))
console.log(`names array containes letter a is ${containsletterA}`)
gives output in boolean values like false and true
filter filters the values and returns the value in an array */

console.log(`Find the elements in the nums array which is greater than 50`)
let nums = [55,98,45,12,85,63,20,12,100,178]
const numsarray = nums.filter((num) =>num>50)
console.log(`nums array is ${nums}`)
console.log(`elements greater than 50 is ${numsarray}`)

//const nums1array = nums.map((num) =>num>50)
//console.log(`${nums1array}`)

//find the names whose length is greater than 5
console.log(`names array is ${names}`)
names.push("william","monkey","godzilla")
console.log(`${names}`)
const newNames = names.filter((name) => name.length>=5)
console.log(`Names array with elements whose length is greater than or equal to 5`)
console.log(`${newNames}`)


let value=nums.find((num) => num==50)
console.log(value)
value = nums.find((num) => num==20)
console.log(value) //find method always returns only one value which satisfies the condition first
//if the element is present in the nums array it returns the value else it returns undefined

//diff between filter and find functions
console.log(nums.filter((num) => (num>=10 && num<=50))) //it returns the entire values which satisfies the condition in an array
console.log(nums.find((num) =>(num>=10 && num<=50)))//it returns the first value which satisfies the condition
