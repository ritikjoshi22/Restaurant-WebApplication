import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, time, phone } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Provide a valid email!' });
  }

  if (phone.length !== 10 || isNaN(phone)) {
    return res.status(400).json({ success: false, message: 'Phone number must contain 10 Digits.' });
  }
    if (!firstName || !lastName || !email || !phone || !date || !time) return next(new ErrorHandler("Please fill full reservation form!", 400));

    try {
        await Reservation.create({firstName, lastName, email, date, time, phone});
        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }
        return next(error);
    }
};