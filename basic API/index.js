/*
Make a simple API

make a server
create a header and API body
create an API With static data
put data in another file
interview question

*/

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    // resp.write(JSON.stringify({name: "sahil madaan", email: "sahil@gmail.com"}));
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(8080);

/*
iss 200 ka kya matlab hai idhar

The `200` in the `resp.writeHead()` method is the **HTTP status code** that indicates the result of the request. Specifically:

### **What Does `200` Represent?**
- **Status Code 200**: It is the HTTP status code for "OK".
  - It tells the client (e.g., a browser or a tool like Postman) that the request was successfully received, understood, and processed by the server.
  - It's the default status code for successful GET requests.

---

### **How It Works in This Context**
```javascript
resp.writeHead(200, {'Content-Type': 'application/json'});
```
1. **`200`**:
   - Indicates that the HTTP request (e.g., the GET request made to this server) was successful.
   - Any other status code, like `404` (Not Found) or `500` (Internal Server Error), would indicate an error or a specific issue.

2. **Headers**:
   - `'Content-Type': 'application/json'` specifies that the content being sent in the response is JSON.
   - This helps the client understand how to interpret the response data.

---

### **Complete Flow**
1. The server receives a request on `http://localhost:8080`.
2. The `resp.writeHead(200, {...})`:
   - Confirms that the request was successfully processed.
   - Sets the response headers to inform the client about the response type.
3. The `resp.write(JSON.stringify(data))` sends the actual data (in JSON format) back to the client.
4. The `resp.end()` signals the end of the response.

---

### **Why is `200` Important?**
Without setting an appropriate status code:
- The client might assume the request failed or was incomplete.
- Some clients (like browsers or APIs) rely on the status code for further actions (e.g., retries or displaying errors).

### **Example**
If you replaced `200` with `404`:
```javascript
resp.writeHead(404, {'Content-Type': 'application/json'});
resp.write(JSON.stringify({error: "Resource not found"}));
resp.end();
```
The client would interpret the response as an error, and the response body would reflect the failure.

In summary, `200` is a signal to the client that the request was processed successfully, and the response data is valid.

*/
