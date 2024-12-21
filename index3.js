/*

Make basic server output on Browser

make basic server
function as parameter in node
arrow function
get outout on broser
interview question

*/


const http = require('http');


const dataControl = (req, resp) => {
    resp.write("<h1>hello, this is sahil madaan</h1>");
    resp.end();    
}

http.createServer(dataControl).listen(8080);
// http.createServer((req, resp)=>{
    // resp.write("<h1>hello this is sahil madaan</h1>");
    // resp.end();
//     // resp.writeHead(200, {'Content-Type': 'text/plain'});
// }).listen(8080);



// test(a, b) {

// }

// test(10, 20);