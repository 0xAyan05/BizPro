const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const top_services = require('./utils/services.js')
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*",
}))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))

app.get('/', (req, res)=>{
    res.status(200).sendFile('index.html', { root: './public/views'})
})

app.get('/genres/:genre', (req, res)=>{
    const { genre } = req.params
    res.render('genres', { genre })
})

app.get('/api/services', (req, res)=>{
    res.status(200).json(top_services)
})


app.listen(PORT)