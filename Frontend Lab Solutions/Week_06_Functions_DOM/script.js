// Task 15: Functions, Closures, and IIFE
// IIFE (Immediately Invoked Function Expression)
(function() {
    let message = "IIFE ran!"; // message is private to this scope
    console.log('Task 15: ' + message);
})();

// Closure Example: A function that remembers variables from its creating scope
function createCounter() {
    let count = 0;
    return function() { // This inner function is the closure
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log('Closure Counter:', counter()); // 1
console.log('Closure Counter:', counter()); // 2


// Task 16: To-Do List App
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');

    // Add task text
    listItem.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        list.removeChild(listItem);
    };

    // Append button to the list item
    listItem.appendChild(deleteBtn);
    
    // Append the list item to the UL
    list.appendChild(listItem);

    // Clear input
    input.value = '';
}
