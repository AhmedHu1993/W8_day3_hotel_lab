<template>
  <div id="app">
    <booking-form />
    <h1>Booking List</h1>
    <booking-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingService from './services/BookingService'
import BookingForm from './components/BookingForm'
import BookingGrid from './components/BookingGrid.vue'
import { eventBus } from './main'

export default {
  name: 'app',
  components: {
    'booking-grid': BookingGrid,
    'booking-form': BookingForm
  },
  data() {
    return{
      bookings: []
    }
  },
  mounted(){
    BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    
    eventBus.$on("newBookingAdded", bookings => this.bookings = bookings)
  }
}
</script>

<style>
</style>
