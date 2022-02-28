const listItems = document.getElementById("list");
const form = document["addItem"];

form.addEventListener("submit", addNewListItem);

function addNewListItem (event) {
    event.preventDefault();
    
    const li = document.createElement('li');
    const newItem = document.createElement('div');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const itemInputValue = form.title.value;
    const editInputBox = document.createElement ('input');
    newItem.textContent = itemInputValue;

    editButton.textContent = "edit";
    //arrow function stops this from being called immediately
    //arguments must be in the exact same order in the call as they are in the definition
    editButton.addEventListener("click", () => editListItem(event, newItem, editInputBox, editButton, saveButton));
    
    removeButton.textContent = "X";
    removeButton.addEventListener("click", (event) => li.remove());
    editButton.style.margin = "2px";
    removeButton.style.margin = "2px";
    //adding all necessary items right away, but hiding and showing them as needed
    const saveButton = document.createElement('button');
    saveButton.addEventListener("click", () => saveEditedItem (event, newItem, editInputBox, saveButton, editButton)); 
    saveButton.textContent = 'save';
    saveButton.style.display = 'none';
    editInputBox.style.display = 'none';
    
    listItems.append(li);
    li.append(newItem);
    li.append(editInputBox);
    li.append(editButton);
    li.append(saveButton);
    li.append(removeButton);
    form.title.value = "";
}

//this function gets called, and is passed all this information when called. Argument names are independent from the variable names being passed to it, but are identical here for clarity.
function saveEditedItem(event, newItem, editInputBox, saveButton, editButton) {
    newItem.textContent = editInputBox.value;
    editInputBox.style.display = "none";
    saveButton.style.display = "none";
    editButton.style.display = "initial";
    newItem.style.display = "block";
}

function editListItem(event, newItem, editInputBox, editButton, saveButton) {
    editButton.style.display = "none";
    editInputBox.style.display = "block";
    saveButton.style.display = "inline";
    newItem.style.display = "none";
    editInputBox.value = newItem.textContent;
}



