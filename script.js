function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Tarefa Vazia");
        return;
    }

    let taskList = document.getElementById("taskList");
    let item = document.createElement("li");
    item.innerHTML = `
        <span onclick="toggleTask(this)"> ${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    taskList.appendChild(item);
    taskInput.value = "";
    saveTasks();
}

function toggleTask(element){
    element.parentElement.classList.toggle("completed")
}

function deleteTask(button){
    button.parentElement.remove();
}

function saveTask(){
    let tasks = [];

    document.querySelectorAll("#taskList li").forEach(task => {
        task.push({
            text:task.innerText.replace("X", "").trim(),
            status: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}