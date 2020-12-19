const fetch = require('node-fetch');

module.exports = async (request, response) => {
      response.setHeader("Access-Control-Allow-Headers", '*');
      response.setHeader("Access-Control-Allow-Origin", '*');
          response.setHeader("content-type", 'application/javascript');

  var user = request.query.git;
  var repo  = request.query.repo;
  var path = request.query.path;
  var branch = request.query.branch;
  


  var url = "https://raw.githubusercontent.com/" + user + "/"+ repo +"/"+ branch +"/"+ path




    var req = await fetch(url);
    var res = await req.text();
    response.send(res);

  
}
