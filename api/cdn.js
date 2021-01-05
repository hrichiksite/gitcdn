const fetch = require('node-fetch');

//code from https://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
function getExtension(path) {
    var basename = path.split(/[\\/]/).pop(),  // extract file name from full path ...
                                               // (supports `\\` and `/` separators)
        pos = basename.lastIndexOf(".");       // get last position of `.`

    if (basename === "" || pos < 1)            // if file name is empty or ...
        return "";                             //  `.` not found (-1) or comes first (0)

    return basename.slice(pos + 1);            // extract extension ignoring `.`
}

module.exports = async (request, response) => {
      response.setHeader("Cache-Control", ' max-age=15780000');
      response.setHeader("Access-Control-Allow-Origin", '*');

  var user = request.query.git;
  var repo  = request.query.repo;
  var path = request.query.path;
  var branch = request.query.branch;
  var filetype = getExtension(path);

  var url = "https://raw.githubusercontent.com/" + user + "/"+ repo +"/"+ branch +"/"+ path;

    var req = await fetch(url);
    var res = await req.text();

if(filetype==="js"){
                response.setHeader("content-type", 'text/javascript');
                 response.send(res);
} else if(filetype==="json"){
                response.setHeader("content-type", 'application/json');
                     response.send(res);
} else if(filetype==="css"){
                response.setHeader("content-type", 'text/css');
                     response.send(res);
} else if(filetype==="png"){
    response.send("Fetch This File Directly From GitHub, can't waste bandwidth");
} else {
    response.send("Sorry, File not supported");
}
}



