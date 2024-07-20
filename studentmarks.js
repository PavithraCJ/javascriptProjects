let marks = [100,38,78,43,59,93,29,56,32,89,82,84]
//total number of students who has scored greater than 80
let marksG80 = marks.filter((value)=> value>80)
console.log(marksG80)
console.log(`Number of students who scored greater than 80 is `)
console.log(marksG80.length)

//total number of students who has scored less than 35
let markL35 = marks.filter((value)=> value<35)
console.log(markL35)
console.log(`Number of students who scored less than 35 is`)
console.log(markL35.length)

console.log(marks)

//how many students has scored 100
let marks100 = marks.filter((value) => value==100)
console.log(marks100)
console.log(`Number of Students who scored 100`)
console.log(marks100.length)

console.log(`Another method`)
const count = ([...marks]) =>
{
    let c=0;
    let marks80=0
    let marks35=0
    for(let i=0 ; i<marks.length ; i++)
        {
            if(marks[i]>80)
                {
                    marks80++
                }
            if(marks[i]<35)
                {
                    marks35++
                }
            if(marks[i]==100)
                c++;
        }
        console.log(`${c} students scored 100`)
        console.log(`${marks80} students scored greater than 80`)
        console.log(`${marks35} students scored less than 35`)

}
count(marks)

//sorting in ascending and descending order without modifying the original marks array
let copyarray = [...marks];
console.log(copyarray)
let ascending = (a,b) => a-b
let descending = (a,b) =>b-a
copyarray.sort(ascending);
console.log(`Ascending order`)
console.log(copyarray)
copyarray.sort(descending)
console.log(`Descending order`)
console.log(copyarray)
console.log(marks)