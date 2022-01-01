class TaskList {
    constructor() {
        this.tasks = [];
        this.taskInput = document.querySelector('#createToDo');
        this.ul = document.querySelector('ul');
        this.removeIcon = "";
        this.counter = new TaskCounter();
        this.clearing = document.querySelector('.clearing');
    }

// Getters

getTaskInput() {
     return this.taskInput;
 }   

getClearBtn() {
    return this.clearing;
}

//  Add task methods

createLi(task) {
    const li = document.createElement('li');
    const lisInput = '<input type="checkbox" class="circle"></input>';
    const lisCross = '<span class="cross"><img src="images/icon-cross.svg" alt="cross"></span>';
    const p = `<p>${task}</p>`
    this.ul.appendChild(li);
    li.innerHTML = `${lisInput}${p}${lisCross}`;
    li.classList.add('task');
    li.setAttribute('draggable', true);

}

renderList() {
    this.ul.innerHTML = '';
    this.tasks.forEach((task) => this.createLi(task));
    this.removeEvent();
    localStorage.setItem('Tasks', JSON.stringify(this.tasks));
    this.counter.refreshCounter();
    sortList.rememberCheckboxes();
    sortList.checkChecked();
    

}

saveTask() {
    if(this.taskInput.value !== '') {
        this.createLi(this.taskInput.value)
        this.tasks.push(this.taskInput.value);
        this.taskInput.value = '';
    }

}

addTask() {
    this.saveTask();
    this.renderList();
    this.counter.refreshCounter();
}

rememberTasksList() {
    if(localStorage.getItem('Tasks')) {
        this.tasks = JSON.parse(localStorage.Tasks);
        this.addTask();
    }
}

// Remove task methods
removeThatTask(event) {
    for(let i = 0; i < sortList.checkboxes.length; i++) {
        localStorage.removeItem(sortList.checkboxes[i].getAttribute('data'));
    }
    for(let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i] === event.currentTarget.parentNode.textContent) {
         this.tasks.splice(i, 1)
        }
    }
    this.renderList();
}

removeEvent() {
    const removeIcons = [...document.querySelectorAll('.cross')];
    removeIcons.forEach(icon => icon.addEventListener("click", (icon) => {this.removeThatTask(icon)}))
}

clearCompleted() {
    const temp = sortList.loadActive();
    const newTasks = [];
    for(let i = 0; i < temp.length; i++) {
        for(let j = 0; j < this.tasks.length; j++) {
          if(temp[i].textContent === this.tasks[j]) {
              newTasks.push(this.tasks[j])
          }
        }
    }
    this.tasks = newTasks;
    for(let i = 0; i < sortList.checkboxes.length; i++) {
        localStorage.removeItem(sortList.checkboxes[i].getAttribute('data'));
    }
    this.renderList();
    console.log('działam');
    window.location.reload(true);
}
}
