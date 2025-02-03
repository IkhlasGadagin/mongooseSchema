import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: Number,
    price: Number
});


const orderSchema = new mongoose.Schema({
    orderItems:{
        type: [orderItemSchema],
    },
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: "Not Processed",
        enum: [
            "Not Processed",
            "Processing",
            "Dispatched",
            "Cancelled",
            "Completed"
        ]
    },
    orderedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export const Order = mongoose.model("Order", orderSchema);