//define ui variables
const form = document.querySelector('#task-form'),
      taskList = document.querySelector('.collection'),
      clearBtn = document.querySelector('.clear-task'),
      filter = document.querySelector('#filter'),
      taskInput = document.querySelector('#task');

// load all event listeners

loadEventListeners();

function loadEventListeners() {
  // add task event
  document.addEventListener('DOMContentLoaded', getTask);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTask);
}

function addTask(e) {
  if(taskInput.value === ''){
    alert('add a task');
  } else {
    //create element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append link and li
    li.appendChild(link);


    //add li to ul
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value = '';
    console.log(li);
    e.preventDefault();
  }

}

// function removeTask(e) {

//   if(e.target.parentElement.classList.contains('delete-item')){
//     if(confirm('are you sure?')){
//       e.target.parentElement.parentElement.remove();
      
//     }
//   }
// }
function removeTask(e) { 
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('are you sure?')){
      //deleteTaskInLocalStorage(taskList.textContent);
      console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();
      
    }
  }
}

function clearTask() {
  taskList.innerHTML = '';

  // while(taskList.firstChild){
  //   taskList.removeChild(taskList.firstChild);
  // }
}

//filter task
function filterTask(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }else {
        task.style.display = 'none';
      }
  });
}

//get tasks from local storage
function getTask(){
  let task; 
  if(localStorage.getItem('task')===null){
    task = [];
  }else{
    task = JSON.parse(localStorage.getItem('task'));
  }

  task.forEach(function (task) {
    //create li element
    //create element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append link and li
    li.appendChild(link);
    //add li to ul
    taskList.appendChild(li);
  });

}

//store task
function storeTaskInLocalStorage(val){
  let task;
  if (localStorage.getItem('task') === null){
    task = [];

  }else{
    task = JSON.parse(localStorage.getItem('task'));
  }

  task.push(val);

  localStorage.setItem('task', JSON.stringify(task));
}
//store task

// function deleteTaskInLocalStorage(val){
//   console.log('entry:');
//   console.log(typeof val + val);
//   val = val.toString();
//   const myThingReturned = JSON.parse(localStorage.getItem('task')); //converts a JSON string into a JavaScript object
//   console.log('something:' + val.);


//   for(let i = 0; i < myThingReturned.length; i++){

//     if (val.trim() === myThingReturned[i].trim()){
//      // myThingReturned.splice(i);
//       console.log('ret: ' + myThingReturned[i]);
//       console.log('val: ' + val);
  
//     }

//     console.log(myThingReturned);
//   }
// }

