import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    subcategoryIds: [{ type: mongoose.Schema.Types.ObjectId, 
    ref: "Subcategory" }], // Array of Subcategory IDs
  },{ timestamps: true});

export const Category = mongoose.model("Category", categorySchema);