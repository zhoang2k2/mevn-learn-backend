// index.js
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import ProductsRoute from "./routes/ProductsRoute.js";
import { PORT, mongoDB } from "./config.js"
import CustomersRoute from "./routes/CustomersRoute.js";
import SizesRoute from "./routes/SizesRoute.js";
import CategoriesRoute from "./routes/CategoriesRoute.js";

const app = express();

// Middleware
app.use(json());
app.use(cors());

app.get("/", (require, response) => {
    console.log(require);
    return response.status(234).send("this is MEVN Project!");
});

// Use Routes
app.use("/api/products", ProductsRoute)
app.use("/api/customers", CustomersRoute)
app.use("/api/sizes", SizesRoute)
app.use("/api/categories", CategoriesRoute)

// Start server
mongoose
    .connect(mongoDB)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });