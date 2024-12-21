/*
Core modules in Node js
 
what are the core modules ?
what are global modeules ? 
global module exmaple
non-global module with example
interview question 

*/

// const fs = require('fs');
// Option 1: Importing the whole module

// Option 1: Importing the whole module
const fs = require('fs');
console.log("Code step by step");
fs.writeFileSync("write.txt", "code step by step");
console.log(__dirname);
fs.writeFileSync("write2.txt", "importing just the needed function");

// const fs = require('fs');
console.log("Code step by step");
fs.writeFileSync("write.txt", "code step by step");
console.log(__dirname);
fs.writeFileSync("write2.txt", "importing just the needed function");




/*
CORE MODULES

In JavaScript, **core modules** refer to the built-in modules provided by the environment (such as Node.js) or the JavaScript engine. These modules are natively available without requiring any external libraries or packages. Their primary purpose is to provide functionality that is commonly needed in applications, such as file operations, working with buffers, networking, and more.

### Core Modules in JavaScript:
The concept of core modules depends on the runtime environment. For instance:

---

### **1. Core Modules in Node.js**
Node.js, a server-side JavaScript runtime, comes with several core modules. These modules provide essential utilities for building server-side and networked applications. Below are some key Node.js core modules:

#### File System (`fs`)
- Used to work with the file system.
- Example:
  ```javascript
  const fs = require('fs');
  fs.writeFileSync('example.txt', 'Hello, world!');
  const data = fs.readFileSync('example.txt', 'utf-8');
  console.log(data); // Output: Hello, world!
  ```

#### Path (`path`)
- Utilities for working with file and directory paths.
- Example:
  ```javascript
  const path = require('path');
  const filePath = path.join('/user', 'docs', 'file.txt');
  console.log(filePath); // Output: /user/docs/file.txt
  ```

#### HTTP (`http`)
- Used to create HTTP servers and make HTTP requests.
- Example:
  ```javascript
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  });
  server.listen(3000, () => console.log('Server running on port 3000'));
  ```

#### Events (`events`)
- Implements an event-driven architecture.
- Example:
  ```javascript
  const EventEmitter = require('events');
  const emitter = new EventEmitter();
  emitter.on('greet', () => console.log('Hello!'));
  emitter.emit('greet'); // Output: Hello!
  ```

#### OS (`os`)
- Provides operating system-related utility methods and properties.
- Example:
  ```javascript
  const os = require('os');
  console.log(`Free memory: ${os.freemem()}`);
  console.log(`Total memory: ${os.totalmem()}`);
  ```

#### Other Common Core Modules:
- `crypto`: For cryptographic operations.
- `stream`: For working with streaming data.
- `url`: For URL resolution and parsing.
- `buffer`: For handling binary data.

---

### **2. Core Modules in Browsers**
In the browser environment, JavaScript has built-in core APIs that provide basic functionality for web applications. These include:

#### Document Object Model (DOM)
- Allows interaction with HTML and XML documents.
- Example:
  ```javascript
  document.getElementById('myElement').textContent = 'Hello, world!';
  ```

#### Fetch API
- Used for making HTTP requests.
- Example:
  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

#### Console
- Used for logging information.
- Example:
  ```javascript
  console.log('Hello, world!');
  ```

#### Timer Functions
- For managing asynchronous tasks.
- Example:
  ```javascript
  setTimeout(() => console.log('Executed after 2 seconds'), 2000);
  ```

#### Other Common Core APIs:
- `localStorage` and `sessionStorage`: For storing data in the browser.
- `WebSocket`: For real-time communication.
- `Worker`: For running tasks in background threads.

---

### Key Features of Core Modules:
1. **Pre-installed**: No need to install or import third-party libraries.
2. **Efficient**: Designed to integrate seamlessly with the JavaScript runtime.
3. **Standardized**: Core modules provide a consistent API across applications.

Core modules serve as the foundation of JavaScript development, enabling a wide range of functionalities without relying on external dependencies.

*/
