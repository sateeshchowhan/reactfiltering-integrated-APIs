const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const productsRoute = require('./routes/products')
const cartRoute = require('./routes/cart');

const PORT = 4000;

const app = express();

dotenv.config()
main().catch(err => console.log(err));

async function main() {
   await mongoose.connect(process.env.MONGOOSE_URI)
    console.log("database connected")
}

app.use(cors())
app.use(express.json())


//using neccessary routes
app.use('/products',productsRoute)
app.use("/cart", cartRoute)


app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);