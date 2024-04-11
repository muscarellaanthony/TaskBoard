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

    $('#todo-cards').append(createTaskCard(taskObject));
}


// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log(task)
    const taskCard = $('<div>')
      .addClass('card project-card draggable my-3')
    //   .attr('data-project-id', task.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(task.objectTitle);
    console.log(task.objectTitle)
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(task.objectDescription);
    const cardDueDate = $('<p>').addClass('card-text').text(task.objectDate);
    const cardDeleteBtn = $('<button>')
      .addClass('btn btn-danger delete')
      .text('Delete')
      .attr('data-task-id', task.id);
    cardDeleteBtn.on('click', handleDeleteTask);

    //   ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
//   if (task.objectDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(task.objectDate, 'DD/MM/YYYY');

    // ? If the task is due today, make the card yellow. If it is overdue, make it red.
    if (now.isSame(task.objectDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(task.objectDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }


  // ? Gather all the elements created above and append them to the correct elements.
  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // ? Return the card so it can be appended to the correct lane.
  console.log('made it')
  return taskCard;
}


  // ? Use JQuery UI to make task cards draggable
  $('.draggable').draggable({
    opacity: 0.7,
    zIndex: 100,
    // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
    helper: function (e) {
      // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
      const original = $(e.target).hasClass('ui-draggable')
        ? $(e.target)
        : $(e.target).closest('.ui-draggable');
      // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
      return original.clone().css({
        width: original.outerWidth(),
      });
    },
  });

  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
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
