const TodoModel = require('../models/todo.model')
const createTodo = async (req,res,next)=>{
    try{
        console.log("Request Body in Controller:", req.body);
        const createdModel=  await TodoModel.create(req.body)
        res.status(201).json(createdModel)
    }
    catch (error) {
        console.error("Validation Error:", error); // Debugging log
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: error.message }); 
        }
        next(error);
    }
   
}   
module.exports={createTodo}