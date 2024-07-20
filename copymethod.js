let values=[102,356,25,89,56,142,55]
let copyvalues = values //this means both the array referring to the same memory location
//if any changes made in the values array gets reflected in the original array
console.log(values)
console.log(copyvalues)
copyvalues.push(200)
console.log(values)
console.log(copyvalues)

//if we dont want to modify the original array we have to use shallowcopy
//means values and copyvalues get referred to the different memoryaddress
let val = [78,56,89,26,45,12,23,20,11]
let copyval = [...val] //this ... means spread operator
console.log(val)
console.log(copyval)
copyval.push(200)
console.log(val)
console.log(copyval)

let names=["John","Jacob","Smith","Clara","Adam"]
let copynames = [...names]
console.log(names)
console.log(copynames)
copynames.push("Joe")
console.log(names)
console.log(copynames)