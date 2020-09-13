export function easyHTTP() {
  this.http = new XMLHttpRequest()
}

//make an HTTP GET request

//GET REQUEST USING SELF
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  let self = this;
  self.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    }else{
      callback(`error: ${self.http.status}`);
    }
  }

  this.http.send();
}

// HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
}


// HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
}


// HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){

  if(self.http.status === 200){
    callback(null, 'post deleted');
  }else{
    callback(`error: ${self.http.status}`);
  }

    
  };

  this.http.send();
}