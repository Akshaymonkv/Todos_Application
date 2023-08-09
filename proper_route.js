//the same functionalities implemented in index.js but using router inside a single file
const express = require('express');                //importing express module
const bodyParser = require('body-parser')          //importing body-Parser
const uuid = require('uuid').v4;


const app = express();                             //calling into app
const router = express.Router();                   //creating a router by exporting from express
app.use(bodyParser.json());
app.use(router);

let todos = []

const createTodo = (req, res, next)=>{
    const {body} = req
    const new_insert  = {'id':uuid(),...body}
    todos.push(new_insert)
    res.status(200).json(todos)
    console.log(todos)
};

const readTodo = (req, res, next)=>{
    res.status(200).json(todos)
};

const updateTodo = (req, res, next)=>{
    const {body} = req
    const {id} = req.params
    const index = todos.findIndex((item)=>item.id == id)
    if(typeof index != -1){
        todos[index] = {id,...body}
    }
    res.send('Update succesfull').status(200)
};

const deleteTodo = (req, res, next)=>{
    const {id} = req.params
    const newTodos = todos.filter((item)=>item.id !== id)
    todos = newTodos
    console.log(newTodos)
    res.status(200).json(todos)
};

router.post('/todos/post', createTodo);
router.get('/todos',readTodo);
router.put('/todos/update/:id',updateTodo);
router.delete('/todos/delete/:id',deleteTodo);



app.listen('8080',()=>{
    console.log('Server is up and running')
});