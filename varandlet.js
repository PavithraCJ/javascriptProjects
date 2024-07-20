sample()//function class before defining the function
function sample()
{
    //function definition
    console.log(x)
    var x=10;
    console.log(x)
}
/* interpreted
var x -> Hoisting (only declaration will be moved to top of the scope
    console.log(x)
    x=10
    let variables cannot be accessed before initialization(o/p reference error)
    var variables can be accessed before initialization(o/p undefined)
    
    
    
    */