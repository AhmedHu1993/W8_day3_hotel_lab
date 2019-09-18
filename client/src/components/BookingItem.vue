<template>
    <div>
        <p>Name: {{booking.name}} </p>
        <p>Email: {{booking.email}}</p>
        <p>Check-in Status: {{booking.checkInStatus}}</p>
        <button v-on="handleClick()">Delete</button>
    </div>
</template>

<script>
export default {
    name: "booking-item",
    props: ['booking'],
    methods: {
        handleClick() {}
    }
}
</script>

<style>

</style>