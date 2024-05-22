const express = require("express");
const router = express.Router();
const { createTodo, getTodos, getTodo, deleteTodo, updateTodo } = require("../controllers/ToDoController");
router.get("/", getTodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.delete("/:id", deleteTodo)

router.patch("/:id", updateTodo );
module.exports = router;
