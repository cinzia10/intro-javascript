// const course1 = {
//     name: 'programmatore front end',
//     hour: 300,
//     ended: false
// }


// const vote1 = [8, 5, 10, 9]

// const student1 = {
//     name: 'Mirco',
//     surname: 'Faro',
//     age: 28,
//     married: false,
//     course: course1,
//     vote: vote1
// }


// const vote2 = [4, 7, 6, 9]

// const student2 ={
//     name: 'Paolo',
//     surname: 'Foppiano',
//     age: 24,
//     married: false,
//     course: {
//         name: 'programmatore mobile',
//         hour: 250,
//         ended: true
//     },
//     vote: vote2
// }

// // l'array contenente gli object, devono essere messi alla fine degli object, altrimenti da errore lettura
// const students = [student1, student2]



// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student.name+' '+student.surname)
// }

// for (const student of students) {
//     if (student.course.name === 'programmatore front end'){
//         console.log(student.name)
//     }
// }




/// ESEMPIO ESERCITAZIONE

function printStudent (studentsArray){
    for (let i = 0; i < studentsArray.length; i++) {
    const student = studentsArray[i];
    console.log(student.name+' '+student.surname);
    console.log('Anno di nascita: '+student.age);
    console.log('Luogo di nascita: '+student.luogo);
    console.log('---------------------------------');
    console.log(' ');
}}


const course1 = {
    name: 'programmatore front end',
    hour: 300,
    ended: false
}
const student1 = {
    name: 'Christopher',
    surname: 'Limone',
    age: 27,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,7,5],
    genere: 'M'
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
    name: 'Cinzia',
    surname: 'Ariotti',
    age: 25,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,3],
    genere: 'F'
}
const student4 = {
    name: 'Leslie',
    surname: 'Fritas',
    age: 27,
    luogo: 'Lima',
    married: true,
    course: course1,
    vote: [5,6,8],
    genere: 'F'
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


const students = [student1, student2, student3, student4, student5, student6];


// //FUNZIONE DI COMPARAZIONE DEL COGNOME DEGLI STUDENTI
// function compareStudentsBySurname (el1, el2){
//     return el1.surname.localeCompare(el2.surname);
// }

// students.sort(compareStudentsBySurname)
// printStudent(students)


// FUNZIONE DI COMPARAZIONE DELL'ETA' DEGLI STUDENTI
function compareStudentsByAge (el1, el2){
    return el1.age-el2.age;
}

students.sort(compareStudentsByAge)
// printStudent(students)

console.log(JSON.stringify(students))

// //FUNZIONE DI COMPARAZIONE DI ETA' E COGNOME (QUANDO L'ETA' E' UGUALE, SI COMPARANO I COGNOMI)
// function compareStudentByAgeAndSurname (el1, el2){
//     const order = el1.age - el2.age;
//     if (order === 0){
//         return el1.surname.localeCompare(el2.surname);
//     } else {
//         return order;
//     }
// }

// students.sort(compareStudentByAgeAndSurname);
// printStudent(students)



