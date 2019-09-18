<template>
  <div id="app">
    <h1 class="jumbotron text-center">The Grand Budapest</h1>
    <div class="container-fluid">
      <booking-form id="booking-form"/>
      <br>
      <booking-grid class="row" :bookings="bookings" />
    </div>
  </div>
</template>

<script>
import BookingService from "./services/BookingService";
import BookingForm from "./components/BookingForm";
import BookingGrid from "./components/BookingGrid.vue";
import { eventBus } from "./main";

export default {
  name: "app",
  components: {
    "booking-grid": BookingGrid,
    "booking-form": BookingForm
  },
  data() {
    return {
      bookings: []
    };
  },
  mounted() {
    BookingService.getBookings().then(bookings => (this.bookings = bookings));

    eventBus.$on("newBookingAdded", bookings => (this.bookings = bookings));

    eventBus.$on("bookingDeleted", bookings => (this.bookings = bookings));
  }
};
</script>

<style>
</style>
