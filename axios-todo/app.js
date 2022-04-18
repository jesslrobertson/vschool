const form = document["submitTodo"];

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const newTodo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/jessr/todo", newTodo)
    .then(res => {
        console.log(res)
        createListItem(res.data)
    })
    .catch(err => console.log(err))
    form.reset();
})

function getData(){
    axios.get("https://api.vschool.io/jessr/todo/").then(response => {
    console.log(response.data);
    displayList(response.data);
    })
}

function displayList(data) {
    clearList();
    for(let i = 0; i < data.length; i++){
        createListItem(data[i]);
    }
}

function createListItem(item){
    //create and append each item
    const title = document.createElement('li');
    title.textContent = item.title;
    document.getElementById('todoList').appendChild(title);
    //create and add title editor
    const editTitle = document.createElement('input');
    editTitle.type = "text";
    editTitle.classList.add('editInput', 'title', 'input');
    editTitle.value = item.title;
    editTitle.classList.add('title', 'editInput');
    editTitle.style.display = 'none';
    document.getElementById('todoList').appendChild(editTitle);
    //strikethrough finished items
    if (item.completed === true) {
        title.style.textDecoration = "line-through";
    }
    //add images if present
    const todoImage = document.createElement('img');
    const editImage = document.createElement('input');
    if (item.hasOwnProperty('imgUrl') === true){
        todoImage.src = item.imgUrl;
        todoImage.style.maxWidth = "150px";
        todoImage.style.maxHeight = "200px";
        todoImage.style.display = "block";
        todoImage.classList.add = "todo-image";
        document.getElementById('todoList').appendChild(todoImage);
        //add image source editor
        editImage.type = 'text';
        editImage.classList.add('editInput', 'image', 'input');
        editImage.value = item.imgUrl;
        editImage.style.display = 'none';
        editImage.placeholder = "Image URL";
        document.getElementById('todoList').appendChild(editImage);
    }
    //add a checkbox to each item
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => crossItOff(item._id, checkbox.checked));
    document.getElementById('todoList').appendChild(checkbox);
    //add delete button for each item
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => deleteItem(item._id));
    document.getElementById('todoList').appendChild(deleteButton);
    //add edit button
    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.classList.add('edit');
    editButton.addEventListener("click", () => editItem(item, todoImage, saveButton, editTitle, editButton, title, editImage));
    document.getElementById('todoList').appendChild(editButton);
    //add save button
    const saveButton = document.createElement('button');
    saveButton.innerText = "Save";
    saveButton.classList.add('save');
    saveButton.addEventListener("click", () => saveItem(item, editTitle, title, editImage, todoImage, editButton, saveButton));
    saveButton.style.display = "none";
    document.getElementById('todoList').appendChild(saveButton);
    // add a divider after each item
    const divider = document.createElement('div');
    divider.classList.add = "divider";
    document.getElementById('todoList').appendChild(divider);
}
function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

checkboxes = document.getElementsByClassName("checkbox");

function crossItOff(itemId, status){
    console.log(itemId, status)
    axios.put("https://api.vschool.io/jessr/todo/" + itemId, {completed: status})
    .then(() => getData())
    .catch(err => console.log(err));
}

function deleteItem(itemId){
    console.log(itemId);
    axios.delete("https://api.vschool.io/jessr/todo/" + itemId)
    .then(() =>getData())
    .catch(err => console.log(err));

}

function editItem (item, todoImage, saveButton, editTitle, editButton, title, editImage ){
    saveButton.style.display = 'inline';
    editTitle.style.display = 'block';
    editButton.style.display = 'none';
    title.style.display = 'none';
    editTitle.value = item.title;
    todoImage.style.display = 'none';
    editImage.style.display = 'block';
}

function saveItem(item, editTitle, title, editImage, todoImage, editButton, saveButton){
    newTitle = editTitle.value;
    todoImage.src = editImage.value;
    axios.put("https://api.vschool.io/jessr/todo/" + item._id, { title: newTitle,
    imgUrl: todoImage.src })
    .then(() => getData())
    .catch(err => console.log(err));
    title.style.display = 'block';
    todoImage.style.display = 'block';
    editButton.style.display = 'inline';
    saveButton.style.display = 'none';
    editButton.style.display = 'inline';
    editImage.style.display = 'none';
}

getData();

