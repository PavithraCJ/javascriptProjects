let product={
    'title':'pen',
    'price':100.50,
    'category':'xyz',
    'rating':4.3
}
console.log(Object.keys(product))
let user={
    'username':'john',
    'email':'john123@gmail.com',
    'address':{
        'street':'xyz',
        'city':'chn',
        'pincode':'600621'

    },
    'gender':'male',
    'password':'john@124'
}
//if we want only two properties of the product object
//const username=user.username
//const password=user.password
const{username,password}=user
console.log(username)
console.log(password)
