import mongoose from "mongoose"; 

const doctorTimeInHospital= new mongoose.Schema({

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    }
}

,{timestamps}
)
const doctorSchema = new mongoose.Schema({
    worksInHospital: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    name: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

},{timestamps: true});

export const Doctor =mongoose.model("Doctor", doctorSchema);