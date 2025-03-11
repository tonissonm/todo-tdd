const TodoController = require('../../controllers/todo.controller') 
const TodoModel = require('../../models/todo.model')
const httpMocks = require('node-mocks-http')
const newTodo = require('../mock-data/new-todo.json')
TodoModel.create = jest.fn()
let req, res,next
beforeEach(()=>{
    req =httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})

describe('TodoController.createTodo',()=>{
    beforeEach(()=>{
        req.body = newTodo
    })
    it('should have a createTodo function', ()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })
    it('should call TodoModel.create', ()=>{
        req.body = newTodo
        TodoController.createTodo(req,res,next)
        expect(TodoModel.create).toHaveBeenCalledWith(newTodo)
    })
    it('should return a 201 response code',async ()=>{
        await TodoController.createTodo(req,res,next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
    it('should return a JSON body in Response', async ()=>{
        await TodoModel.create.mockReturnValue(newTodo)
        await TodoController.createTodo(req,res,next)
        expect(res._getJSONData()).toStrictEqual(newTodo)
    })
})