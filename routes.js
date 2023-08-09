//defining the routes as a seperate file and then will go to the CRUD operations from here
const express = require('express');         //requiring express into router file
const router = express.Router();            //Calling the router function

const  {
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo
    } = require('./controller');               //declaring routes          

router.get('/todos', readTodo);
router.post('/todos/post',createTodo);
router.put('/todos/update/:id', updateTodo);
router.delete('/todos/delete/:id',deleteTodo);

module.exports = router;