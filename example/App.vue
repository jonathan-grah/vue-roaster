<template>
    <toast></toast>
    <button @click="addToast()">Add Toast</button>
</template>

<script>
    import { Toast } from '../dist/vue-roaster.js';

    export default {
        methods: {
            addToast: () => {
                Toast.methods.addToast("T", 50000);
                Toast.methods.addToast("TESTTESTTETESTSTTESTTESTTESTTESTTESTTEST", 50000);
            }
        },
        components: { Toast }
    }
</script>

<style>
    body {
        font-family: sans-serif;
    }
</style>
