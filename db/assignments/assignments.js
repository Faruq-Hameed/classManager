//only teachers are authorized to post assignments here
//students can only see the assignments uploaded by the teacher whose course they registered for
//every posts(uploads) must have a unique identifier
const assignments = [
    {id: 'ass1',courseTitle: 'c1', questions : [ {1: 'what is a noun'}, {2: 'how old is Buhari'}], uploadedOn: new Date, status: true}, //status (expired or still valid)
    {id: 'ass2',courseTitle: 'c2', questions : [ {1: 'what is a pronoun'}, {2: 'how old is Tinubu'}], uploadedOn: new Date, status: true},
    {id: 'ass3',courseTitle: 'c3', questions : [ {1: 'what is a verb'}, {2: 'how old is Jonathan'}], uploadedOn: new Date, status: true},
    {id: 'ass4', courseTitle: 'c4', questions : [ {1: 'what is a adverb'}, {2: 'how old is Azikwe'}], uploadedOn: new Date, status: true},
]

module.exports = assignments