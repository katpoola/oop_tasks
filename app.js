// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// taskList X click event
const taskList = document.querySelector('ul');
taskList.addEventListener('click', delTask);

// clear button event
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', delTasks);

//form submit event
form.addEventListener('submit', addTask);

function addTask(e) {
	// new object Task with input value
	const task = new Task(taskInput.value);
	// add task value to the visual by UI
	ui.addTask(task);
	// add task value to the LS
	ls.addTask(task);
	e.preventDefault();
}

function delTask(e) {
	// get task name
	let task = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.delTask(task);
	// change task element content before deleting from LS
	task = task.textContent;
	// delete task value from LS by LS object 
	ls.delTask(task);
}

function delTasks(e) {
	// delete all tasks from UI
	let tasks = document.querySelector('ul');
	ui.delTasks(tasks);
	// delete tasks from LS
	ls.delTasks();
}