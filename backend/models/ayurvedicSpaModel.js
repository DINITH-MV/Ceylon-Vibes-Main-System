import mongoose from "mongoose";

const ayurvedicspaschema = mongoose.Schema(
    {
    topic: {
    type: String,
    required: true,
    },
    
    description: {
    type: String,
    required: true,
    },
    
    Time: {
    type: String,
    required: true,
    },

    Price: {
    type: String,
    required: true,
    },
    },
    {
        timestamps: true,
    }
    );


export const AyurvedicSpa = mongoose.model('ayurweidicspa',ayurvedicspaschema);