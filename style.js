let forms = document.getElementById("todoForm");
forms.addEventListener("submit", function (event) {
  event.preventDefault();
  var inp = document.getElementById("input").value.trim();
  if (inp !== "") {
    addTask(inp);
  }
});
function addTask(inp) {
  var todos = document.getElementById("todoList");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `
        <span class="task">${inp}</span>
        <input type="checkbox" onclick="toggleChecked(this)">
        <span class="trash-icon trash" onclick="deleteTask(this)">🗑️</span>`;
  todos.appendChild(li);
}

function emptyList() {
  document.getElementById("todoList").innerHTML = "";
}

function toggleChecked(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add("checked");
  } else {
    checkbox.parentElement.classList.remove("checked");
  }
}

function deleteTask(value) {
  value.parentElement.remove();
}
