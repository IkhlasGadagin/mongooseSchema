import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    medicalreportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medical",
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
        maxlength: 6
    },
    state: {
        type: String,
        required: true,
    },
    specializedIn:[{
        type: String,
        required: true,
    }]
},{timestamps: true});

export const Hospital=mongoose.model("Hospital",hospitalSchema);