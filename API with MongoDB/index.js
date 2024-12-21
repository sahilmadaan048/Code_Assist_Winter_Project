/*
API with MongoDB

make new file for API
import andn use Mongo Config
make API for get data
Test with postman
interview questions

*/

// get, post, fetch, delete

/*
can we pass body in the get API call -> ans is NOOOOO cannot


You're correct! According to the HTTP specification, **GET** requests are meant to retrieve data, and the request body is ignored by most implementations and servers. 

If you're looking for key reasons why, here they are:

### 1. **Semantics of GET**
   - The purpose of a GET request is to request a representation of a resource identified by a URL. Query parameters in the URL are used for any input data.

### 2. **Standard Practice**
   - HTTP/1.1 explicitly states that servers should ignore the body of a GET request. While technically a body can be sent with GET, it’s not standard behavior, and many libraries or tools do not support it.

### 3. **Compatibility Issues**
   - Many proxies, caching servers, and tools are designed with the assumption that GET requests have no body. Sending one can lead to unexpected results or errors.

### 4. **Alternatives**
   - If you need to send a request body, you should use **POST**, **PUT**, or another appropriate HTTP method.

If you're ever debugging or working with APIs, remember: **GET = no body, only URL-based data (query parameters or path).**
*/

const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.listen(5000);
