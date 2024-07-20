function displayDetails()
{
    console.log(`${this.name} ${this.age} ${this.gender}`)
}

let person={
    'name':'john',
    'age':20,
    'gender':'male'
}
let person1={
    'name':'james',
    'age':22,
    'gender':'male'
}
displayDetails.call(person)//person will be used as an object in displaydetails fnction
displayDetails.call(person1)

function displayEmployeeDetails(hra,bonus,pf)
{
    console.log(`${this.empname} ${this.age} ${this.salary} ${hra} ${bonus} ${pf}`)
}
let employee={'empname':'Clara','age':20,'salary':20000}
displayEmployeeDetails.call(employee,1000,1000,1000)
displayEmployeeDetails.apply(employee,[1000,200,100])

//bind returns the function

