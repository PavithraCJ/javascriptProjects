let numbers=[10,23,5,20,45,89,75,60,22,12]
console.log(numbers.slice(0,1))
console.log(numbers.slice(-3))
console.log(numbers.slice(3,7))
console.log(numbers.slice(2))
console.log(numbers.slice(0,4))
console.log(numbers.slice(4,8))
console.log(numbers.slice(8,12))
//slice function returns the subarray from the original array but it doesnt modified the original array
//another function we have called splice which modifies the original array
//splice function removes particular element from the original array and returns the deleted element
//if we want we can also insert elements to the original array in the deleted position
//but both splice and slice works based on the index value of an array
console.log(numbers)
console.log(`splice`)
console.log(numbers.splice(0,1))
console.log(numbers.splice(0,1,30,40,50))
console.log(numbers)