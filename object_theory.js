const students = [student1, student2]

console.log(students)

const course1 = {
    name: 'programmatore front end',
    hour: 300,
    ended: false
}


const vote1 = [8, 5, 10, 9]

const student1 = {
    name: 'Mirco',
    surname: 'Faro',
    age: 28,
    married: false,
    course: course1,
    vote: vote1
}


const vote2 = [4, 7, 6, 9]

const student2 ={
    name: 'Paolo',
    surname: 'Foppiano',
    age: 24,
    married: false,
    course: course1,
    vote: vote2
}


for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.name+' '+student.surname)
}