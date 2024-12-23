/*
CRUD with Mongoose

continue last video code, what is mongoose, model, schema, etc
update record
delete record
find and read result

*/

// const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/wanderlust");
//   const listingSchema = new mongoose.Schema({
//     title: String,
//     name: String,
//     price: Number,
//     brand: String,
//     Category: String,
//   });

//   const listingModel = mongoose.model("listings", listingSchema);
//   let data = new listingModel({
//     title: "ABC",
//     price: 200,
//     brand: "gucci",
//     Category: "Mobile",
//   });
//   let result = data.save();
//   console.log(result);
// };

// main();



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'max pro 611'})
    console.log(data);
}

findInDB();