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
  response.setHeader("Access-Control-Allow-Origin", '*');

  var user = request.query.git;
  var repo  = request.query.repo;
  var path = request.query.path;
  var branch = request.query.branch;
  var filetype = getExtension(path);
 var  whitelist = ["hrichiksite", "MatejaSrejic"];

  var url = "https://raw.githubusercontent.com/" + user + "/"+ repo +"/"+ branch +"/"+ path;

    
    
if(whitelist.includes(user)){
 if(filetype==="js"){
        var req = await fetch(url);
    var res = await req.text();
        response.setHeader("content-type", 'text/javascript');
        response.send(res);
} else if(filetype==="json"){
        var req = await fetch(url);
    var res = await req.text();
        response.setHeader("content-type", 'application/json');
        response.send(res);
} else if(filetype==="css"){
        var req = await fetch(url);
    var res = await req.text();
        response.setHeader("content-type", 'text/css');
        response.send(res);
} else if(filetype==="png"){
    response.send("Fetch This File Directly From GitHub, can't waste bandwidth");
} else {
    response.send("Sorry, File not supported");
}
} else {
    response.send("Add a request to account to whitelist (https://github.com/hrichiksite/gitcdn/issues), account not yet added to whitelist");
}
}
