use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Graham",
        email: "graham@codeclan.com",
        checkInStatus: false
    },
    {
        name: "Ted",
        email: "ted@codeclan.com",
        checkInStatus: true
    },
    {
        name: "Ahmed",
        email: "ahmed@codeclan.com",
        checkInStatus: false
    }
]);