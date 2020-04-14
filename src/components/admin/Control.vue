<template>
    <div>
        <el-row style="margin-left: 200px ">
            <el-col :span="4"><el-button class="grid-content" type="warning" round @click="changeFlag(1)">管理用户</el-button></el-col>
            <el-col :span="4"><el-button class="grid-content" type="success" round @click="changeFlag(2)">管理网点</el-button></el-col>
            <el-col :span="4"><el-button class="grid-content" type="info" round @click="changeFlag(3)">录入用户</el-button></el-col>
            <el-col :span="4"><el-button class="grid-content" type="primary" round @click="changeFlag(4)">增加网点</el-button></el-col>
            <el-col :span="4"><el-button class="grid-content" type="danger" round @click="changeFlag(5)">生成订单</el-button></el-col>
        </el-row>
        <el-main>
            <user v-if="flag === 1"></user>
            <transnode v-if="flag === 2"></transnode>
            <add-user v-if="flag === 3"></add-user>
            <add-node v-if="flag === 4"></add-node>
            <print-order v-if="flag === 5"></print-order>
        </el-main>
    </div>
</template>

<script>
    import User from "./control/User.vue"
    import Transnode from "./control/Transnode";
    import AddUser from "./control/AddUser";
    import PrintOrder from "./control/PrintOrder";
    import AddNode from "./control/AddNode";
    export default {
        name: 'Control',
        components: {AddNode, User, Transnode, AddUser, PrintOrder},
        data() {
            return {
                flag: 1
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            changeFlag(flag) {
                this.flag = flag;
            }
        }
    }
</script>
<style>
    .grid-content {
        border-radius: 2px;
        min-height: 40px;
        margin-bottom: 20px;
    }
</style>
