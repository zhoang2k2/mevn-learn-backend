import mongoose, { Schema } from "mongoose";

const SizeSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    size_id: {
        type: String,
        required: true,
    },
});

const Sizes = mongoose.model("sizes", SizeSchema);
export default Sizes;
