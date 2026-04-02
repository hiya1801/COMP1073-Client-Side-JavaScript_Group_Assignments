// Select DOM Elements
const taskInput = document.getElementById('taskInput');       // Input box
const addTaskBtn = document.getElementById('addTaskBtn');     // Add button
const taskList = document.getElementById('taskList');         // UL for tasks
const taskCounter = document.getElementById('taskCounter');   // Task counter
const dingSound = document.getElementById('dingSound');       // Ding sound
const deleteSound = document.getElementById('deleteSound');   // Delete sound
const message = document.getElementById('message');           // "Task added!" message

// array to store tasks
let tasks = [];

// function: Update Task Counter
function updateCounter() {
    taskCounter.textContent = `Total Tasks: ${tasks.length}`;
}

// function: Show temporary "Task added!" message
function showMessage() {
    message.classList.remove('hidden');
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
        message.classList.add('hidden');
    }, 1000);
}

// function: Create a New Task
function createTask(taskText) {
    const li = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Task text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';

    // Append elements to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Checkbox Event: Complete Task
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');   // cross out
            taskList.appendChild(li);        // move to bottom
            dingSound.currentTime = 0;
            dingSound.play();                // play ding sound
        } else {
            li.classList.remove('completed'); // uncheck
        }
    });

    // Delete Button Event
    delBtn.addEventListener('click', () => {
        deleteSound.currentTime = 0;
        deleteSound.play();                 // play delete sound
        li.classList.add('deleting');       // Fade out
        setTimeout(() => {
            taskList.removeChild(li);       // remove from list
            tasks = tasks.filter(t => t !== taskText); // remove from array
            updateCounter();                // update counter
        }, 500);
    });

    // save task in array
    tasks.push(taskText);

    // update counter
    updateCounter();

    // show "Task added!" message
    showMessage();
}

// add task button click
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});

// add task on Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});

// Pre-fill demo tasks on page load
const demoTasks = ["Buy groceries", "Complete Assignment 3", "Call Mom", "Exercise 30 min", "Read a book"];
demoTasks.forEach(task => createTask(task));
