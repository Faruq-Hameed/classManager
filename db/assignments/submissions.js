////Students can submit their work . Assignments will be submitted here but cannot edit or resubmit them
//Teacher can check submissions made by their students and can give them marks for that.
//students can view all the submissions made by them 
const submissions = [
    {
        assignmentId: 'ass1', submissions: [
            { student: { id: 'stu1', name: 'student1' }, submission: ['a noun is any naming word', 70], dateSubmitted: new Date, status: 'marked' },
            { student: { id: 'stu2', name: 'student2' }, submission: ['a noun is a naming word'], dateSubmitted: new Date, status: 'marked' },
        ]
    },
    {
        assignmentId: 'ass2', submissions: [
            { student: { id: 'stu2', name: 'student1' }, submission: ['represents noun', 73], dateSubmitted: new Date, status: 'marked' },
        ]
    },
    {
        assignmentId: 'ass3', submissions: [
            { student: { id: 'stu3', name: 'student1' }, submission: ['action word', 60], dateSubmitted: new Date, status: 'marked' },
        ]
    },
    {
        assignmentId: 'ass4', submissions: [
            { student: { id: 'stu4', name: 'student1' }, submission: ['qualifies verb', 70 ], dateSubmitted: new Date, status: 'marked' },
        ]
    }
]

module.exports = submissions