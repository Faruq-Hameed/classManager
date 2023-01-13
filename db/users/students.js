const students = [
    {id: 'stu1', fullName: 'student1 akin', email: 'student1@mail.com', role: 'students',level:100, coursesId: { unapproved: ['c5'], approved: ['c1', 'c2'] }},
    {id: 'stu2', fullName: 'student2 Faruq', email: 'student2@mail.com', role: 'students',level:100, coursesId: { unapproved: ['c1','c5'], approved: ['c2'] }},
    {id: 'stu3', fullName: 'student3 Adeshina', email: 'student3@mail.com', role: 'students',level:200, coursesId: { unapproved: ['c4'], approved: ['c3','c5'] }},
    {id: 'stu4', fullName: 'student4 ajijola', email: 'student4@mail.com', role: 'students',level:200, coursesId: { unapproved: ['c3'], approved: ['c4', 'c5'] }},
]

module.exports = students;