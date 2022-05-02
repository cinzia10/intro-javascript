const course1 = {
    name: 'programmatore front end',
    hour: 300,
    ended: false
}

const student1 = {
    name: 'Cinzia',
    surname: 'Ariotti',
    age: 25,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,3],
    genere: 'F'
}

const student2 = {
    name: 'Polina',
    surname: 'Boretc',
    age: 27,
    luogo: 'Chelyaddnsk',
    married: false,
    course: course1,
    vote: [7,8,3],
    genere: 'F'
}

const student3 = {
    name: 'Giovanni',
    surname: 'Cambiaso',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [8,2,4],
    genere: 'M'
}
const student4 = {
    name: 'Mattia',
    surname: 'Della Mutta',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [2,3,2],
    genere: 'M'
}
const student5 = {
    name: 'Mirco',
    surname: 'Faro',
    age: 28,
    luogo: 'Santa Margherita Ligure',
    married: false,
    course: course1,
    vote: [8,6,9],
    genere: 'M'
}
const student6 = {
    name: 'Paolo',
    surname: 'Foppiano',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,9],
    genere: 'M'
}
const student7 = {
    name: 'Leslie',
    surname: 'Fritas',
    age: 27,
    luogo: 'Lima',
    married: true,
    course: course1,
    vote: [5,6,8],
    genere: 'F'
}
const student8 = {
    name: 'Christopher',
    surname: 'Limone',
    age: 27,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,7,5],
    genere: 'M'
}
const student9 = {
    name: 'Artem',
    surname: 'Sangiorgio',
    age: 24,
    luogo: 'San Pietroburgo',
    married: false,
    course: course1,
    vote: [9,9,1],
    genere: 'M'
}
const student10 = {
    name: 'Jessica',
    surname: 'Vitanza',
    age: 24,
    luogo: 'Trapani',
    married: false,
    course: course1,
    vote: [6,7,8],
    genere: 'F'
}

const students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]




function printStudent (studentsArray){
    for (let i = 0; i < studentsArray.length; i++) {
    const studente = studentsArray[i];
    console.log(studente.name+' '+studente.surname);
    console.log('Anno di nascita: '+studente.year);
    console.log('Luogo di nascita: '+studente.luogo);
    console.log('---------------------------------');
    console.log(' ');
}}


printStudent(students)


// // function isFemale(student){
// //     // if (student.genere === 'F'){
// //     //     return true
// //     // } else {
// //     //     return false
// //     // }

// //     return student.genere === 'F'
// // }

function printFemaleStudents (studentsArray){
//     for (let i = 0; i < studentsArray.length; i++) {
//     const studente = studentsArray[i];
//     console.log(studente.name+' '+studente.surname);
//     console.log('Anno di nascita: '+studente.year);
//     console.log('Luogo di nascita: '+studente.luogo);
//     console.log('---------------------------------');
//     console.log(' ');
// }

// const femaleStudent = studentsArray.filter(isFemale)

const femaleStudents = studentsArray.filter((s)=>s.genere==='F')

printStudent(femaleStudents);

}



/// FUNZIONE FILTRO CON ARRAY DI OBJECT
function printSingleStudent(student){
    console.log(student.name+' '+student.surname);
    console.log('Età: '+student.age);
    console.log('Luogo di nascita: '+student.luogo);
    console.log('---------------------------------');
    console.log(' ');
}


function printOldestStudent (studentArray){
    let oldest = studentArray[0]
    for (const student of studentArray) {
        if (student.age > oldest.age) {
            oldest = student;
        }
    }
    printSingleStudent(oldest)
}


printOldestStudent(students)


function reduceOldest(previous, current){
    if (previous.age < current.age){
        return current;
    } else {
        return previous;
    }
}

console.log(students.reduce((p,c)=>p.age<c.age?p:c))