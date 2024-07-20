console.log("hiiii")
console.log("START")
console.log("Welcome")
//setInterval and setTimeout are asynchronous function
//we have two functions asynchronous and synchronous functions
//synchronous function run in a sequence order
//asynchronous functions will not block the remaining part of the code
//the main thread will get executed without waiting for the setInterval to complete its execution

const intervalId=setInterval(()=>console.log(`this message gets displayed in evey 1000ms`),1000)
console.log(`Message after setInterval`)
console.log(`END`)
setTimeout(()=>clearInterval(intervalId),5000)//this will stop the setInterval execution in 5 seconds

//the below execution will not wait for the setInterval/setTimeout function to complete its execution
console.log(`statement after setTimeout`)