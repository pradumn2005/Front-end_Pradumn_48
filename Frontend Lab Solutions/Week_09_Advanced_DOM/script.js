// Task 22: Feature-Rich To-Do List (Functions defined in HTML for simplicity)
document.getElementById('add-task-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText === "") return;

    const list = document.getElementById('todo-list');
    const newId = list.children.length + 1;

    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', newId);
    listItem.innerHTML = 
        <span></span>
        <div class="actions">
            <input type="checkbox" onclick="toggleComplete(this)">
            <button onclick="moveItemUp(this)">↑</button>
            <button onclick="moveItemDown(this)">↓</button>
            <button onclick="deleteItem(this)">Delete</button>
        </div>
    ;
    list.appendChild(listItem);
    input.value = '';
});

function deleteItem(btn) {
    btn.closest('li').remove();
}

function toggleComplete(checkbox) {
    const listItem = checkbox.closest('li');
    listItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function moveItemUp(btn) {
    const listItem = btn.closest('li');
    const prevItem = listItem.previousElementSibling;
    if (prevItem) {
        listItem.parentNode.insertBefore(listItem, prevItem);
    }
}

function moveItemDown(btn) {
    const listItem = btn.closest('li');
    const nextItem = listItem.nextElementSibling;
    if (nextItem) {
        listItem.parentNode.insertBefore(nextItem, listItem);
    }
}

// Task 23: Generate Chessboard
function generateChessboard() {
    const board = document.getElementById('chessboard');
    const size = 8;
    board.style.width = (size * 50) + 'px'; // 50px per cell

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('square');
            // Apply CSS dynamically based on position (i+j is even or odd)
            if ((i + j) % 2 === 0) {
                cell.style.backgroundColor = '#f0d9b5'; // Light color
            } else {
                cell.style.backgroundColor = '#b58863'; // Dark color
            }
            board.appendChild(cell);
        }
    }
}

document.addEventListener('DOMContentLoaded', generateChessboard);
