<template>
    <login v-if="flag" ></login>
    <Control v-else></Control>
</template>

<script>
    import Login from "../components/Login";
    import store from '../store/store';
    import Control from "../components/Control";
    export default {
        name: "Admin",
        components: {Control, Login},
        data() {
            return {
                flag: store.state.loginFlag
            }
        }
    }
</script>

<style scoped>

</style>
