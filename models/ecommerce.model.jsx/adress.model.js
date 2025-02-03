import mongoose from "mongoose";

const adressSchema = new mongoose.Schema({
adress: {
    type: String,
    required: true
},
city: {
    type: String,
    required: true
},
pinCode: {
    type: Number,
    required: true,
    maxlength: 6
}
},
{ timestamps: true}
);

export const Adress = mongoose.model("Adress", adressSchema);