// Array para almacenar las tareas pendientes
let toDoItems = [];

// Clase que representa una tarea pendiente
class ToDo {
  constructor(description) {
    this.description = description; // La descripción de la tarea
    this.complete = false; // Inicialmente no está completada
  }

  // Método para cambiar el estado de completado de una tarea
  completeToDo() {
    this.complete = !this.complete; // Invierte el estado de completado
  }
}

// Función que crea la representación visual de una tarea
function buildToDoElement(todo, index) {
  // Crea un contenedor div para la tarea
  let toDoElement = document.createElement('div');
  toDoElement.className = 'toDoElement'; // Aplica una clase CSS
  
  // Crea un elemento de texto para mostrar la descripción de la tarea
  let toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description; // Asigna la descripción
  toDoText.id = index; // Asigna un ID basado en el índice
  
  // Si la tarea está completada, aplica una clase de estilo
  if (todo.complete) {
    toDoText.className = 'completeText';
  }
  
  // Agrega el elemento de texto al contenedor
  toDoElement.appendChild(toDoText);
  
  // Agrega un evento de clic para marcar la tarea como completa
  toDoText.addEventListener('click', completeToDo);
  
  // Devuelve la representación visual de la tarea
  return toDoElement;
}

// Función que crea la representación visual de todas las tareas
function buildToDoList(toDos) {
  // Mapea cada tarea a su representación visual
  return toDos.map(buildToDoElement);
}

// Función que actualiza la interfaz de usuario mostrando las tareas
function displayToDos() {
  let toDoContainer = document.querySelector('#toDoContainer'); // Obtiene el contenedor
  
  // Borra cualquier contenido previo en el contenedor
  toDoContainer.innerHTML = '';
  
  // Construye la representación visual de todas las tareas
  let result = buildToDoList(toDoItems);
  
  // Agrega cada representación visual al contenedor
  result.forEach((element) => {
    toDoContainer.appendChild(element);
  });
}

// Función para agregar una nueva tarea a la lista
function addNewToDo() {
  let input = document.querySelector('#toDoInput'); // Obtiene el campo de entrada de texto
  
  // Si el campo de entrada no está vacío, crea una nueva tarea
  if (input.value !== '') {
    let newTodo = new ToDo(input.value); // Crea una nueva tarea con la descripción ingresada
    toDoItems.push(newTodo); // Agrega la tarea al array
    input.value = ''; // Limpia el campo de entrada
    displayToDos(); // Actualiza la visualización de las tareas
  }
}

// Evento de clic en el botón para agregar una nueva tarea
let addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addNewToDo);

// Función para marcar/desmarcar una tarea como completa
function toggleComplete(event) {
  const index = event.target.id; // Obtiene el índice de la tarea desde el evento
  toDoItems[index].completeToDo(); // Cambia el estado de completado de la tarea
  displayToDos(); // Actualiza la visualización de las tareas
}

// Muestra inicialmente las tareas pendientes
displayToDos();
