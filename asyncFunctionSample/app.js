//Async Await

function normalFunc() {
  return 'normal function';
}

console.log(normalFunc());

async function asyncFunc() {
  return 'asynchronous function';
}

console.log(asyncFunc());


async function asyncFunc1() {
  return 'asynchronous function # 1';
}

asyncFunc1().then(res => console.log(res));


async function myFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(_ => resolve('hello world'), 2000);
  });

  const error = false;
  if(true){
    const res = await promise; //wait until promise is resolved
    return res;
  }else{
    await Promise.reject(new Error('something went wrong.'));
  }
}

myFunction().then(res => console.log(res)).catch(err => console.log(err));

async function getUsers() {
  //await response to the fetch call
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = fetch(url);

  //only proceed once response is resolved
  const data = (await response).json();

  //only proceed once second promise is resolved
  return data;
  
}

getUsers()
.then(users => console.log(users))
.catch(err => console.log(err));

