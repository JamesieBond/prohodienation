const express = require('express');
const router = express.Router();

var Todo = require('../Models/todo');

router.get('/todo', (req, res) =>{

    // use mongoose to get all todo in the database
    Todo.find(function(err, todo) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todo); // return all todo in JSON format
    });
});

// create todo and send back all todo after creation
router.post('/todo', (req, res) =>{

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todo after you create another
        Todo.find(function(err, todo) {
            if (err)
                res.send(err)
            res.json(todo);
        });
    });

});
router.delete('/todo/:todo_id', (req, res) => {
    Todo.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the todo after you create another
        Todo.find(function(err, todo) {
            if (err)
                res.send(err)
            res.json(todo);
        });
    });
});

module.exports = router;
