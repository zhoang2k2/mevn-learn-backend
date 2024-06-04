import express from "express";
import Products from "../model/ProductModel.js";

const ProductsRoute = express.Router();

ProductsRoute.get("/", async (request, response) => {
    try {
        const products = await Products.find();
        if (!products) {
            return response.status(404).json(products);
        }
        return response.status(200).json(products);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default ProductsRoute;