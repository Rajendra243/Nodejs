var http = require("http");
var rect = require("./rectangle");

http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'});
res.write("The perimeter of rectangle is"+ " "+rect.perimeter(2,3));
res.end();

}).listen(3000);
console.log("print at https://localhost:3000/");
