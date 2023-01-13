//getting the necessary elements

//this for that ul
const toDoList = document.getElementById("toDoList");

//this for that part with the typing and buttons
const task = document.getElementById("task");
const add = document.getElementById("add");

add.addEventListener("click", () => {
    if(task.value === ""){
        alert("illegal bruh");
    }
    else{
        addTask(task.value);
        task.value = "";
    }
});

document.addEventListener("keyup",function(event){
    if(event.code === 'Enter'){
        if(task.value === ""){
            alert("illegal bruh");
        }
        else{
            addTask(task.value);
            task.value = "";
        }
    }
})

//for adding them tasks to the list
function addTask(taskToBeAdded){
    //creating a list item
    const listItem = document.createElement("li");

    //creating container for the checkbox/task/button
    const listContainer = document.createElement("div");

    //containers going into the containers
    const checkboxContainer = document.createElement("div");
    checkboxContainer.setAttribute("class", "checkItOff");
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "words");
    const removeContainer = document.createElement("div");
    removeContainer.setAttribute("class", "removeBtn");

    ///creating the shit going into the container inside the other containers
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const task = document.createElement("p");
    task.innerText = taskToBeAdded;
    const removeButton = document.createElement("button");
    removeButton.innerText = "x";

    //adding the kiddos to the containers
    checkboxContainer.appendChild(checkbox);
    taskContainer.appendChild(task);
    removeContainer.appendChild(removeButton);

    //placing those containers into one container
    listContainer.appendChild(checkboxContainer);
    listContainer.appendChild(taskContainer);
    listContainer.appendChild(removeContainer);

    //putting that container into the list
    listItem.appendChild(listContainer);

    //putting it into the DOM or smthn idk i hate js
    toDoList.appendChild(listItem);

    //checkbox function time 
    checkbox.addEventListener("click", ()=>{
        if(checkbox.checked == false){
            task.style.textDecoration = "none";
        }
        else{

            task.style.textDecoration = "line-through";
        }
    });

    //remove button function
    removeButton.addEventListener("click", ()=>{
        toDoList.removeChild(listItem);
    });

    
}


