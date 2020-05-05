<template>
    <el-container>
        <el-header style="background-color: #edf7df">
           <app-header></app-header>
        </el-header>
        <el-main>
            <app-main></app-main>
        </el-main>
    </el-container>
</template>

<script>

    import AppMain from "./AppMain";
    import router from '../../router/router'
    import AppHeader from "./AppHeader";
    export default {
        name: 'Index',
        components: {AppHeader, AppMain},
        data() {
            return {
                flag: 1,
                disable: [false, false, false, false, false, false]
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            changeRouter(path) {
                router.push(path)
            }
        }
    }
</script>
<style>
</style>
