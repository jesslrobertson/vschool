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
    //add a checkbox to each item
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = item.completed;
    checkbox.addEventListener("change", () => crossItOff(item._id, checkbox.checked));
    document.getElementById('todoList').appendChild(checkbox);
    //create and append each item
    const newLi = document.createElement('li');
    const todoImage = document.createElement('img');
    newLi.textContent = item.title;
    //strikethrough finished items
    if (item.completed === true) {
        newLi.style.textDecoration = "line-through";
    }
    //add images if present
    document.getElementById('todoList').appendChild(newLi);
    if (item.hasOwnProperty('imgUrl') === true){
        todoImage.src = item.imgUrl;
        todoImage.style.maxWidth = "100px";
        todoImage.style.maxHeight = "150px";
        todoImage.style.display = "block";
        todoImage.classList.add = "todo-image";
        document.getElementById('todoList').appendChild(todoImage);
    }
    //add a divider after each item
    // const divider = document.createElement('div');
    // divider.classList.add = "divider";
    // document.getElementById('todoList').appendChild(divider);
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

getData();

