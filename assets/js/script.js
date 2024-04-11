// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

function formSubmit(){
    const taskArray = JSON.parse(localStorage.getItem('strings')) || [];

    const taskObject = {
        objectTitle: title.value,
        objectDate: date.value,
        objectDescription: description.value.trim()
    }

    taskArray.push(taskObject)
    localStorage.setItem('tasks', JSON.stringify(taskArray))
    console.log(taskArray)

}


function generateCard(){

}




const title = document.getElementById('inputTitle')
const date = document.getElementById('inputDate')
const description = document.getElementById('inputDescription')
const formButton = document.getElementById('formButton')
formButton.addEventListener('click', formSubmit)






























// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
