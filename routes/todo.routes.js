const express = require("express");
const todoController = require("../controllers/todo.controller")
const router = express.Router();
router.post("/",todoController.createTodo);
router.get("/",todoController.getTodos);
router.get("/:todoId",todoController.getTodoById);
module.exports =router;