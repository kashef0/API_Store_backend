const Booking = require('../models/bookning');

// hämta bokningar
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// skapa en ny bokning
exports.createBooking = async (req, res) => {
    let { name, date, time, phone, email, Antal_people } = req.body;

    let errors = {
        message: "",
        details: "",
        http_response: {

        }
    }
    if(!name || !date || !time || !phone || !email || !Antal_people) {               // Kontrollera att alla fält är ifyllda
            errors.message = "All fields must be filled",
            errors.details = "You must fill in all fields with information",
            errors.http_response = {
                message: "bad request",
                code: 400
            }
            return res.status(400).json(errors);
        
    }
    try {
        const existingBooking = await Booking.findOne({ name, email, time });
        if (existingBooking) {
            // Om en bokning med samma namn, e-postadress och tid finns, returnera ett felmeddelande

                errors.message = "Bokning finns redan",
                errors.details = "En bokning med samma namn, e-postadress och tid finns redan",
                errors.http_response = {
                    message: "bad request",
                    code: 400
                }
            return res.status(400).json(errors);
        }

        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// uppdatera en befintlig bokning
exports.updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            updatedBooking: updatedBooking,
            message: "Bokning är uppdaterad nu"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// radera en befintlig bokning
exports.deleteBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
