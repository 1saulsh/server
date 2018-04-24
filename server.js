//require /import HTTP module
var http = require("http");

// here we define a port for the server a standard port number 80 (constants sare typically uppercase)
var PORT1 = 7000;
var PORT2 =7500;

// here we creat a generic function that handles request and response
function handleGoodRequest(request, response) {
    response.end("You are beautiful" + request.url);
}
function handleBadRequest(request, response){
    response.end("you are hideous" + requesdet.url);
}

//here we use node HTTP package to create our server
//we then pass it the handleRequest function to empower it functionality
//handlerequest is listener function
var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);

goodServer.listen(PORT1, function() {
    console.log(`server lisening on http://localhost:${PORT1}`)
})
badServer.listen(PORT2, function() {
        console.log(`server lisening on http://localhost:${PORT2}`)
});