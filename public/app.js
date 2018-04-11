$(document).ready(function(){
	$.getJSON("/api/todos")
	.then(addTodos)



// this is for when enter is clicked 13 is the event that is has to = to
	$('#todoInput').keypress(function(event){
		if(event.which == 13){
			createTodo();
		}
	}); 
//this is for the click on the X fromt the <span> to delete the item in the list 
	$('.list').on('click', 'span', function(){
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
		});
		.catch(function(err){
			console.log(err)
		})
}

