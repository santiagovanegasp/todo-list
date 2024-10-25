
// Elementos del DOM
const todoInput = document.querySelector('#todo-input');
const addTodoButton = document.querySelector('#add-todo-button');
const todoList = document.querySelector('#todo-list');
const body = document.querySelector('body');





// Cargar tareas al cargar la página
document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);  // without () to run the function only the event has happened 

// Evento para añadir una nueva tarea
addTodoButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim(); // Obtener texto de la tarea y eliminar espacios
    if (taskText === "") return; // Evitar agregar tareas vacías

    addTask(taskText);             // Añadir tarea al DOM
    saveTaskToLocalStorage(taskText); // Guardar tarea en localStorage
    todoInput.value = '';             // Limpiar el campo de entrada
});




// Función para añadir una tarea al DOM
function addTask(taskText) {
    // Crear un nuevo div para la tarea
    const newDiv = document.createElement('div');
    newDiv.classList.add('divtask');

    // Crear párrafo y añadir texto de la tarea
    const newParagraph = document.createElement('p');
    newParagraph.textContent = taskText;
    newDiv.appendChild(newParagraph);

    // Crear botón de eliminar
    const newBtnDelete = document.createElement('button');
    newBtnDelete.textContent = '-';
    newDiv.classList.add('divtask');
    newDiv.appendChild(newBtnDelete);
    newBtnDelete.classList.add('btndeletecss')

    // Añadir la tarea al contenedor de tareas en el div todolist
    todoList.appendChild(newDiv);

    // Evento para eliminar tarea
    newBtnDelete.addEventListener('click', function() {
        newDiv.remove();
        deleteTaskFromLocalStorage(taskText); // Eliminar tarea de localStorage
    });
}

// Función para guardar una tarea en localStorage
function saveTaskToLocalStorage(taskText) {
    // Obtener las tareas del localStorage o crear un array vacío si no existen
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText); // Añadir la nueva tarea
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar el array actualizado en localStorage
}

// Función para eliminar una tarea de localStorage
function deleteTaskFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText); // Filtrar la tarea eliminada
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Actualizar localStorage
}

// Función para cargar tareas desde localStorage al iniciar la página
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => addTask(taskText)); // Añadir cada tarea guardada al DOM
}











