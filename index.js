console.log("To do app homework")

const listToDo = document.querySelector(".list")

fetch('https://simple-json-server-scit.herokuapp.com/todo', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        id:"mbogdan",
        todo:[]
    })
}).then(getData);

function  fetchResponse(response) {
    return response.json();
}

function getData() {
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(getResponse)
    .then(renderToDoList)
    .catch(()=>{});
}

document.getElementById("add-task-button").addEventListener("click", addToDo);

function addToDo(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(getRespons)
    .then(renderToDoList)
    .then(updateHost)
}

function updateList(response) {
    let listData = response
    const input = document.getElementById("todo-input")
    if(input.value){
        let createToDo = {
            cheked: false, 
            item: input.value
        }
        listData.todo.push(createToDo);
        input.value ="";
    } else {
        window.alert("Input another task!");
    }
    return listData
}

function updateHost(newListData) {
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan", {
    method: "PUT" ,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newListData)
}).then(getData);
}

function showList(response){
    toDoListDiv.innerHTML = "";
    for (element of response.todo) {
        renderTask(elemnt,response.todo.indexOf(element));
    }
    
}

function renderTask(element,index) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do-division");
    toDoDiv.setAttribute("id",index);

    const toDoCheckBox = document.createElement("input");
    toDoCheckBox.setAttribute("type","checkbox");

    toDoCheckBox.classList.add("to-do-checkbox");
    
    toDoCheckBox.addEventListener("change",changeStatus);

    const toDoName = document.createElement("h3");
    toDoName.classList.add("to-do-name");

    const toDoDelete = document.createElement("button");
    toDoDelete.classList.add("delete-button");
    toDoDelete.addEventListener("click",deleteTask);
    const toDoDeleteImg = document.createElement("img");
    toDoDeleteImg.setAttribute("src","trash.svg");
    toDoDelete.appendChild(toDoDeleteImg);

    toDoName.innerText = element.item;
    toDoCheckBox.checked = element.checked;
    toDoCheckBox.name = element.item;

    toDoDiv.appendChild(toDoCheckBox);
    toDoDiv.appendChild(toDoName);
    toDoDiv.appendChild(toDoDelete);
    toDoListDiv.prepend(toDoDiv);
}

function updateStatus() {
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(fetchResponse)
    .then(updateTasks)
}

function updateTasks(response){
    let payload = response;
    let box = document.querySelectorAll(":checked");
    for (const element of payload.todo) {
        element.checked = false;
    }
    for (const element of box) {
        payload.todo[element.parentNode.id].checked = true;
    }
    updateServer(payload);
}

function eraseTask(response) {
    this.parentNode.remove();
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(fetchResponse)
    .then(removeTask)
}

function removeTask(response){
    let payload = response;
    let newPayloadArray =[];
    let remainingTasksList = document.querySelectorAll(".to-do-division");
    for (const element of remainingTasksList) {
        newPayloadArray.push(payload.todo[element.id]);
        }
    payload.todo = newPayloadArray.reverse();
    updateServer(payload);
}