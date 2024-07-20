let user = 
{
    'name' : {
        'firstname' : 'John',
        'lastname' : 'Smith'
    },
    'email' : 'johns@gmail.com',
    'username' : 'john123',

    'address' : {
        'street' : 'No5',
        'city' : 'chennai',
        'state' : 'TamilNadu',
        'pincode' : 609000
    },
    'courses' : ['Java','Javascript','C','HTML','CSS','ReactJS']

}
console.log(`FullName : ${user.name.firstname} ${user.name.lastname}`)
console.log(`Email : ${user.email}`)
console.log(`UserName : ${user.username}`)
console.log(`Address :`)
console.log(`Street : ${user.address.street}`)
console.log(`City : ${user.address.city}`)
console.log(`State : ${user.address.state}`)
console.log(`Pincode : ${user.address.pincode}`)
console.log(`Courses Available are`)
let printcourses = (course,index) => console.log(`${index+1} . ${course}`)
user.courses.forEach(printcourses)


//we can also print like this
console.log(user.address)
console.log(user.courses[0])
console.log(user.courses[1])
console.log(user.courses[2])
console.log(user.courses[3])
//or we can also print the entire user details
console.log(user)