var todos = ["Buy New Turtle"]

var input = prompt("What would you like to do")

while(input !== "quit"){
	//handle input
	if (input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	//ask again for new input
	}
	input = prompt("What would you like to do");
}
console.log("Okay, u quit the app");

function listTodos(){
	//list all todos
	console.log("********")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("********")
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	//add to todo's array
	todos.push(newTodo);
	console.log("Added todo");
}
function deleteTodo(){
	//ask for index of todo to be deleted.
	var index = prompt("Enter index of todo to delete");
	//delete that todo.
	//splice() cut and remove
	todos.splice(index,1);	
	console.log("Deleted todo");
	}

