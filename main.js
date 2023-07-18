let toDoItems = []
function ToDo (description) {
  this.description = description
  this.complete = false
}
ToDo.prototype.completeToDo = function(){
  this.complete = !this.complete
}
function buildToDo(todo, index) { 
  let toDoShell = document.createElement('div') 
  toDoShell.className = 'toDoShell' 
  let toDoText = document.createElement('span') 
  toDoText.innerHTML = todo.description 
  toDoText.id = index
  if(todo.complete) toDoText.className = 'completeText'
  toDoShell.appendChild(toDoText)
  toDoText.addEventListener('click', completeToDo)
  return toDoShell
}
function buildToDos(toDos) { 
  return toDos.map(buildToDo)
}
function displayToDos() {
  let toDoContainer = document.querySelector('#toDoContainer')
  toDoContainer.innerHTML = ''
  let result = buildToDos(toDoItems)
  for(let i = 0; i < result.length; i++){
    toDoContainer.appendChild(result[i])
  }
}
function addToDo() {
  let input = document.querySelector('#toDoInput')
  if(input.value !== ''){
    let todo = new ToDo(input.value) 
    toDoItems.push(todo)
    input.value = ''
    displayToDos()
  }
}
  let button = document.querySelector('#addButton')
  button.addEventListener('click', addToDo)
function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo()
  displayToDos()
}
displayToDos()
