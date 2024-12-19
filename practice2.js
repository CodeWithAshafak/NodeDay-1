const http = require("http");
http.createServer((req,res)=>{
  res.write("<h1>This is the second practice page ....!</h1>")
}).listen(4000)