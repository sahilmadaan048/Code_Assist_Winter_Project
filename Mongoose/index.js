/*
Start with Mongoose

what is mongoose
differentiate betweeb Mongoose and MongoDB package
install mongoose
what is schemas
what is model
connect node js and mongoDB nd mongoose

 */

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/wanderlust");
  const listingSchema = new mongoose.Schema({
    title: String,
  });
  const listingModel = mongoose.model("listings", listingSchema);
  let data = new listingModel({ title: "sahil madaan" });
  let result = data.save();
  console.log(result);
};

main();

/*
difference between model and schema in node js


In Node.js (often in the context of frameworks like **Express** and **Mongoose**), **model** and **schema** are related but distinct concepts, especially when dealing with databases like MongoDB. Here's a clear explanation:

---

### **Schema**
A **schema** defines the **structure** of a document in the database. It acts as a blueprint that specifies what fields a document can have, their types, default values, validation rules, etc.

- **Purpose:** To define the shape and constraints of data.
- **Used With:** Mongoose (commonly used with MongoDB).
- **Example:**

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, min: 18 },
});
```

Here, `userSchema` specifies that a "user" document will have `name`, `email`, and `age` fields with their respective constraints.

---

### **Model**
A **model** is a **wrapper** around the schema and provides an interface to interact with the database. It lets you create, read, update, and delete (CRUD) documents based on the schema.

- **Purpose:** To interact with the database using methods like `.find()`, `.save()`, `.update()`, etc.
- **Created From:** A schema.
- **Example:**

```javascript
const User = mongoose.model('User', userSchema);
```

Here, `User` is a model created from the `userSchema`. You can now use this model to perform database operations:

```javascript
// Create a new user
const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
await newUser.save();

// Find all users
const users = await User.find();
console.log(users);
```

---

### **Key Differences**
| Aspect               | Schema                                      | Model                                      |
|----------------------|---------------------------------------------|-------------------------------------------|
| **Definition**       | Blueprint of how data should look.         | Interface to interact with the database.  |
| **Purpose**          | Defines structure, constraints, and rules. | Performs CRUD operations on the database. |
| **Role**             | Focused on defining data.                  | Focused on interacting with the database. |
| **Code Usage**       | Used to define a model.                    | Used to perform database operations.      |

---

### Summary
- **Schema:** Describes the structure of the data (blueprint).
- **Model:** Represents the schema and provides methods to interact with the database. 

In short: **Model = Schema + CRUD Methods.**
*/
