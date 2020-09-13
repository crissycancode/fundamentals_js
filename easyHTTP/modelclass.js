export class easyHTTP {
  constructor(){
    super.http = new XMLHttpRequest();
  };

    get(url, callback){
      this.http.open('GET', url, true);
      
      let self = this;
      this.http.onload = _ => {
        if(self.http.status === 200) {
          callback(null, self.http.responseText);
        }else{
          callback(`error: ${self.http.status}`);
        };
      };
    
      this.http.send();
    };

      // HTTP POST Request
      post(url, data, callback){
      this.http.open('POST', url, true);
      this.http.setRequestHeader('Content-type', 'application/json');

      let self = this;
      this.http.onload = _ => {
        callback(null, self.http.responseText);
      };

      this.http.send(JSON.stringify(data));
    };


    // HTTP PUT Request
    put(url, data, callback){
      this.http.open('PUT', url, true);
      this.http.setRequestHeader('Content-type', 'application/json');

      let self = this;
      this.http.onload = _ => {
        callback(null, self.http.responseText);
      };

      this.http.send(JSON.stringify(data));
    };


    // HTTP DELETE Request
    delete(url, callback){
      this.http.open('DELETE', url, true);
      this.http.setRequestHeader('Content-type', 'application/json');

      let self = this;
      this.http.onload = _ => {

      if(self.http.status === 200){
        callback(null, 'post deleted');
      }else{
        callback(`error: ${self.http.status}`);
      };

        
      };

      this.http.send();
    };
};
