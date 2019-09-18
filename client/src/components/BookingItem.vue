<template>
    <div>
        <p>Name: {{booking.name}} </p>
        <p>Email: {{booking.email}}</p>
        <p>Check-in Status: {{booking.checkInStatus}}</p>
        <button @click="handleClick(booking._id)">Delete</button>
    </div>
</template>

<script>
import BookingService from '../services/BookingService'
import { eventBus } from '../main'
export default {
    name: "booking-item",
    props: ['booking'],
    methods: {
        handleClick(id) {
            BookingService.deleteBooking(id)
            .then((bookings) => eventBus.$emit("bookingDeleted", bookings))
        }
    }
}
</script>

<style>

</style>