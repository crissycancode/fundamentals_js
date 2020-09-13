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
  const item = e.target;
  const text = item.parentElement.parentElement.textContent;
  console.log("content:" + text);
  //delete list
  if (item.parentElement.classList[0] === 'delete-item'){
    removeFromLocalStorage(text);
    item.parentElement.parentElement.remove();
    clearTask();
    getTask();
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

function removeFromLocalStorage(val){
  let task;
  if(localStorage.getItem('task') === null){
    task = [];
  }else{
    task = JSON.parse(localStorage.getItem('task'));
  }
  const myIndex = task.indexOf(val);
  task.splice(myIndex, 1);
  localStorage.setItem('task', JSON.stringify(task));
}



