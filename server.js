const express = require('express')
const app = express()
const path = require('path')
const top_services = require('./utils/services.js')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.status(200).sendFile('index.html', { root: './public/views'})
})

app.get('/api/services', (req, res)=>{
    res.status(200).json(top_services)
})


app.listen(PORT)