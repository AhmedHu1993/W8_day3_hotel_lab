<template>
  <form v-on:submit="handleSubmit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
        
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required>
        
      <label for="check-in-status-true">Checked in?</label>
      <input type="checkbox" id="check-in-status-true" value="true" v-model="checkInStatus">

    <input type="submit">

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
        BookingService.addBooking(newBooking);
        eventBus.$emit("newBooking", newBooking)
     }
 }   
}
</script>

<style>

</style>