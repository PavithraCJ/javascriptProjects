let array1 = [1,2,3,4,5,6,7,8,9]
console.log(array1)
const square = (array) => {
    for(let i=0;i<array.length;i++)
        {
            array[i] = array[i] * array[i]
        }
        console.log(array)
}
square(array1)
console.log(array1)


//if we pass the value by reference it wont modify the original array
let arr = [1,2,3,4,5,6,7]
console.log(arr)//we use spreaded operator here 
const sqr = ([...array]) =>
    {
        for(let i=0;i<array.length;i++)
            {
                array[i] = array[i] * array[i]
            }
            console.log(array)
    }
    sqr(arr)
    console.log(arr)