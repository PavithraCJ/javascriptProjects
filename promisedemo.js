//promise is an object in javascript
//it is used by an asynchronous function
//promise object - callback func
//callback func- resolve and reject
//resolve -  success
//reject - error
let value=100 //simulate if data<150 then success else failure
let promiseObj = new Promise((resolve,reject) =>
{
    if(value<150)
        resolve(value); //returns data if it is success
    else
        reject("failure"); //returns failure if it doesnt satisfies the condition
});


//if it is resolve, "then callback" function gets executed
//if it is reject, catch callback function gets executed
//data in "then" callback is the data returned by 'resolve' function
//err in catch callback is the ,message returned by "reject" function4

promiseObj
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err))


//promiseobj then, catch, finally
//then callback function will get executed, if it is success
//catch callback function will get executed, if it is failure
//finally block always gets executed
            
