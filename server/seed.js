require('dotenv').config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect((process.env.MONGODB))
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const products = [
  { name:"Laptop", description:"High performance laptop", price:50000, image:"https://m.media-amazon.com/images/I/418q1W3-mcL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name:"Phone", description:"Smartphone with great camera", price:20000, image:"https://m.media-amazon.com/images/I/31Nw+Wn6xrL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name:"Headphones", description:"Noise cancelling headphones", price:2000, image:"https://m.media-amazon.com/images/I/31ztpzzaDSL._SY300_SX300_QL70_FMwebp_.jpg" },
  { name:"Keyboard", description:"Mechanical keyboard", price:1500, image:"https://m.media-amazon.com/images/I/313QHRjl6mL._SX300_SY300_QL70_FMwebp_.jpg" },
];

Product.insertMany(products)
  .then(() => { console.log("Products inserted"); mongoose.connection.close(); })
  .catch(err => console.log(err));
