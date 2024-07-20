let names=["John","Jacob","Smith","Adam","Clara"]
names.sort()
console.log(names)
//but we dont have predefined function for numbers it works for strings
let numbers=[101,56,45,88,20,159,200,1,9,3]
let sortNumbers=(a,b)=>a-b  //this defines we have 2 numbers a-b returns +ve value if a>b else it returns -ve value if a==b returns 0 
let descending = (a,b)=>b-a //this function is same as compareTo method
numbers.sort(sortNumbers)
console.log(numbers)
numbers.sort(descending)
console.log(numbers)