const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const courses = require('./utils/courses.js')
const experts = require('./utils/popexperts.js')
const top_services = require('./utils/services.js')
const descriptions = require('./utils/description.js')
const users = require('./utils/users.js')

const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*",
}))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).sendFile('index.html', { root: './public/views'})
})

app.get('/experts/:name', (req, res)=>{
    const { name } = req.params
    const targ_expert = experts.find(e => e['name']===name)

    res.render('expertsprofile', { expert: targ_expert })
})

app.get('/genres/:genre', (req, res)=>{
    const { genre } = req.params
    const targ = genre.match(/\b\w+\b/g)
    let filtered_courses = []
    
    targ.forEach(e => {
        if ((e[0].toLowerCase() != e[0]) & e!='Business') {
            filtered_courses.push(
                ...courses.filter(c => c.businessOnlineCourseTitle.includes(`${e}`))
            )
        }
    })

    res.render('genres', { genre, courses: filtered_courses })
})

app.get('/search/:filter', (req, res)=>{
    const { filter } = req.params
    const matched_courses = courses.filter(c => 
        c.businessOnlineCourseTitle.includes(filter) && 
        c.businessOnlineCourseTitle[0].toLowerCase()==filter[0].toLowerCase() 
    )

    res.render('genres', { genre: "Search Results: "+filter, courses: matched_courses})
})

app.get('/api/services', (req, res)=>{
    res.status(200).json(top_services)
})
app.get('/api/experts', (req, res)=>{
    res.status(200).json(experts)
})

app.post('/api/search/suggestions', (req, res)=>{
    const { title } = req.body
    
    const suggestions = courses.filter(c => 
        c.businessOnlineCourseTitle.toLowerCase()
            .includes(title.toLowerCase()) && 
            c.businessOnlineCourseTitle[0].toLowerCase()==title[0].toLowerCase()
    )
    res.status(200).header('application/json').json(suggestions)
})

app.get('/login', (req, res)=>{
    res.sendFile('windowform.html', { root: __dirname+'/public/views'})
})
app.get('/course/info', (req, res)=>{
    res.render('details', { info: descriptions })
})

app.post('/api/users/auth', (req, res)=>{
    const { username, password } = req.body

    res.setHeader('Content-Type', 'application/json')
console.log(users[users.length-1])
    if(!username && !password)
        return res.json({ msg: 'Please fill all fields', stats: -1 })

    const index = users.findIndex(user => user['username']===username)
    if(index === -1)
       return res.json({ msg: 'user not found', stats: -1 })

    if(password !== users[index]['password'])
        return res.json({ msg: 'wrong credentials', stats: -1})

    res.json({ url: `http://localhost:5000/home/${users[index].id}`, stats: 1 })
})

app.post('/api/users/signup', (req,res)=>{
    const { username, fname, lname, email, password } = req.body

    if(!username && !fname && !lname && !email && !password)
        return res.json({ msg: 'All fields are required.', stats: -1 })
        
    const new_user = { 
        id: crypto.randomUUID(),
        name: `${fname} ${lname}`,
        username: username,
        password: password,
        email: email
    }

    users.push(new_user)
    return res.json({ msg: 'User created successfully', stats: 1 })
})

app.get('/home/:id', (req, res)=>{
    res.render('home', { 
        user: users.find(us => us['id']===req.params.id)
     })
})

app.listen(PORT)