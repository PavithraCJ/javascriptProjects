//constructor function -> we have to construct an object 
//we have to use new keyword and to assign the property we have to use this keyword
function Person(firstname,lastname,gender)
{
    this.firstname = firstname
    this.lastname = lastname
    this.gender = gender
    this.greet=()=>{
        console.log(`${this.firstname} ${this.lastname} ${this.gender}`)
    }
}
let p1=new Person('john','smith','m')
let p2=new Person('Clara','Jacob','f')
let p3=new Person('john','smith','m')
p1.greet()
console.log(typeof p1)
console.log(p1==p3)
//factory function ->it returns some value
function factPerson(fn,ln,gen)
{
    return{
        firstname:fn, lastname:ln,gender:gen,
        greet(){
            console.log(`${this.firstname} ${this.lastname} ${this.gender}`);
        }
    }
}
let factp1=factPerson('Tom','S','m')
console.log(factp1)
factp1.greet()
console.log(p1)
console.log(p2)
console.log(p3)