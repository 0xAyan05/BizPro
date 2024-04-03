const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile('index.html', { root: './public/views'})
})

app.listen(PORT)