function validationPattern(inputStr)
{
    //Ateast one special character
    let pattern=/^(?=.*[&@%*$]).*$/
    //.* any character ?= lookahead it looks for atleast one special character
    //special characters can be preceeded by any number of characters (.*)- 0 or more characters
    //pattern is -> the input should contain atleast one special characters
    return pattern.test(inputStr)
}
//(?=) positive look ahead - it looks for a particular pattern
//.* anycharacter(one or more characters at the beginning and at the end)
console.log(validationPattern('abc')) //doesnt contain any spcl characters so false
console.log(validationPattern('abc&')) //it contains spcl characters at the end so true
console.log(validationPattern('abc&lasdf')) ////it contains spcl characters at the middle so true
console.log(validationPattern('%abc')) //it contains spcl character in the beginning so true
console.log(validationPattern('dsfdsgr%'))//in the end so true
console.log(validationPattern('1334'))//no spcl characters so false
console.log(validationPattern('&'))
console.log(validationPattern('asfefr$$$*dsdgr'))
