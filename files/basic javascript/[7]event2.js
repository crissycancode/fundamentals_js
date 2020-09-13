const form = document.querySelector('form'),
      taskInput = document.querySelector('#task'),
      heading = document.querySelector('h5'),
      select = document.querySelector('select');

//clear input

taskInput.value = '';

form.addEventListener('submit',runEvent);

//keydown
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);


function runEvent(e){
  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value);
  heading.innerHTML = e.target.value;

  e.preventDefault();
}