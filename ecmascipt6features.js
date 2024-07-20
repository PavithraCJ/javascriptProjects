//this is for ECMA SCRIPT 6 FEATURES

//default function parameter
function add(a,b=0)//default paramter b=0,0is the default value of b
{
    return a+b
}
console.log(add(1))//for the paramter b it will take the default value as a=1 and b=0
console.log(add(1,4))//now it will take a=1 and b=4


//default paramter is 'unknown' is the default value of name
function welcome(name="unknown")
{
    console.log(`Hello ${name}`)
}
welcome()


//the next topic is object destructuring and array destructuring

//object
let person = {
    'name':'john',
    'age':20,
    'gender':'male',
    'city':'chn',
    'isActive':true
}
let{name,isActive}=person
console.log(`${name} ${isActive}`)

//array
let array=['john','james','jacob','smith','clara']
let[arr1,arr2,arr3]=array
console.log(`${arr1} ${arr2} ${arr3}`)

//function rest operator
function concat(arg1,...arg2)//... is called rest operator which means arg2 can accept any number of values
//arg2 is an array of values
{
let str=arg1
console.log(arg2.length)
for(let i=0;i<arg2.length;i++)
    {
        str=str.concat(arg2[i])
    }
return str;
}
console.log(concat('Hello','world'))
console.log(concat('One','Two','Three','Four','Five'))

function findsum(...values)
{
    //values paramter accept any number of values
    let sum=0;
    for(let i=0;i<values.length;i++)
        {
            sum=sum+values[i]
        }
    return sum;
}
console.log(findsum(1))
console.log(findsum(1,3,5))
console.log(findsum())

//spread operator
//ES6 feature -spread operator
//1.combine two or more objects/array
//2.add new properties to an already existing object
//3.add new elemets to an array
//4.to make a shallow of an array


//spreadoperator - OBJECT
let personName = {
    'name':'Clara',
    'age': 20,
    'gender':'Female',
    'city':'CHN',
    'isActive':true
}
let personEmployment = {...person,salary:10000,companyName :'xyzz'}
//the above line is add new properties to an existing object
console.log(personName)
console.log(personEmployment)

let obj1={a:1,b:2}
let obj2={b:5,c:6,d:7}
let obj3={...obj1,...obj2} //merge two objects obj1 and obj2
console.log(obj3)

//spread operator-Array
let numbers=[10,20,30,40,50,60]
let copynumbers=[...numbers]//shallow copy of numbers
//merge two or more arrays
let array1=[1,3]
let array2=[4,5]
let array3=[6,7]
let array5=[...array1,...array2,...array3]//to merge three arrays
let array6=[20,...array5,100]//add new element to an existing array
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array5)
console.log(array6)

console.log(Math.max(10,20,62,42))
console.log(Math.max(...array6))
