// document.querySelector('.clear-tasks').addEventListener('click', function(){
//   console.log('hi boots!');
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
  console.log('hi boots!');

  let val;
  val = e;

  //event target element
  val = e.target;
  console.log(val);
  val = e.target.id;
  console.log(val);
  val = e.target.className;
  console.log(val);
  val = e.target.classList;
  console.log(val);
  val = e.target.classList[0];
  console.log(val);

//event type
  val = e.type;
  console.log(val);
// time stamp
  val = e.timeStamp;
  console.log(val);
  //coords relative to the window
  val = e.clientY;
  console.log(val);
  val = e.clientX;
  console.log(val);
  //coords relative to elements
  val = e.offsetY;
  console.log(val);
  val = e.offsetX;
  console.log(val);
}