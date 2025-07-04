const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = \`\${taskText}
    <div class="actions">
      <button onclick="toggleComplete(this)">✔️</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>\`;
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}

function toggleComplete(btn) {
  const li = btn.closest("li");
  li.classList.toggle("completed");
}