export class easyHTTP {
  constructor(){
    super.http = new XMLHttpRequest();
  };

    //HTTP GET
    async get(url){
      const response = fetch(url);
      const data = (await response).json();
      return data;
    };

    // HTTP POST Request
    async post(url, data){
      console.log(data);
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
      }).then(response => response.json());
      
      return response;

    // this.http.open('POST', url, true);
    // this.http.setRequestHeader('Content-type', 'application/json');

    // let self = this;
    // this.http.onload = _ => {
    //   callback(null, self.http.responseText);
    // };

    // this.http.send(JSON.stringify(data));
  };


    // HTTP PUT Request
    async put(url, data){
      // this.http.open('PUT', url, true);

      //this.http.setRequestHeader('Content-type', 'application/json');
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content_Type': 'application/json'},
        body: data
      }).then(response => response.json());

      // let self = this;
      // this.http.onload = _ => {
      //   callback(null, self.http.responseText);
      // };

      // this.http.send(JSON.stringify(data));
    };


    // HTTP DELETE Request
    async delete(url){
      // this.http.open('PUT', url, true);


      //this.http.setRequestHeader('Content-type', 'application/json');
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content_Type': 'application/json'},
        body: data
      }).then(response => response.json());

      // let self = this;
      // this.http.onload = _ => {

      // if(self.http.status === 200){
      //   callback(null, 'post deleted');
      // }else{
      //   callback(`error: ${self.http.status}`);
      // };

        
      // };

      // this.http.send();
    };
};
