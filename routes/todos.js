var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");


router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

router.route('/:todoId')
	.get(helpers.getTodo)
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)


module.exports = router;


// ==========  Below was the in this file but it has been refactored about and connected to a helpers folder

// router.get('/', function(req,res){
// 	db.Todo.find()
// 	.then(function(todos){
// 		res.json(todos);
// 		console.log(todos)
// 	})
// 	.catch(function(err){
// 		res.send(err);
// 	})
// });

// // router.post('/', function(req,res){
// // 	console.log(req.body)
// // })

// router.post('/', function(req, res){
// 	db.Todo.create(req.body)
// 	.then(function(newTodo){
// 		res.status(201).json(newTodo)
// 	})
// 	.catch(function(err){
// 		res.send(err)
// 	})
// });

// router.get('/:todoId',function(req,res){
// 	db.Todo.findById(req.params.todoId)
// 	.then(function(foundTodo){
// 		res.json(foundTodo)
// 	})
// 	.catch(function(err){
// 		res.send(err);
// 	})
// });

// router.put('/:todoId', function(req,res){
// 	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body,{new: true})
// 	.then(function(todo){
// 		res.json(todo)
// 	})
// 	.catch(function(err){
// 		res.send(err)
// 	})
// })

// router.delete('/:todoId', function(req,res){
// 	db.Todo.remove({_id: req.params.todoId})
// 	.then(function(){
// 		res.json({message: "It has been deleted"})
// 	})
// 	.catch(function(err){
// 		res.send(err)
// 	})
// })





