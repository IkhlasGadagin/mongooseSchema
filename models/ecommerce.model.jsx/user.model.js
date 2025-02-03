import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true
    },
    adressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Adress"

    },
   
}, {timestamps: true
});

export const User=  mongoose.model("User", UserSchema);