//students scores will be updated here but not marked if the teacher haven't marked the student


const scores = [
    {
        assignmentsId: 'ass1',
        studentsScores: [
            { studentId: 'stu1', score: 10 }, { studentId: 'stu2', score: 20 },
        ]
    },
    {
        assignmentsId: 'ass2',
        studentsScores: [
            { studentId: 'stu1', score: 12 }, { studentId: 'stu2', score: 22 },
            { studentId: 'stu3', score: 32 }, { studentId: 'stu4', score: 42 }
        ]
    },
    {
        assignmentsId: 'ass3',
        studentsScores: [
            { studentId: 'stu', score: 13 }, { studentId: 'stu2', score: 23 },
            { studentId: 'stu3', score: 33 }, { studentId: 'stu4', score: 43 }
        ]
    },
    {
        assignmentsId: 'ass4',
        studentsScores: [
            { studentId: 'stu1', score: 14 }, { studentId: 'stu2', score: 24 },
            { studentId: 'stu3', score: 33 }, { studentId: 'stu4', score: 44 }
        ]
    } 
]
//teachers can see all the marks given by them to a particular student of her class and can update them
//teachers can see all the marks given by them to all students of her class and can update them (together evenly)

module.exports = scores;