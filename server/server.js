require("dotenv").config();

const mongoose = require("mongoose")
const express = require('express');
const app = express();
const todoRouter = require('./routes/todo')

app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use('/api/todos', todoRouter);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`connected to db and http://localhost:${process.env.PORT} `)
    })
}).catch((error)=>{
    console.log(error);
})
