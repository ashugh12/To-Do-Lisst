 const express = require("express");
 const router = express.Router();
 const TodoModel = require("../models/ToDoModel")

 router.get('/', (req, res)=>{
    res.json({
        msg: 'GET all todos'
    })
 })

 router.get('/:id', (req, res)=>{
    res.json({
        msg: "GET  a single todo"
    })
 })

 router.post('/', async (req, res)=>{
    const {title, dueDate, hoursNeeded} = req.body;
    try {
        const todo = await TodoModel.create({title, dueDate, hoursNeeded});
        res.status(200).json(todo)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
 })

 router.delete('/:id', (req, res)=>{
    res.json({
        msg:"DELETE a todo"
    })
 })

 router.patch('/:id',( req, res)=>{
    res.json({
        msg: "UPDATE a todo"
    })
 })
 module.exports = router;
