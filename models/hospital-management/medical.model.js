import mongoose from "mongoose";

const MedicalSchema = new mongoose.Schema(
    {
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        visitDate: {
            type: Date,
            required: true,
            default: Date.now
        },
        symptoms: {
            type: [String], // List of symptoms reported by the patient
            default: []
        },
        diagnosis: {
            type: String, // Final diagnosis by the doctor
            trim: true
        },
        prescription: [
            {
                medicineName: { type: String, required: true, trim: true },
                dosage: { type: String, required: true, trim: true }, // e.g., "1 tablet twice a day"
                duration: { type: String, required: true, trim: true }, // e.g., "5 days"
                instructions: { type: String, trim: true } // e.g., "Take after meals"
            }
        ],
        testsRecommended: [
            {
                testName: { type: String, required: true, trim: true },
                testDate: { type: Date },
                results: { type: String, trim: true } // Store results if available
            }
        ],
        allergies: {
            type: [String], // Any allergies noted during the visit
            default: []
        },
        vitalSigns: {
            bloodPressure: { type: String, trim: true }, // e.g., "120/80 mmHg"
            heartRate: { type: Number, min: 30, max: 250 }, // Beats per minute
            temperature: { type: Number, min: 90, max: 110 }, // In Fahrenheit
            oxygenSaturation: { type: Number, min: 70, max: 100 } // In percentage
        },
        surgeryHistory: [
            {
                surgeryName: { type: String, trim: true },
                surgeryDate: { type: Date },
                notes: { type: String, trim: true }
            }
        ],
        chronicConditions: {
            type: [String], // E.g., "Diabetes", "Hypertension"
            default: []
        },
        nextAppointment: {
            type: Date
        },
        doctorNotes: {
            type: String,
            trim: true
        },
        isEmergency: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export const Medical = mongoose.model("Medical", MedicalSchema);
