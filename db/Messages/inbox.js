//Student can see the list of all teachers in the portal and can message any of them same goes for students.
// User can search any student through search option at the top of the student list page. Same goes for teachers list.
// Teachers can see all the messages written by students to them in Inbox.

const allUsersChats = [
    {chatId: 'cha1', sender: {id: 'stu1', texts: 'hello tea1 please accept my course', seen: true}, receiverId: 'tea1'},
    {chatId: 'cha1', sender: {id: 'tea1', texts: 'okay', seen: false}, receiverId: 'stu1'},
    {chatId: 'cha1', sender: {id: 'stu2', texts: 'hello tea2 please accept my course', seen: true}, receiverId: 'tea2'},
    {chatId: 'cha1', sender: {id: 'tea2', texts: 'Give me some moment', seen: true}, receiverId: 'stu2'},
]

module.exports = allUsersChats