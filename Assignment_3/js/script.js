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
