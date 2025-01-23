// Array to store todos
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editIndex = null;

// Select elements
const todoInput = document.getElementById('todoInput');
const editInput = document.getElementById('editInput');

// Function to render todos
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <input type="checkbox" ${todo.completed ? 'checked' : ''}
                    onchange="toggleTodo(${index})">
                <button class="edit-btn" onclick="editTodoModal(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    const text = todoInput.value.trim();

    if (text !== "") {
        todos.push({ text, completed: false });
        saveTodos();
        renderTodos();
        todoInput.value = '';
    }
}

// Add a todo when Enter is pressed
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Function to toggle a todo's completed state
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

// Function to save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to open the modal for editing a todo with animation
function editTodoModal(index) {
    const modal = document.getElementById('editModal');

    editIndex = index;
    editInput.value = todos[index].text;

    modal.style.display = 'flex'; // Make modal visible
    setTimeout(() => {
        modal.classList.remove('hide');
        modal.classList.add('show'); // Trigger animation
    }, 0); // Allow the browser to process the display change
}

// Save changes when Enter is pressed in the edit modal
editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        saveEdit();
    }
});

// Function to close the modal with animation
function closeModal() {
    const modal = document.getElementById('editModal');

    modal.classList.remove('show');
    modal.classList.add('hide');

    // Wait for the animation to finish before hiding
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match the CSS transition duration
}

// Function to save the edited todo
function saveEdit() {
    const newText = editInput.value.trim();

    if (newText !== "") {
        todos[editIndex].text = newText;
        saveTodos();
        renderTodos();
        closeModal();
    }
}

// Event listener to close the modal when clicking outside it
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Initialize the app
document.getElementById('addTodoBtn').addEventListener('click', addTodo);
renderTodos();
