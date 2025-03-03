import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    qrCode: {
        type: String,
        required: true
    },
    timestamps: [{
        type: Date,
        default: Date.now
    }]
});

const Student = model('Student', studentSchema);

export default Student;