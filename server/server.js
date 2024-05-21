require("dotenv").config();

const express = require('express');
const app = express();
const todoRouter = require('./routes/todo')

app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.use('/api/todos', todoRouter);


app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})
