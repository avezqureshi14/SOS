const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/product');
const connectToDatabase = require('./db/connection');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('./controllers/product');

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDatabase();

//create product
app.post('/products', createProduct);

// Get all products
app.get('/products', getAllProducts);


// Update a product by ID
app.put('/products/:id', updateProduct);

// Delete a product by ID
app.delete('/products/:id', deleteProduct);


app.listen(8800, () => {
  console.log('Server started on port 8800');
});
