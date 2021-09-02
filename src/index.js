const newItem = document.getElementById("newItem");
const dueDate = document.getElementById("dueDate");
const add = document.getElementById("add");
const alerts = document.querySelector(".alerts");
const dueSoon = document.getElementById("dueSoon");
const completed = document.getElementById("allDone");

window.onload = newItem.focus();

function addToDoItem() {
    //create <div><input type = "checkbox"><label for="checkbox">item + due date</label></div>
    const div = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerText = `${newItem.value} (Due: ${dueDate.value})`;

    const remove = document.createElement("img");
    remove.src = "./src/delete.svg";
    remove.title = "Delete item";
    remove.height = 23;

    const edit = document.createElement("img");
    edit.src = "./src/edit.png";
    edit.title = "Edit item";
    edit.height = 23;

    div.append(checkbox, label, edit, remove);
    dueSoon.appendChild(div);

    //Event changes according to checkbox checked status:
    checkbox.addEventListener("click", () => {
        if (!checkbox.checked) {
            label.style.textDecoration = "initial";
            label.style.color = "black";
        } else {
            label.style.textDecoration = "line-through";
            label.style.color = "grey";
        }
    })

    //Event changes for "remove":
    remove.addEventListener("mouseover", () => remove.style.cursor = "pointer");
    remove.addEventListener("click", () => {
        remove.parentNode.parentNode.removeChild(remove.parentNode);
        if (!document.querySelector("#dueSoon>div")) {
            completed.style.display = "block";
            dueSoon.style.display = "none";
        }
    });

    //Event changes for "edit":
    edit.addEventListener("mouseover", () => edit.style.cursor = "pointer");
    edit.addEventListener("click", () => {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = label.innerText;
        label.style.display = "none";
        edit.parentNode.insertBefore(editInput, edit);
        editInput.focus();
        editInput.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                label.style.display = "inline";
                label.innerText = editInput.value;
                edit.parentNode.removeChild(editInput);
            }
        })
    });
}

function addNewItem(e) {
    e.preventDefault();
    addToDoItem();
    completed.style.display = "none";
    dueSoon.style.display = "block";
    add.blur();
    newItem.focus();
}

add.addEventListener("click", addNewItem);

/*
Acknowledgements:
Kiranshastry (https://www.flaticon.com/authors/kiranshastry) for "delete.svg" image,
Kiranshastry (https://icons8.com/icons/authors/SYgaDvCu3ALR/kiranshastry) for "edit.png" image.
*/