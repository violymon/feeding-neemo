<template>
    <form>
        <label>Futtersorte: </label>
        <input type="text">
        <p>Verfügbare Shops: </p>
        <input type="checkbox">
        <label>Katzenkontor</label>
        <input type="checkbox">
        <label>Zooplus</label>
        <input type="checkbox">
        <label>Bitiba</label>
        <button @click="submitForm()" type='button' class="btn btn-block">Snack?</button>
    </form>
</template>

<script>
export default {
    name: 'Form',
    methods: {
        submitForm() {
            this.$emit('submit-form')
        }
    }
}
</script>