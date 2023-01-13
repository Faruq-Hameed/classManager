/*
teacher can post notice which will be displayed to all the students
*/

const classNotices = [
    { courseId: 'c1', notices: [{ id: 'c1n1', notice: 'welcome to c1 my class call me tea1' }] },
    { courseId: 'c2', notices: [{ id: 'c2n1', notice: 'welcome to c2 my class call me tea2' }] },
    { courseId: 'c3', notices: [{ id: 'c3n1', notice: 'welcome to c3 my class call me tea3' }] },
    { courseId: 'c4', notices: [{ id: 'c4n1', notice: 'welcome to c4 my class call me tea4' }] },
    { courseId: 'c5', notices: [{ id: 'c5n1', notice: 'welcome to c5 my class call me tea4' }] },
]

const generalNotices = [
    {id:'gen1', notice: 'welcome to class manager group of school', posterId: 'tea1'},
    {id:'gen2', notice: 'vote for me as senior prefect', posterId: 'stu1'},
]
module.exports = {classNotices, generalNotices}