const fetch = require('node-fetch');

module.exports = async (request, response) => {
      response.setHeader("Access-Control-Allow-Headers", '*');
      response.setHeader("Access-Control-Allow-Origin", '*');
  var user = request.query.git;
  var repo  = request.query.repo;
  var path = request.query.path;
  
  
  regex = new RegExp('[^.]+$');
  extension = path.match(regex);

  if(extension=== "json"){
    response.setHeader("content-type", 'application/json');
  } else if(extension==="js"){
    response.setHeader("content-type", 'application/javascript');
  }
  var url = "https://raw.githubusercontent.com/" + user + "/"+ repo +"/master/"+ path


  if()


    var req = await fetch(url);
    var res = await req.text();
    response.send(res);

  
}
