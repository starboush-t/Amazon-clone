/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import process from "process";
import orderRouter from "./router/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

/*app.get('/api/products', (req,res) => {
    res.send(data.products);
})*/

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});
/*
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id)
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "Product Not Found"});
    }
})*/

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
