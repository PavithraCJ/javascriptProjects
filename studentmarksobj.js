let students = [
    {'name' : 'Harry','dept' : 'cse','gender':'Male','mark':90 },
    {'name' : 'Clara','dept' : 'cse','gender':'Female','mark':85},
    {'name' : 'John','dept' : 'cse','gender':'Male','mark':70},
    {'name' : 'Jacob','dept' : 'cse','gender':'Male','mark':100},
    {'name' : 'Smith','dept' : 'cse','gender':'Male','mark':85},
    {'name' : 'Angel','dept' : 'cse','gender':'Female','mark':50}
]
let printElemets = (s) => {
    console.log(`${s.name} ${s.dept} ${s.gender} ${s.mark}`)}

//sort by marks
let studentscopy = [...students]
let sortbyMarks = studentscopy.sort((a,b) => b.mark-a.mark)
sortbyMarks.forEach(printElemets)
console.log('--'.repeat(50))

//find female students
let femaleStudents = students.filter((s)=> s.gender.toLowerCase()==='female'.toLowerCase())
femaleStudents.forEach(printElemets)
console.log('--'.repeat(50))

//find list of students who scored greater than 75
let marks = students.filter((s)=> s.mark > 75)
marks.forEach(printElemets)
console.log('--'.repeat(50))

//find the list of students whose name starts with j
let studname = students.filter((s)=>s.name.charAt(0).toLowerCase()==='j'.toLowerCase())
studname.forEach(printElemets)

