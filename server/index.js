const express = require('express');
const mongoose = require ('mongoose');
const cors = require('cors');
const UserModal = require ('./modals/Users');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/CRUD")

app.post("/CreateUser", async (req, res) => {
    UserMOdel.create(req.body)
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})