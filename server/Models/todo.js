// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  parent: Boolean,
  location: String,
  isDue: Boolean,
  dueDate: Date,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Todo = mongoose.model('Todo', todoSchema);

// make this available to our users in our Node applications
module.exports = Todo;
