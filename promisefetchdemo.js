//fetch function
//fetch function  is an asynchronous function which returns promise object
console.log("START");
function fetchUserData()
{
    fetch("https://fakestoreapi.com/users")//asynchronous function
    .then((response)=>{return response.json()})
    .then((data)=>console.log(data))//data-response.json() returned by the previous callback function- array of user objects
    .catch((err)=>console.log(err))
}
fetchUserData()

function fetchProducts()
{
    fetch("https://fakestoreapi.com/products")//asynchronous function
    .then((response)=>console.log(response.json))
    .catch((err)=>console.log(err))

}
fetchProducts()
console.log("END")

/*
promise has 3 states
initially it is in pending state
then if it gets moved to the resolve function it moves to fulfilled state
else if it moves to the reject function it moves to the rejected state*/