export class easyHTTP {
  
    //HTTP GET REQUEST
    async get(url){
      const response = await fetch(url);
      const responseData = await response.json();

      return responseData;
    };

    // HTTP POST REQUEST
    async post(url, data){

      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      });
      
      const responseData = await response.json();
      return responseData;
  };


    // HTTP PUT REQUEST
    async put(url, data){
 
      const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      return responseData;
    };


    // HTTP DELETE Request
    async delete(url){
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
      });

      const responseData = await 'resource deleted';
      return responseData;
    };
};
