//for CRUD operations in an array

const express = require("express");             //requiring express module in node
const bodyParser = require("body-parser");
const uuid = require("uuid").v4;

const app = express();                          //calling express module to a constant app.
app.use(bodyParser.json());

let todos = [];                                 //creating an empty array

//creating an app.get method to retreive all the contents from the array back to the reqeustor
app.get('/todos', (req, res, next)=>{
    res.status(200).json(todos)                 //to return the array contents back to the requestor as json
    //res.send("Hello World!")                  - to send a message to the requestor
});

//creating an app.post method to post inputs to an array from the requestor
app.post('/todos/post',(req, res, next)=>{
    const {body} = req                          //destructuring the incoming req to extract the body
    const new_insert = {id:uuid(), ...body}     // ... is the spread operator which creates a new object by copying the properties from the older one
    todos.push(new_insert)
    res.status(200).json(todos)
  }); 

//creating an app.delete method to delete a single element from an array using the id
app.delete('/todos/delete/:id' ,(req, res, next)=>{
    const {id} = req.params
    const newTodos = todos.filter((item)=>item.id !== id)
    todos = newTodos
    console.log(newTodos)
    res.status(200).json(todos)    
});

//creating an app.put method to update an existing array element using the id
app.put("/todos/update/:id",(req, res, next)=>{
    const {id} = req.params
    const {body} =req

    const index = todos.findIndex((item)=>item.id == id)
    if(typeof index!== -1){
        todos[index] = {id,...body}
    }

    res.status(200).json(todos)
});

//listening to the request on the port specified
app.listen('8080',()=>{
    console.log("Server is up and running")
});