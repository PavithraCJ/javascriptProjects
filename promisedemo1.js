//simulating - Map(key,value)
//key -productname value-price of the product
//implement a function which returns a Promise Object
//function parameter is the product name
//if product exists in the map, resolve function returns the price of the object
//if product doesnt exists, reject function returns the error message
//create a map
let productDetails=new Map();
productDetails.set("pen",100)
productDetails.set("pencil",25)
productDetails.set("notebook",50)
//function returns a promise object - producer function which produces promise object
//if productname present in the map - resolve
//if productname doent present in the map- reject

function getProductPrice(productname){
    let price=productDetails.get(productname)
    return new Promise((resolve,reject)=>{
        if(price)
            resolve({'price':price})
        else
            reject('product doent exists')

    })
}
let resultPromise = getProductPrice("saf")
//the above function returns a promise object so the type of the result is promise
resultPromise.then((data)=>console.log(data))//data returned by resolve
             .catch((err)=>console.log(err))   //error returned by reject