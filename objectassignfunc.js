let person={
    'name':'john',
    'age':20,
    'address':'xyz',
    'gender':'male',
    'title':'project lead'
}
let designation={
    'title':'lead',
    'companyname':'xyz',
    'salary':'40000'
}
let department={
    'deptname':'HR',
    'location':'BlockA'
}


//Object assign
//1.merge two objects Object.assign(target,...source)
//2.clone an object
Object.assign(person,designation,department)//merging objects
console.log(person)
//to clone
//let person1=person//both person and person1 refers to the same ->its not copying
//delete person1.name

/*
let person1={}
Object.assign(person1,person)
delete person1.name
console.log(person1)
console.log(person)

*/

let person1 = person
delete person1.name
console.log(person1)
console.log(person)
//this is person1 ans person have the same memory address so if person1 gets changes gets reflected in person
//thats why we are shallowcopying the values to person1 using Object.assign method
