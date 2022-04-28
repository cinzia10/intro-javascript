const course1 = {
    name: 'programmatore front end',
    hour: 300,
    ended: false
}





const student1 = {
    name: 'Cinzia',
    surname: 'Ariotti',
    year: 1996,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,3],
    genere: 'F'
}

const student2 = {
    name: 'Polina',
    surname: 'Boretc',
    year: 1997,
    luogo: 'Chelyaddnsk',
    married: false,
    course: course1,
    vote: [7,8,3],
    genere: 'F'
}

const student3 = {
    name: 'Giovanni',
    surname: 'Cambiaso',
    year: 1997,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [8,2,4],
    genere: 'M'
}
const student4 = {
    name: 'Mattia',
    surname: 'Della Mutta',
    year: 1997,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [2,3,2],
    genere: 'M'
}
const student5 = {
    name: 'Mirco',
    surname: 'Faro',
    year: 1993,
    luogo: 'Santa Margherita Ligure',
    married: false,
    course: course1,
    vote: [8,6,9],
    genere: 'M'
}
const student6 = {
    name: 'Paolo',
    surname: 'Foppiano',
    year: 1997,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,9],
    genere: 'M'
}
const student7 = {
    name: 'Leslie',
    surname: 'Fritas',
    year: 1995,
    luogo: 'Lima',
    married: false,
    course: course1,
    vote: [5,6,8],
    genere: 'F'
}
const student8 = {
    name: 'Christopher',
    surname: 'Limone',
    year: 1994,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,7,5],
    genere: 'M'
}
const student9 = {
    name: 'Artem',
    surname: 'Sangiorgio',
    year: 1997,
    luogo: 'San Pietroburgo',
    married: false,
    course: course1,
    vote: [9,9,1],
    genere: 'M'
}
const student10 = {
    name: 'Jessica',
    surname: 'Vitanza',
    year: 1997,
    luogo: 'Trapani',
    married: false,
    course: course1,
    vote: [6,7,8],
    genere: 'F'
}

const studenti = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]

for (let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];
    console.log(studente.name+' '+studente.year);
}

for (let i = 0; i < studenti.length; i++) {
    const student = studenti[i];
    if (student.genere === 'F') {
        console.log(student.name+' '+student.surname);
    }
}