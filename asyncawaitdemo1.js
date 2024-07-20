//Asynchronous function
//it is returning a promise obj with data as {'number1':10,'number2':12} after 5000ms
function getNumbers()
{
    return new Promise((resolve,reject)=>setTimeout(resolve({'number1':10,'number2':22}),5000))

}
//numbers is an object with two properties number1 and number2 we are getting from getNumbers()
//execute calculateSum() without async and await
async function calculateSum()
{
    let sum
    let numbers={'number1':0,'number2':0}
    //asynchronous function 
    //to make it synchronous and execute in order we are including async await
    await getNumbers().then((data)=>numbers=data).catch((err)=>console.log(err))
    //these two statements are not waiting for the previous statement to get completed
    sum=numbers.number1+numbers.number2
    console.log(sum)


}
calculateSum()