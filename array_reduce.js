let marks = [100,90,80,70]
let sum = marks.reduce((previousvalue,currentvalue) => previousvalue+currentvalue,0)
/*
previousvalue = 0; //this is intial value
//if we want to multiply instead of sum we can set the initial value to 1
currentvalue =100 it returns previous value = 100
previousvalue =100
currentvalue = 90 it returns 190
previousvalue =190
currentvalue=80 it returns 270
previousvalue=270
currentvalue=80 it returns 340
array ends reduce method return the value 340 to the variable sum
*/
console.log(sum)