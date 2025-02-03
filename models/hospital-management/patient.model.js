import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    roportId: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "Report",
    },
    underDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    whichHospital:{
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        
    },  
    gender: {
        type: String,  
        enum: ["M", "F", "O"],  // "M" for Male, "F" for Female, "O" for Other
        required: true
    },
    diagnosisWith: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        unique: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"]
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
                
},{timestamps: true});

export const Patient =mongooge.model("Patient",PatientSchema)