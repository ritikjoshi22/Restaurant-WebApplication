import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name must contain at most 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name must contain at most 30 characters!"],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
    },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;