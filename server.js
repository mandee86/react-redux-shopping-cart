const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

// initialize mongo db
// mongoose.connect("mongodb://127.0.0.1:27017/react-shopping-cart-db", {
mongoose.connect("mongodb+srv://andee86:gemini860522@cluster0.wmyqt.mongodb.net/react-shopping-cart-db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// models
// 2 parameters
//  1. parameter: name of this model in the database (get)
//  2. parameter: the list of props of this model into the database (post)
const Product = mongoose.model("products", new mongoose.Schema({
  _id: { type: String, default: shortid.generate },
  image: String,
  title: String,
  description: String,
  price: Number,
  availableSizes: [String],
}))

// end points
app.get("/api/products", async (req, res) => {

  // get the products from db
  // ({}) -> it means every products, without condition
  const products = await Product.find({});

  // send the datas to client
  res.send(products);
})

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);

  // save in db
  const savedProduct = await newProduct.save();

  // send the datas to client
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  // delete from db by id
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  // send the datas to client
  res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"))