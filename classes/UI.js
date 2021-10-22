class UI {
	// help function to add DOM element
	addUIelement(elementname, classname = '', textcontent = '', atributes = {}) {
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		// if we want to use atributes, for example an atribute is href with value #
		if (Object.keys(atributes).length > 0) {
			for (let key in atributes) {
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
	}

	addTask(task) {
		// create list item
		const li = this.addUIelement('li', 'collection-item', task.name);
		// create link
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		// add link to list item
		li.appendChild(link);
		// find list to add the list item
		const list = document.querySelector('ul');
		list.appendChild(li);
		// find input to clear this value
		const input = document.querySelector('#task');
		input.value = '';
		// log to condole
		task.addedToUI();
	}

	delTask(task) {
		const delIcon = task.nextSibling;
		if (delIcon.textContent == "X") {
			if (confirm('Do you want to delete this task?')) {
				task.parentElement.remove();
			}
		}
	}

	delTasks(tasks) {
		while (tasks.firstChild) {
			tasks.removeChild(tasks.firstChild);
		}
	}
}