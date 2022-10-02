const express = require('express')
const app = express()
const path = require('path')
const PORT = 8080


app.get('/', (req, res)=>{
    res.sendFile(process.cwd() + '/public/index.html')
})

app.get('/cars', (req, res)=>{
    res.sendFile(process.cwd() + '/public/addCar.html')
})



app.use('/images', express.static(path.join(process.cwd()+'/public/images')))
app.use('/css', express.static(path.join(process.cwd()+'/public/css')))


app.listen(PORT)