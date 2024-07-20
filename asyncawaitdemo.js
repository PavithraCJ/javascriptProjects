//simulate a function which returns data after some time delay
console.log('STEP1')
function getData()
{
    return new Promise((resolve,reject)=>setTimeout(resolve('Hello...'),5000))
}
async function consumeData()
{
    //if function calls any asynchronous which has some time delay,then add "async"
    console.log('STEP2')
    console.log('Step3')
    let msg
    await getData().then((data)=>msg=data).catch((err)=>console.log(err))
    console.log(msg)//not waiting for the asynchronous function
    console.log('STEP4')
    console.log('END')
}
consumeData();
