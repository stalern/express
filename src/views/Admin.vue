<template>
    <login v-if="!flag" ></login>
    <control v-else></control>
</template>

<script>
    import Login from "../components/admin/Login";
    import store from '../store/store';
    import Control from "../components/admin/Control";
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
