//controller file will have the logic for each of the api calls
const uuid = require('uuid').v4;

let todos = []

exports.createTodo = (req, res, next)=>{
    const {body} = req
    const new_insert  = {'id':uuid(),...body}
    todos.push(new_insert)
    res.status(200).json(todos)
    //console.log(todos)
};

exports.readTodo = (req, res, next)=>{
    res.status(200).json(todos)
};

exports.updateTodo = (req, res, next)=>{
    const {body} = req
    const {id} = req.params
    const index = todos.findIndex((item)=>item.id == id)
    if(typeof index != -1){
        todos[index] = {id,...body}
    }
    res.send('Update succesfull').status(200)
};

exports.deleteTodo = (req, res, next)=>{
    const {id} = req.params
    const newTodos = todos.filter((item)=>item.id !== id)
    todos = newTodos
    console.log("newTodos", newTodos)
    res.status(200).json(todos)
};