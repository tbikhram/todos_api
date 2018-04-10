var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function(req,res){
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
		console.log(todos)
	})
	.catch(function(err){
		res.send(err);
	})
});

// router.post('/', function(req,res){
// 	console.log(req.body)
// })

router.post('/', function(req, res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo)
	})
	.catch(function(err){
		res.send(err)
	})
});

// router.get('/:todoId',function(req,res){
// 	db.Todo.findById(req.parmas.todoId)
// 	.then(function(foundTodo){
// 		res.json(foundTodo)
// 	})
// 	.catch(function(err){
// 		res.send(err);
// 	})
// });

module.exports = router;


