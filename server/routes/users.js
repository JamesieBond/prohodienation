const express = require('express');
const router = express.Router();

router.get('/user', (req, res) =>{

    // use mongoose to get all user in the database
    User.find(function(err, user) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(user); // return all user in JSON format
    });
});

// create todo and send back all user after creation
router.post('/user', (req, res) =>{

    // create a todo, information comes from AJAX request from Angular
    User.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err);

        // get and return all the user after you create another
        User.find(function(err, user) {
            if (err)
                res.send(err)
            res.json(user);
        });
    });

});
router.delete('/user/:user_id', (req, res) => {
    User.remove({
        _id : req.params.user_id
    }, function(err, user) {
        if (err)
            res.send(err);

        // get and return all the user after you create another
        User.find(function(err, user) {
            if (err)
                res.send(err)
            res.json(user);
        });
    });
});

module.exports = router;
