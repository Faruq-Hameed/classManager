const { classNotices, generalNotices, allUsersChats } = require('./Messages')
const { teachers, students,passwords } = require('./users')
const courses = require('./courses')
const { assignments, scores, submissions } = require('./assignments')

module.exports = {
    classNotices, generalNotices, allUsersChats, teachers,
    students, courses, assignments, scores, submissions, passwords
}