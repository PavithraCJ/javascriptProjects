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

//we have a function called Object.entries() which is used to convert an object to an array
const entries = Object.entries(person)//it take name as key and john as value and returns ['name' : 'john']
console.log(entries)

/*
[
  [ 'name', 'john' ],
  [ 'age', 20 ],
  [ 'address', 'xyz' ],
  [ 'gender', 'male' ],
  [ 'title', 'project lead' ]
]
*/

//for-of is used to access the value of array, string, map, sets
for(const [key,value] of entries)
    console.log(key+' '+value)
//for-in is used to access the key of the object
for(const key in person)
    console.log(key+' '+person[key])
//person.key is same as person[key] person.name is same as person['name']

//example
let array=[10,20,30,40]
for(const value of array)
    console.log(value)
for(const value in array)
    console.log(value)
