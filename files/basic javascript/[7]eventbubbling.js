//event bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//   console.log('title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//   console.log('card-content');
// });


// document.querySelector('.card').addEventListener('click',function(){
//   console.log('card');
// });


// document.querySelector('.col').addEventListener('click',function(){
//   console.log('column');
// });


//EVENT DELIGATION
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);

//event bubbling delegates parent
document.body.addEventListener('click', deleteItem); 

function deleteItem(e){

  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log(e.target);
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete-item');
    e.target.parentElement.parentElement.remove();
  }


}