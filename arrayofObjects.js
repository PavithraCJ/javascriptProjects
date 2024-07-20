let employees = [
{ 'name' : 'John' , 'age' : 20, 'dept' : {'deptname' : 'Finance', 'location' : 'BloackA'},'salary' :10000},
{'name' :'James', 'age' : 21, 'dept' : {'deptname' : 'Infra', 'location' : 'BlockB'},'salary' : 11100},
{'name' : 'Adam', 'age' : 21, 'dept' : {'deptname' : 'Finance', 'location' : 'BlockA'},'salary' : 10230},
{'name' : 'Clara', 'age' : 21, 'dept' : {'deptname' : 'FrontDesk', 'location' : 'BlockZ'},'salary' : 9000},
{'name' : 'Smith', 'age' : 19, 'dept' : {'deptname' : 'Finance', 'location' : 'BlockA'},'salary' : 9000},
{'name' : 'Jacob', 'age' : 19, 'dept' : {'deptname' : 'Infra', 'location' : 'BlockB'},'salary' : 8000},

{'name' : 'Joe', 'age' : 22, 'dept' : {'deptname' : 'Finance', 'location' : 'BlockA'},'salary' : 12000}


]
console.log(`Display using traditional method`)
for(let i=0;i<employees.length;i++)
    {
        console.log(`
        ${employees[i].name}
        ${employees[i].age}
        ${employees[i].dept.deptname}
        ${employees[i].dept.location}
        ${employees[i].salary}`)
    }
console.log('--'.repeat(50))
console.log(`Display using forEach method`)
let printEmployees = (e) => {
    console.log(`${e.name} ${e.age} ${e.dept.deptname} ${e.dept.location} ${e.salary}`)
}
employees.forEach(printEmployees)
console.log('--'.repeat(50))

console.log(`Sort by name`)
let employeescopy = [...employees]
let sortByName = employeescopy.sort((a,b) => a.name.localeCompare(b.name))
sortByName.forEach(printEmployees)
console.log('--'.repeat(50))

console.log(`Sort by Age`)
let sortByAge = employeescopy.sort((a,b) => a.age - b.age)
sortByAge.forEach(printEmployees)
console.log('--'.repeat(50))

console.log(`Sort by Salary`)
let sortBySalary = employees.sort((a,b) => a.salary - b.salary)
sortBySalary.forEach(printEmployees)
console.log('--'.repeat(50))

console.log(`Display the employee details who belongs to Finance department`)
//using filter
let financeDept = employees.filter((e) => e.dept.deptname.toLowerCase()==='Finance'.toLowerCase())
financeDept.forEach(printEmployees)
console.log('--'.repeat(50))

console.log(`Display the employee details whose salary is greater than 10000`)
let salarydetails = employees.filter((e) => e.salary >=10000)
salarydetails.forEach(printEmployees)
console.log('--'.repeat(50)) 

console.log(`Adam Details`)
let adamdetails = employees.find((e) => e.name.toLowerCase()==='Adam'.toLowerCase())
console.log(adamdetails)

console.log(`using map`)
let tableEmp = employees.map((e) =>`${e.name} ${e.age} ${e.salary}`)
console.log(tableEmp)
//employees.forEach(printEmployees)