// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

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