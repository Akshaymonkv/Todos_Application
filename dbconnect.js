const mysql =  require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Akshay123',
    database : 'sakila'

});

connection.connect(err=>{
    if(err){
        console.log("Error connecting to database")
    }
    else{
        console.log("Connection succesfull")
    }
})

module.exports = connection;