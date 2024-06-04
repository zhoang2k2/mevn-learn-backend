import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
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
});

const Category = mongoose.model("categories", CategorySchema);
export default Category;
