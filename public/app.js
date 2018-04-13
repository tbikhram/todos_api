$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)



// this is for when enter is clicked 13 is the event that is has to = to
	$('#todoInput').keypress(function(event){
		if(event.which == 13){
			createTodo();
		}
	}); 

// this will check when li is tapped or pressed for toggle the status (event bubbling)
// this will update the li
	$('.list').on('click', 'li', function(){
		updateTodo($(this))
	});

//this is for the click on the X fromt the <span> to delete the item in the list 
	$('.list').on('click', 'span', function(e){
		e.stopPropagation();
		removeTodo($(this).parent());
	})
});




function addTodos(todos){
//ADD todos to page here
	// 1.adding todos to the page that were created from postman request (post, put)
	todos.forEach(function(todo){
		addTodo(todo);



	//   var newTodo = $('<li class="task">' + todo.name + '</li>');
	//   // if item on list is completed this will create the completed slash
	//   if(todo.completed){
	//   	// this is the class that the done sytling in linked to 
	//   	newTodo.addClass("done");
	//   }
	//   $('.list').append(newTodo);

	});
}

// refactor with a function that used to be in the addtodos


function addTodo(todo){
	
	var newTodo = $('<li class="task">' + todo.name + ' <span>X</span> </li>');
	// lineked to the delete
	newTodo.data('id', todo._id);
	  // if item on list is completed this will create the completed slash

	  //this will update the todo to be completed when clicked on 
	  newTodo.data('completed', todo.completed)
	  if(todo.completed){
	  	// this is the class that the done sytling in linked to 
	  	newTodo.addClass("done");
	  }
	  $('.list').append(newTodo);
}




// refactor with a function that used to be in the addtodos



function createTodo(){
	// send a post tp create new todo
	var usrInput = $('#todoInput').val();
	// console.log(usrInput);
	$.post('/api/todos', {name: usrInput})
	.then(function(newTodo){
		$('#todoInput').val("");
		addTodo(newTodo)
	})
	.catch(function(err){
		console.log(err)
	})
}


function removeTodo(todo){
		var clickedId = todo.data('id');
		var deleteUrl = 'api/todos/' + clickedId;

		// this will only remove the content but when page is reloaded it will have the content 
		// that was created origninally 

		// $(this).parent().remove();
		$.ajax({
			method: "DELETE",
			url: deleteUrl
		})
		.then(function(data){
			todo.remove();
		})
		.catch(function(err){
			console.log(err)
		})
}
// this will check it the item in the list is done 
function updateTodo(todo){
	var updateUrl = 'api/todos/' + todo.data('id');
	var isDone = !todo.data('completed');
	var updateData = {completed: isDone}
	$.ajax({
		method: 'PUT',
		url : updateUrl,
		data : updateData

	})
	.then(function(updatedTodo){
		todo.toggleClass("done");
		todo.data('completed', isDone);
	})
  
}



























