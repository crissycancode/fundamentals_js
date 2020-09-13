//define ui variables
const 
taskList = document.querySelector('.collection'), //ul todo-list
taskInput = document.querySelector('#task'), //todo-input
form = document.querySelector('#task-form'), //todo-button in form
filter = document.querySelector('#filter');


clearBtn = document.querySelector('.clear-task'),

      

// load all event listeners

form.addEventListener('submit', addTask);
//document.addEventListener('DOMContentLoaded', getTask); //gets values from localStorage
taskList.addEventListener('click', removeTask);

  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTask);


getTask();

function addTask(e) {
  e.preventDefault(); // prevents default
  if (taskInput.value !== ''){
  const li = document.createElement('li'); //creates the element
        li.classList = 'collection-item'; //add class to element
        li.innerText = taskInput.value;// append and add text value <li class="todo collection-item">walk the dog</li>
  const link = document.createElement('a'); // creates a <a></a> 
        link.classList = 'delete-item secondary-content'; //adds class name
        link.innerHTML = '<i class = "fa fa-remove"></i>'; //add icon
        li.appendChild(link); // creates <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
        taskList.appendChild(li); //appends li to ul

        storeTaskInLocalStorage(taskInput.value);//adds to localstorage
        taskInput.value = ''; //clears the taskInput 
  }
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();// Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let input;
  if (localStorage.getItem('task') === null) {
    input = [];
  } else {
    input = JSON.parse(localStorage.getItem('task'));
  }
  input.forEach(function(item, index) {
    if (taskItem.textContent === item) {
      input.splice(index, 1);
    }
  });

  localStorage.setItem('task', JSON.stringify(input));
} 

function clearTask() {
  taskList.innerHTML = '';
  clearLocalStorage();

  // while(taskList.firstChild){
  //   taskList.removeChild(taskList.firstChild);
  // }
}
function clearLocalStorage() {
 localStorage.clear();
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
    const li = document.createElement('li'); //creates the element
          li.classList = 'collection-item'; //add class to element
          li.innerText = task;// append and add text value <li class="todo collection-item">walk the dog</li>
    const link = document.createElement('a'); // creates a <a></a> 
          link.classList = 'delete-item secondary-content'; //adds class name
          link.innerHTML = '<i class = "fa fa-remove"></i>'; //add icon
          li.appendChild(link); // creates <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>
          taskList.appendChild(li); //appends li to ul
          console.log(li);
  });
}

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






