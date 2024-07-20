/*let randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber)*/
function getLuckyNumber()
{
    let randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber)

    return new Promise((resolve,reject)=>{
    if(randomNumber%2==0)
        resolve({'randomNumber':randomNumber})
    else
        reject('Not a Lucky Number')
    
})
}
setInterval(()=>getLuckyNumber()
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err)),1000)