const newItem = document.getElementById("newItem");
const folder = document.getElementById("folder");
const dueDate = document.getElementById("dueDate");
const description = document.querySelector("textarea");
const add = document.getElementById("add");
const alerts = document.querySelector(".alerts");
const dueSoon = document.getElementById("dueSoon");
const completed = document.getElementById("allDone");
const navbar = document.getElementById("navbar");
const selectedTask = document.getElementById("selectedTask");



window.onload = newItem.focus();



class newTodo {
    constructor(newItem, folder, dueDate, description = "No description added") {
        this.newItem = newItem,
        this.folder = folder,
        this.dueDate = dueDate,
        this.description = description
    }
    add() {
        return this.newItem, this.folder, this.dueDate, this.description;
    }
}

function addToDoItem() {
    //create <li><input type = "checkbox"><label for="checkbox">item + due date</label></li>
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerText = `${newItem.value} (Due: ${dueDate.value})`;
    li.append(checkbox, label);
    document.querySelector("#dueSoon>ul").appendChild(li);
    checkbox.addEventListener("click", () => {
        if (!checkbox.checked) {
            label.style.textDecoration = "initial";
            label.style.color = "black";
        } else {
            label.style.textDecoration = "line-through";
            label.style.color = "grey";
        }
    })
    //label - expanding details of to-do items:
    label.addEventListener("mouseover", () => {
        label.style.cursor = "pointer";
    })
    label.addEventListener("click", () => {
        if (this.description.value) {
            selectedTaskDetails();
        } else {
            selectedTask.style.display = "none";
        }
    })
}

function selectedTaskDetails() {
    selectedTask.style.display = "block";
    const div = document.createElement("div");
    div.id = "details";
    div.innerText = description.value;
    selectedTask.appendChild(div);
}

function addFolder() {
    //create <li>folder</li> in "My to-do folders" navbar:
    navbar.style.display = "block";
    const div = document.createElement("div");
    div.id = "folder";
    div.innerText = folder.value;
    navbar.appendChild(div);
    navbar.onmouseover = "div.style.cursor: 'pointer'";
}

function addNewItem(e) {
    e.preventDefault();
    addFolder();
    if (description.value) {
        selectedTaskDetails();
    }
    if (new Date() - new Date(dueDate.value) < 8) {
        addToDoItem();
        completed.style.display = "none";
        dueSoon.style.display = "block";
    }
    add.blur();
}

add.addEventListener("click", addNewItem);

