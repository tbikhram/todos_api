var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// this will use the simply call not using a callback function
mongoose.Promise = Promise;


module.exports.Todo = require("./todo");



