// to convert array of key,value pairs into an object user Object.formEntries
const pairs=[['name','john'],['age',20],['science',56],['maths',90],['English',80]]
const student = Object.fromEntries(pairs)
console.log(student)

//entries and formentries
//entries to convert object to an array
//formentries to convert array to object
let marks = {'name':'john','age':20,'science':56,'maths':50,'english':50}
let marksentries = Object.entries(marks)
//let result = marksEntries.map(([key,value]=>[key,value+15]))
let result = marksentries.map(([key,value])=>{
    if(key==='name' || key==='age')
        return [key,value]
    else
        return[key,value+15]
})
console.log(result)
console.log(Object.fromEntries(result))