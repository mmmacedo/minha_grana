const PORT = 3003

const BODYPARSER = require('body-parser')
const EXPRESS = require('express')
const SERVER = EXPRESS()

SERVER.use(BODYPARSER.urlencoded({ extended: true }))
SERVER.use(BODYPARSER.json())

SERVER.listen(PORT , function () {
    console.log(`Backend rodando em ${PORT}!`)
})