<template>
    <div>
        <li>Name: {{booking.name}} </li>
        <li>Email: {{booking.email}}</li>
        <li>Check-in Status: {{booking.checkInStatus}}</li>
    </div>
</template>

<script>
export default {
    name: "booking-item",
    props: ['booking']
}
</script>

<style>

</style>