let emp={
    'name' : 'John',
    'age' :20,
    'salary' : 10000.00,
    'gender' : 'Male'
}
//display the details
console.log(`Name of the employee is ${emp.name}`)
console.log(`Age of ${emp.name} is ${emp.age}`)
console.log(`${emp.name}'s salary is ${emp.salary}`)
console.log(emp)
let emp1={
    'name' : 'Clara',
    'age' : 20,
    'Salary' : 15000


}
console.log(emp1)
emp1.gender='Female'
console.log(emp1)

//difference betwween == and === operators
// == checks only the value it doesnt care about the typeof of the values
//=== is called strict equality it checks with the values as well as the type of the value
console.log(typeof emp1)
console.log(typeof emp)
console.log(emp1==emp)
console.log(emp1===emp)

let emp3 = null //null referance
let emp4;//undefined value
console.log(emp3)
console.log(emp4)
console.log(emp3==emp4)
console.log(emp3===emp4)
emp3 = {
    'name' : 'Smith'
}
console.log(typeof emp3)
console.log(typeof emp4)

