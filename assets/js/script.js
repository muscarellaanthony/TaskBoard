// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


function formSubmit(){
    const taskArray = JSON.parse(localStorage.getItem('strings')) || [];

    const taskObject = {
        //add generate task id function
        objectTitle: title.value,
        objectDate: date.value,
        objectDescription: description.value.trim()
    }

    taskArray.push(taskObject)
    localStorage.setItem('tasks', JSON.stringify(taskArray))
    console.log(taskArray)

    let taskCard = createTaskCard(taskObject)
    // taskCard.setAttribute('draggable','true')
    // taskCard.setAttribute('ondragstart','drag(event)')
    $('#todo-cards').append(taskCard);
    $('.draggable').draggable({
        opacity: .7,
        zIndex: 1000,
    })
}


// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log(task)
    const taskCard = document.createElement('div')
    taskCard.style.zIndex=1000;
    taskCard.classList.add('card', 'project-card', 'draggable', 'my-3')
    //   .attr('data-project-id', task.id);

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header', 'h4')
    console.log(task.objectTitle)
    const headerText = document.createTextNode(task.objectTitle);
    cardHeader.appendChild(headerText)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body');

    const cardDescription = document.createElement('p')
    cardDescription.classList.add('card-text')
    const descriptionText = document.createTextNode(task.objectDescription)
    cardDescription.appendChild(descriptionText)

    const cardDueDate = document.createElement('p')
    cardDueDate.classList.add('card-text')
    const dateText = document.createTextNode(task.objectDate)
    cardDueDate.appendChild(dateText)

    const cardDeleteBtn = document.createElement('button')
      cardDeleteBtn.classList.add('btn', 'btn-danger', 'delete')
      const buttonText = document.createTextNode('Delete')
      cardDeleteBtn.appendChild(buttonText)
    // cardDeleteBtn.on('click', handleDeleteTask);

    //   ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
//   if (task.objectDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.objectDate, 'DD/MM/YYYY');

    // ? If the task is due today, make the card yellow. If it is overdue, make it red.
    // if (now.isSame(task.objectDate, 'day')) {
    //   taskCard.addClass('bg-warning text-white');
    // } else if (now.isAfter(task.objectDate)) {
    //   taskCard.addClass('bg-danger text-white');
    //   cardDeleteBtn.addClass('border-light');
    // }


  // ? Gather all the elements created above and append them to the correct elements.
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // ? Return the card so it can be appended to the correct lane.
  console.log('made it')
  

  return taskCard;
}

    

  $( ".lane" ).droppable({
    accept: ".draggable",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find('p')
    }
});
  
 





const title = document.getElementById('inputTitle')
const date = document.getElementById('inputDate')
const description = document.getElementById('inputDescription')
const formButton = document.getElementById('formButton')
formButton.addEventListener('click', formSubmit)


// Todo: create a function to generate a unique task id
function generateTaskId() {
    //  nextid != null then nextid++
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
