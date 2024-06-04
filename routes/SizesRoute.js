import Sizes from "../model/SizeModel.js";
import express from "express";

const SizesRoute = express.Router();

SizesRoute.get("/", async (request, response) => {
    try {
        const sizes = await Sizes.find();
        if (!sizes.length) {
            return response.status(404).json({ error: "not found sizes" });
        }
        response.status(200).json(sizes);
    } catch (error) {
        response.status(400).json({ err: error });
    }
});

export default SizesRoute;
