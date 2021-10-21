class LS {
	// get and set data at LS
	getData(name) {
		let data;
		if (localStorage.getItem(name) === null) {
			data = [];
		} else {
			data = JSON.parse(localStorage.getItem(name));
		}
		return data;
	}

	setData(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}

	addTask(task) {
		// set data to the LS
		let tasks;
		if (localStorage.getItem('tasks') === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));
		}
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		// log to console
		task.addedToLS();
	}
}