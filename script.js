const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask(){

    const text = taskInput.value.trim();

    if(text==="") return;

    tasks.push({
        text:text,
        completed:false
    });

    taskInput.value="";

    saveTasks();

}

function renderTasks(){

    taskList.innerHTML="";

    tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML=`

        <span>${task.text}</span>

        <div class="actions">

        <button onclick="toggleTask(${index})">✔</button>

        <button onclick="deleteTask(${index})">🗑</button>

        </div>

        `;

        taskList.appendChild(li);

    });

}

function toggleTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

    renderTasks();

}
