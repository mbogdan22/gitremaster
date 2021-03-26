console.log("To do app homework")

const listToDo = document.querySelector(".list"); 

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

function handleFetchResponse(response) { 
    return response.json();
}
function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(handleFetchResponse)
    .then(renderList)
    .catch(()=>{});
}

document.getElementById("add-task-button").addEventListener("click",newTask);

function newTask(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(handleFetchResponse)
    .then(updateList)
    .then(updateHost)
}

function updateList(response){
    let listData = response;
    const input = document.getElementById("todo-input");
    if(input.value){
        let newToDo = {
            checked:false,
            item: input.value
            }
        listData.todo.push(newToDo);
        input.value="";
    } else {
        window.alert("Type new Task");
        }
    return listData;
}

function updateHost(newListData) {
    fetch('https://simple-json-server-scit.herokuapp.com/todo/mbogdan', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(newListData)
    }).then(getData);
}

function renderList(response){
    listToDo.innerHTML="";
    for (element of response.todo) {
        renderTask(element,response.todo.indexOf(element));
    } 
}

function renderTask(element,index){

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
    listToDo
.prepend(toDoDiv);
}

function changeStatus(){
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(handleFetchResponse)
    .then(updateTask)
}

function updateTask(response){
    let listData = response;
    let box = document.querySelectorAll(":checked");
    for (const element of listData.todo) {
        element.checked = false;
    }
    for (const element of box) {
        listData.todo[element.parentNode.id].checked = true;
    }
    updateHost(listData);
}

function deleteTask(){
    this.parentNode.remove();
    fetch("https://simple-json-server-scit.herokuapp.com/todo/mbogdan")
    .then(handleFetchResponse)
    .then(removeTask)
}

function removeTask(response){
    let listData = response;
    let newListDataArray =[];
    let remainingTasksList = document.querySelectorAll(".to-do-division");
    for (const element of remainingTasksList) {
        newListDataArray.push(listData.todo[element.id]);
        }
    listData.todo = newListDataArray.reverse();
    updateHost(listData);
}