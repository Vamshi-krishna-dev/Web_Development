const input= document.getElementById("taskInput");
const addBtn= document.getElementById("addBtn");
const taskList= document.getElementById("tasklist");

//click add button to add task
addBtn.addEventListener("click", addTask);

//press enter to add task
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task= input.value.trim();

    if (task == "") {
        alert("Please enter a task.");
        return;
   }

   const li= document.createElement("li");
   const span= document.createElement("span");

   span.innerText = task;
   span.classList.add("task-text");
   span.addEventListener("click", function() {
    span.classList.toggle("completed");
   });

   const deleteBtn= document.createElement("button");
    deleteBtn.innerText= "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value= "";
    input.focus(); //cursor comes back to input box
}   

