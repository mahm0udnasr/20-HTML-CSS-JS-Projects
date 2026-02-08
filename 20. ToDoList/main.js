const inputTodo = document.getElementById("input-todo");
const taskBtn = document.getElementById("task-btn");
const todoList = document.getElementById("todo-list");

taskBtn.addEventListener('click', addTask);

function addTask() {
  if (inputTodo.value === "") {
    console.error("Input task text");
  }
  const li = document.createElement("li");
  li.innerText = inputTodo.value;
  todoList.append(li);
}