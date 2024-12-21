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
*/

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

app.listen(5000);