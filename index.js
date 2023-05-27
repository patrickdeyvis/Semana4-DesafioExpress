const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Method: Get')
    })

app.post('/users', function (req, res) {
    
    res.send('Methodo POST  http://localhost:')
    })

app.put('/usuarios', function (req, res) {
    res.send('Obteve uma requisição PUT em /usuarios')
    })

app.listen(port, () => {
    console.log(`Aplicação exemplo rodando em http://localhost:${port}`)
    })