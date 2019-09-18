<template>
  <div> 
    <ul v-for="booking in bookings" :key="booking._id">
      <booking-item :booking="booking"/>
    </ul>
  </div>
</template>

<script>
import BookingItem from './BookingItem'
export default {
  name: 'booking-grid',
  props: ['bookings'],
  components: {
    "booking-item": BookingItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
