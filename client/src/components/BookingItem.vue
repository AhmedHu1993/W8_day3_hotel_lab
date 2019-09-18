<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">{{booking.name}} </h3>
            <div class="card-text"> 
                <p>Email: {{booking.email}}</p>
                <p>Check-in Status: {{booking.checkInStatus}}</p>
            </div>
            <button class="btn btn-danger" @click="handleClick(booking._id)">Delete</button>
        </div>
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