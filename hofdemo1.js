//HOF - function as parameter and function as return value
//example 1
function multiply(x)
{
    return function(y)
    {
        return x*y;
    }
}
let func=multiply(2)//func=function(y){return x*y} x=2,y=3
console.log(func(3))//x=2 y=3
console.log(func(4))//x=2 y=4

//example2
function findDiscount(price)
{
    return function(discount)
    {
        return (price - (price * discount/100));
    }
}
let discountPrice = findDiscount(100)
console.log(discountPrice(10))

//another example
//based on bonus rate(0 to 1)
function calculateSalary(basicSalary)
{
    return function(hra,bonus,bonusrate,pf)
    {
        return (basicSalary + hra + (bonus * bonusrate) - pf);
    }
}
let netsalary = calculateSalary(10000)
console.log(netsalary(100,100,1,50))
console.log(netsalary(1000,1000,0.5,500))
