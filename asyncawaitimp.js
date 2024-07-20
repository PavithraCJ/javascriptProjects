//this is for email validation
//it containes set of emailids
//it will check whether the given email id is present in the set or not
//it is an asynchronous function which has certain time delay

function validateEmail(email)
{
    let setOfEmails = new Set(["john@gmail.com","clara@gmail.com","smith@gmail.com","james@gmail.com"]);
    return new Promise((resolve,reject)=>{
        if(setOfEmails.has(email))
            setTimeout(resolve(true),5000)
        else
            setTimeout(reject(false),5000)
    });


}
//first method 
/*
async function checkEmail()
{
    let validate = await validateEmail("john@gmail.com").then((data)=>{return data}).catch((data)=>{return data})
    console.log(validate)
    */

//another method
async function checkEmail()
{
    let validate;
    try
    {
        validate = await validateEmail("joe@gmail.com");
        console.log(validate);//resolve
    }
    catch(err)
    {
        validate=err;
        console.log("catch block "+validate)
    }
}

checkEmail()