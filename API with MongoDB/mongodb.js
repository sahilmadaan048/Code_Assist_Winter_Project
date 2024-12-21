/*
download DB
install mongodb
set environment for mongo
mongodb compass tool
interview question
 */

//installed monigodb and compass tool

/*
mongodb and mysql difference

**MongoDB** and **MySQL** are both popular databases, but they are fundamentally different in terms of their data models, use cases, and functionality. Here's a detailed comparison:

### **1. Database Type**

- **MongoDB**: 
  - **NoSQL Database**: MongoDB is a **NoSQL** (Not Only SQL) database that uses a **document-oriented** data model. It stores data in JSON-like **BSON (Binary JSON)** format, allowing for flexible, hierarchical data structures.
  - It is highly scalable and is designed to handle large volumes of unstructured or semi-structured data.

- **MySQL**: 
  - **Relational Database**: MySQL is a **Relational Database Management System (RDBMS)** that uses structured query language (SQL) to define and manipulate data.
  - Data is stored in **tables** with predefined schemas and relationships, and it follows the **ACID** (Atomicity, Consistency, Isolation, Durability) properties for transactions.

---

### **2. Data Model**

- **MongoDB**:
  - **Document-based**: MongoDB stores data in documents (similar to JSON objects). Each document can have different structures, and documents can be nested.
  - **Schema-less**: MongoDB does not require a fixed schema, meaning that different documents in the same collection can have different fields.

  Example document in MongoDB:
  ```json
  {
      "_id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "address": { "street": "123 Main St", "city": "NYC" }
  }
  ```

- **MySQL**:
  - **Table-based**: MySQL stores data in tables with rows and columns, where the schema (structure) is defined beforehand. Every row in a table must adhere to the same structure.
  - **Schema-defined**: Each table in MySQL has a fixed schema, meaning each column has a defined data type and structure.

  Example table in MySQL:
  ```sql
  CREATE TABLE users (
      id INT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      street VARCHAR(100),
      city VARCHAR(100)
  );
  ```

---

### **3. Query Language**

- **MongoDB**:
  - Uses **MongoDB Query Language (MQL)** to interact with the database. The syntax is different from SQL, as it is designed for working with documents and collections.
  - MongoDB provides built-in functions to work with JSON-like documents.

  Example MongoDB query:
  ```javascript
  db.users.find({ "name": "John Doe" });
  ```

- **MySQL**:
  - Uses **SQL (Structured Query Language)** to query the database. SQL is a standardized language that is widely used for relational databases.
  - SQL is powerful for performing operations like `SELECT`, `INSERT`, `UPDATE`, `DELETE`, and more.

  Example MySQL query:
  ```sql
  SELECT * FROM users WHERE name = 'John Doe';
  ```

---

### **4. Scalability**

- **MongoDB**:
  - **Horizontal scaling (Sharding)**: MongoDB supports horizontal scaling through sharding, which distributes data across multiple servers. This makes it ideal for handling large datasets and high-traffic applications.
  - MongoDB is more flexible in scaling since it can distribute data across several nodes, allowing for elastic scalability.

- **MySQL**:
  - **Vertical scaling**: MySQL traditionally scales vertically (i.e., by upgrading the hardware of a single server). However, you can also use **replication** and **partitioning** for horizontal scaling, but it's more complex compared to MongoDB.
  - Horizontal scaling can be achieved with tools like **MySQL Cluster** or **Master-Slave replication**, but it generally requires more effort.

---

### **5. ACID Compliance**

- **MongoDB**:
  - **ACID compliance**: MongoDB started with limited ACID support but since version 4.0, it supports multi-document transactions that offer **ACID** properties for transactions.
  - However, MongoDB is more optimized for performance and high availability than strict ACID transactions across multiple documents.

- **MySQL**:
  - **Full ACID compliance**: MySQL fully supports ACID properties, making it ideal for applications that require high consistency, such as financial systems, e-commerce, or other transactional systems.
  - MySQL is optimized for **relational consistency** and ensures that the data adheres to a strict relational model.

---

### **6. Use Cases**

- **MongoDB**:
  - **Ideal for unstructured or semi-structured data**: MongoDB is great for applications that handle large volumes of data that might vary in structure (e.g., logs, user activity data, IoT data).
  - **Real-time analytics, Big Data applications, Content management systems, Social networks, E-commerce platforms**.
  - Suitable for applications that need to scale easily and handle a variety of data types.

- **MySQL**:
  - **Ideal for structured data**: MySQL is best for applications requiring relational data models, such as systems where data consistency is critical, like **banking, enterprise applications, CRM systems**, and **e-commerce platforms** with structured data.
  - Great for applications where relationships between different entities need to be well-defined (e.g., orders, customers, products).

---

### **7. Performance**

- **MongoDB**:
  - **High performance for large datasets**: MongoDB can be faster for write-heavy workloads and applications that need to handle large amounts of data with varying structures. It also benefits from its horizontal scalability.
  - MongoDB can be more efficient when working with data that doesn't fit into a predefined schema or when data retrieval doesn't require complex joins.

- **MySQL**:
  - **Optimized for complex queries**: MySQL is typically more efficient for applications where complex queries and joins are needed to fetch data from multiple tables.
  - It is highly optimized for read-heavy operations and situations where data integrity is important.

---

### **8. Data Integrity and Constraints**

- **MongoDB**:
  - Since MongoDB is schema-less, data integrity constraints (such as foreign keys and checks) are not built-in. You would have to implement those manually in your application.
  - It doesn't enforce strict data validation by default, though you can define validation rules in the schema.

- **MySQL**:
  - MySQL enforces **referential integrity** through foreign keys, **unique constraints**, and other relational constraints to ensure data consistency and correctness.
  - It supports **joins**, allowing you to combine data from multiple tables based on relationships between them.

---

### **Summary of Differences:**

| Feature                     | MongoDB                               | MySQL                                |
|-----------------------------|---------------------------------------|--------------------------------------|
| **Type**                    | NoSQL (Document-based)               | Relational (SQL-based)               |
| **Data Model**              | JSON-like BSON documents             | Tables with rows and columns        |
| **Schema**                  | Schema-less                          | Schema-defined                       |
| **Query Language**          | MongoDB Query Language (MQL)         | SQL (Structured Query Language)      |
| **Scalability**             | Horizontal scaling (Sharding)        | Vertical scaling (some horizontal)   |
| **ACID Compliance**         | Supported (from version 4.0 onward)  | Full ACID compliance                 |
| **Performance**             | Faster for unstructured or large data | Better for relational data and joins |
| **Use Cases**               | Big Data, Real-time apps, Social media| Banking, CRM, Enterprise applications|
| **Data Integrity**          | Manual enforcement                   | Built-in integrity constraints       |
| **Joins**                   | No joins (related data is embedded)  | Supports joins (INNER, LEFT, etc.)   |

---

### **Conclusion:**
- **MongoDB** is more suitable for projects that need flexible schema, handle large amounts of unstructured data, or require horizontal scaling.
- **MySQL** is ideal for applications requiring structured data, relational integrity, and complex queries with well-defined relationships between entities.

Your choice between MongoDB and MySQL will depend on the specific needs of your application, including data structure, scalability, and performance requirements.

*/



/*
Connect Node With MongoDB
==========================

insall mongodb package
connect mongodb with node js
show dtaa from MongoDB
interview questions

*/


const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const database = "wanderlust";
const client = new MongoClient(url); 

async function getData(){
    let result = await client.connect();  //returns an promise that's why await
    let db = result.db(database);
    let collection = db.collection('listings');
    let response = await collection.find().toArray();  //to handle the promises wait is written
    console.log(response);
}
getData();


/*
can we connect 2 databases in one api?

yes we can ans we will in further lectures
*/