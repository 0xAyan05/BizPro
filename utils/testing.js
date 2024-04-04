const users = require('./users.js')

users.forEach((e,i)=>{
    users[i] = { id: crypto.randomUUID(), ...e }
    console.log(users[i],',')
})
