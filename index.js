require('dotenv').config()
const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send('Parasdotcom')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>this is youtube</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1>this is the login page</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

