let user={'email' : 'john@gmail.com','username' : 'john123','password':'john@123','address' : 'xyz','phno':'987564321'}
const{email,username}=user;
console.log(email)
console.log(username)
let person = {'name':'john','age':20}
let address={'street':'xyz','city':'chennai','pincode':'600082'}
console.log(person)
let personaldetails={...person,...address}
console.log(personaldetails)
Object.freeze(person)//you cannot add,modify,remove any properties of an object person
delete person.name//name will not be deleted-freeze
console.log(person)
person.name='James'//name will not get modified-freeze
console.log(person)
Object.seal(person)
delete person.name
console.log(person)
person.name='James'
console.log(person)
