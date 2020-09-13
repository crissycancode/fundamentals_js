//import { easyHTTP } from './model.js';
//import { easyHTTP } from './modelclass.js';
import { easyHTTP } from './modelasync.js';

const http = new easyHTTP();
const myurl = 'https://jsonplaceholder.typicode.com/posts';

//get data
button1.addEventListener('click', _ => {
  http.get(myurl, (err, posts) =>{
    if(err){
      console.log(err);
    }else {
      console.log(posts);
    }
  });

  http.get(myurl)
  .then(posts => console.log(JSON.stringify(posts)))
  .catch(err => console.log(err));

});

button2.addEventListener('click', _ =>  {
  //create data
  const data = {
    title: 'Post Created.',
    body: 'This post created.'
  };

  //post data
  // http.post(myurl, data (err, posts)) => {
  //   if(err){
  //     console.log(err);
  //   }else {
  //     console.log(posts);
  //   }
  // });

  http.post(myurl, data)
  .then(posts => console.log(JSON.stringify(posts)))
  .catch(err => console.log(err));

});

button3.addEventListener('click', _ => {
  http.delete(`${myurl}/1`,(err, response)  => {
    if(err){
      console.log(err);
    }else{
      console.log(response);
    }
  });

});

//update post
const input = document.querySelector('#input');
const updatedata = {
  title: 'Custom Update Post',
  body: 'This custom update post'
};

input.addEventListener('keyup', _ => {
  //update post
  http.put(`${myurl}/${input.value}`, {title: 'Custom Update Post',body: 'This custom update post'}, (err, post)  => {
    if(err){
      console.log(err);
    }else {
      console.log(post);
    }
  });
})

//delete post
