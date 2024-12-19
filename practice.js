const http = require("http");
http.createServer((req,res)=>{
  res.write("<h1>This is pracitce first</h1>")
}).listen(9000);