const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightsSchema = new Schema({
    airline: String,
    passengers: Number,
    altitude_lat: Number,
    altitude_lon: Number,
    flight_number: Number,
    departure_airport: String,
    arrival_airport: String,
    departure_date: String,
    arrival_date: String,
    departure_time: String,
    arrival_time: String,
    duration: Number,
    passenger_count: Number,
    arrived: Boolean,
    arriving_soon: Boolean,
    departed: Boolean,
    not_departed: Boolean,
    delayed: Boolean,
});

module.exports = mongoose.model('Flights', FlightsSchema);