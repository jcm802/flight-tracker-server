const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Flight = require("./models/flights");
const app = express();

const localUrl = 'mongodb://127.0.0.1:27017/jcm_projects';
const PORT = 8080;

app.use(cors());

mongoose.connect(localUrl, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.get('/flights', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        // Search
        let query = {};
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

app.get('/flights/arriving_soon', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        let query = { arriving_soon: true };
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

app.get('/flights/arrived', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        let query = { arrived: true };
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

app.get('/flights/departed', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        let query = { departed: true };
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

app.get('/flights/not_departed', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        let query = { not_departed: true };
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

app.get('/flights/delayed', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const search = req.query.search || '';

        // Search
        let query = { delayed: true };
        if (search) {
            query.$or=[
                { 'airline' : { $regex: search, $options: 'i' } },
                { 'departure_airport' : { $regex: search, $options: 'i' } },
                { 'arrival_airport' : { $regex: search, $options: 'i' } },
                { 'departure_date' : { $regex: search, $options: 'i' }},
                { 'arrival_date': { $regex: search, $options: 'i' }},
                { 'departure_time': { $regex: search, $options: 'i' }},
                { 'arrival_time': { $regex: search, $options: 'i' }},
            ]
        }

        // Pagination
        const skip = (page - 1) * limit;
        const paginatedflights = await Flight.find(query).skip(skip).limit(limit);
        const flightsTotal = await Flight.countDocuments(query);

        res.send({ page: page, total_pages: Math.ceil(flightsTotal / limit), limit: limit, total: flightsTotal, flights: paginatedflights });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: true, message: 'Internal Server Error'});
    }
});

// This made an initial flight to then fill the seed data
// app.get("/makeflight", async (req, res) => {
//     const flight = new Flight({ airline: "some airline" });
//     await flight.save();
//     res.send(flight);
    // to make the flight
// });

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});