var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var port = 4000
var db = require('./models')
var Userctrl = require('./controllers/addController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/addUser',Userctrl.addUser)
app.get('/showData',Userctrl.showData)
app.get('/showData/:id',Userctrl.showOne)
app.delete('/deleteUser/:id',Userctrl.deleteData)
app.post('/postUser',Userctrl.postUser)
app.put('/updateUser/:id',Userctrl.update)


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})