import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category_id: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        sizes: {
            type: [String],
            required: true,
        },
        colors: {
            type: [String],
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        reviews: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

const Products = mongoose.model("products", ProductSchema);
export default Products;
