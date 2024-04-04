const courses = require('./courses.js')

courses.forEach(e => {
    if(e.isVerifiedExpert) console.log(`{ id: '${crypto.randomUUID()}', name: '${e.name}', ratings: ${e.ratings}, isVerifiedExpert: true },`)
})