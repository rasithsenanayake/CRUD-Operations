const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const UserModel = require ('./modals/Users');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/CRUD")

app.get ("/",(req, res) => {
    UserModel.find({})
    .then (users => res.json (users))
    .catch (err => res.json (err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then (user => res.json (user))
    .catch (err => res.json (err))
})

app.put ('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate ({_id:id} , {name:req.body.name, email:req.body.email, age:req.body.age})
    .then (user => res.json (user))
    .catch (err => res.json (err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then (result => res.json (result))
    .catch (err => res.json (err))
})

app.post("/CreateUser", async (req, res) => {
    UserModel.create(req.body)
    .then (users => res.json(users))
    .catch (err => res.json(err))
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})