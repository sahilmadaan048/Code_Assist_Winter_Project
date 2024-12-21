/*
what are middlewares
how to make a middleware
apply middleware in rooutes
types of middlewares
inniterview question
*/


const express = require('express');
const app = express();


const reqFilter = (req, res, next) => {
    // console.log('reqFilter');
    if(req.query.age) {
        res.send("please provide age");
    }else if(req.query.age < 18){
        res.send("you cannot enter this page");
    }
    else next();
}

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send("welcome to home page");
});


app.get('/users', (req, res) => {
    res.send("welcome to users page");
});

app.listen(8080);
/*
### **What are Middlewares?**

In **Express.js**, middleware functions are used to perform specific tasks during the lifecycle of a request to the server. They are functions that receive the **request** (req), **response** (res), and a **next** function, and they can modify the request or response objects, execute code, end the request-response cycle, or call the next middleware in the stack.

### **How Middleware Works:**

When a request is made to an Express server, it passes through a series of middleware functions before reaching the route handler. Each middleware can either:
1. Modify the request and response objects.
2. Execute some code (e.g., logging, validation).
3. End the request-response cycle by sending a response.
4. Call the `next()` function to pass control to the next middleware in the stack.

### **How to Make a Middleware**

Creating a middleware in Express is simple. Here’s a basic example:

```javascript
const express = require('express');
const app = express();

// Custom Middleware
function myMiddleware(req, res, next) {
    console.log('Middleware executed!');
    next(); // Pass control to the next middleware or route handler
}

// Apply the middleware globally (for all routes)
app.use(myMiddleware);

// A sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### **Applying Middleware to Routes**

You can apply middleware to:
1. **All routes**: This is done globally by using `app.use()`.
2. **Specific routes**: You can apply middleware to specific routes or route groups.

#### Example: Global Middleware (for all routes)
```javascript
app.use(myMiddleware);  // Applies to all routes
```

#### Example: Middleware for a Specific Route
```javascript
// Only applies to the '/login' route
app.post('/login', myMiddleware, (req, res) => {
    res.send('Login route with middleware');
});
```

#### Example: Multiple Middlewares for a Route
You can chain multiple middleware functions for a single route:
```javascript
app.get('/profile', middleware1, middleware2, (req, res) => {
    res.send('Profile Page');
});
```

### **Types of Middlewares**

1. **Application-level Middleware**
   - These are used to perform tasks like logging, request body parsing, authentication, etc., and can be applied globally or for specific routes.
   - Example:
     ```javascript
     app.use(express.json());  // Parse JSON bodies in requests
     ```

2. **Router-level Middleware**
   - Similar to application-level middleware, but it is applied to a specific router. You can use it when you are using **Express Router** to group related routes.
   - Example:
     ```javascript
     const router = express.Router();

     router.use(middleware1);  // Apply to all routes within the router

     router.get('/profile', (req, res) => {
         res.send('Profile Page');
     });

     app.use('/user', router);  // Mount the router at '/user' route
     ```

3. **Built-in Middleware**
   - Express provides some built-in middleware like `express.json()`, `express.urlencoded()`, `express.static()`, etc.
   - Example:
     ```javascript
     app.use(express.static('public')); // Serve static files from 'public' directory
     ```

4. **Third-party Middleware**
   - You can use third-party libraries for handling more complex operations like authentication (Passport.js), error handling, logging, etc.
   - Example:
     ```javascript
     const morgan = require('morgan');
     app.use(morgan('dev'));  // Use Morgan for logging HTTP requests
     ```

5. **Error-handling Middleware**
   - This middleware handles errors in your application and is defined with four parameters: `err, req, res, next`.
   - Example:
     ```javascript
     app.use((err, req, res, next) => {
         console.error(err.stack);
         res.status(500).send('Something went wrong!');
     });
     ```
   - This should be defined after all other routes and middleware.

6. **Middleware for Specific HTTP Methods**
   - You can define middleware for a specific HTTP method (GET, POST, etc.).
   - Example:
     ```javascript
     app.post('/login', (req, res, next) => {
         console.log('POST request to /login');
         next();  // Continue to the next handler
     }, (req, res) => {
         res.send('Logged In');
     });
     ```

### **Chaining Multiple Middlewares**

You can apply multiple middleware functions in sequence. When you have more than one middleware, each one must call `next()` to pass control to the next middleware or route handler.

```javascript
app.use((req, res, next) => {
    console.log('First middleware');
    next(); // Pass to the next middleware
});

app.use((req, res, next) => {
    console.log('Second middleware');
    next(); // Pass to the next middleware
});

app.get('/', (req, res) => {
    res.send('Final route handler');
});
```

### **Summary of Middleware Types**
1. **Application-level middleware**: Used for tasks across your entire app (e.g., logging, parsing requests).
2. **Router-level middleware**: Used within a specific router (grouping related routes).
3. **Built-in middleware**: Express provides a set of built-in middleware for common tasks.
4. **Third-party middleware**: You can use external packages for functionality like logging, authentication, etc.
5. **Error-handling middleware**: Special middleware for catching and handling errors.
6. **Route-specific middleware**: Applied to individual routes or HTTP methods.

### Conclusion:
Middleware is a powerful feature of Express.js, enabling you to intercept and modify HTTP requests and responses. By using middleware, you can create flexible, modular applications and streamline various processes such as authentication, validation, error handling, and more.
*/
