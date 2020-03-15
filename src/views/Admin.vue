<template>
    <login v-if="flag" ></login>
    <Control v-else></Control>
</template>

<script>
    import Login from "../components/Login";
    import Control from "../components/Control";
    export default {
        name: "Admin",
        components: {Control, Login},
        data() {
            return {
                flag: false
            }
        }
    }
</script>

<style scoped>

</style>
