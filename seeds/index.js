const mongoose = require("mongoose");
const Flight = require("../models/flights");
const flightSeeds = require("./flights");

mongoose.connect('mongodb://127.0.0.1:27017/jcm_projects', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Flight.deleteMany({});
    flightSeeds.forEach(async (el) => {
        const flight = new Flight({
            airline: el.airline,
            passengers: el.passengers,
            altitude_lat: el.altitude_lat,
            altitude_lon: el.altitude_lon,
            flight_number: el.flight_number,
            departure_airport: el.departure_airport,
            arrival_airport: el.arrival_airport,
            departure_date: el.departure_date,
            arrival_date: el.arrival_date,
            departure_time: el.departure_time,
            arrival_time: el.arrival_time,
            duration: el.duration,
            passenger_count: el.passenger_count,
            arrived: el.arrived,
            arriving_soon: el.arriving_soon,
            departed: el.departed,
            not_departed: el.not_departed,
            delayed: el.delayed,
        })
        await flight.save();
    })
}

seedDB().then(() => {
    mongoose.connection.close();
});