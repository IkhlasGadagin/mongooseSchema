import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, // Reference to Category
    subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory", required: true }, // Reference to Subcategory
    images: [{ type: String }], // Array of image URLs
   
  },
  { timestamps: true}
);

export const Product = mongoose.model("Product", productSchema);