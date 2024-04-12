// Retrieve tasks and nextId from localStorage

let nextId = JSON.parse(localStorage.getItem("nextId"));

function generateTaskId(){
    if(nextId === null){
        nextId = 1;
    }else {
        nextId++;
    }
    localStorage.setItem('nextId', JSON.stringify(nextId))
    return nextId;

}

function formSubmit(){
    const taskArray = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskLength = taskArray.length
    console.log(taskLength)

    const taskObject = {
        objectId: generateTaskId(),
        objectTitle: title.value,
        objectDate: date.value,
        objectDescription: description.value.trim()
    }

    taskArray.push(taskObject)
    createTaskCard(taskObject)
    localStorage.setItem('tasks', JSON.stringify(taskArray))
    console.log(taskArray)

    
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log(task)
    console.log('task^')
    const taskCard = document.createElement('div')
    taskCard.style.zIndex=1000;
    taskCard.classList.add('card', 'project-card', 'draggable', 'my-3')

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header', 'h4')
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
      cardDeleteBtn.setAttribute('id', task.objectId)
    //   cardDeleteBtn.setAttribute('id', 'deleteBtn')

      

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  const now = dayjs();
  const taskDueDate = dayjs(task.objectDate, 'DD/MM/YYYY');

    // ? If the task is due today, make the card yellow. If it is overdue, make it red.
    if (now.isSame(taskDueDate, 'day')) {
      taskCard.classList.add('bg-warning', 'text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.classList.add('bg-danger', 'text-white');
      cardDeleteBtn.classList.add('border-light');
    }

  $('#todo-cards').append(taskCard);
  $('.draggable').draggable({
        opacity: .7,
        zIndex: 1000,
    })
  
  return taskCard;
}

function pageLoad(taskArray){
    taskArray.forEach(createTaskCard)
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
  
function deleteCard(){
    id = this.getAttribute('id')
    console.log(id)
    const deleteObjectArray = JSON.parse(localStorage.getItem('tasks'))
    const arrayLength = deleteObjectArray.length 
    for(let i=1; i<arrayLength; i++){
        if (i = id){
            deleteObjectArray.splice(i-1, 1)
            console.log(deleteObjectArray)
        }
        else{}
    }
    localStorage.setItem('tasks', JSON.stringify(deleteObjectArray))
    location.reload()
} 





const title = document.getElementById('inputTitle')
const date = document.getElementById('inputDate')
const description = document.getElementById('inputDescription')
const formButton = document.getElementById('formButton')
formButton.addEventListener('click', formSubmit)

let taskList = JSON.parse(localStorage.getItem("tasks"));
let taskLength = taskList.length;
console.log(taskLength)

pageLoad(JSON.parse(localStorage.getItem('tasks')))

for(let i=1; i<=taskLength; i++){
    console.log(taskLength)
    const deleteButton = document.getElementById(i)
    console.log(deleteButton)
    deleteButton.addEventListener('click', deleteCard)
}






