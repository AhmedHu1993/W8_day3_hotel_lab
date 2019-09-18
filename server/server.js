const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('hotel');
        const bookings = db.collection('bookings');
        const bookingsRouter = createRouter(bookings);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.error);

app.listen(3000, function () {
    console.log(`Listening on port ${this.address().port}`);
});