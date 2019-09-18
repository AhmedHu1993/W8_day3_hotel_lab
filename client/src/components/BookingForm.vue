<template>
  <form v-on:submit="handleSubmit" method="POST">
      <div class="form-group">
      <label for="name">Name:</label>
      <input class="form-control" type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
      <label for="email">Email:</label>
      <input class="form-control" type="text" id="email" v-model="email" required>
        </div>
        <div class="form-group">
      <label for="check-in-status-true">Checked in?</label>
      <input class="form-control" type="checkbox" id="check-in-status-true" value="true" v-model="checkInStatus">
        </div>
    <button type="submit" class="btn btn-success">Add Booking</button>
  </form>
</template>

<script>
import  BookingService from '../services/BookingService'
import {eventBus} from '../main'

export default {
    name: "booking-form",
 data() {
     return {
         name: null,
         email: null,
         checkInStatus: false

     }
 },
 methods: {
     handleSubmit(event) {
         event.preventDefault();
        const newBooking = {
            name: this.name,
            email: this.email,
            checkInStatus: this.checkInStatus
        }
        BookingService.addBooking(newBooking)
        .then((docs) => eventBus.$emit("newBookingAdded", docs))

        this.name = null,
        this.email = null,
        this.checkInStatus = false
     }
 }   
}
</script>

<style>

</style>