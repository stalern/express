<template>
    <el-row type="flex" justify="center" style="margin-top: 10px">
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round @click="changeRouter('/index')">
                首页
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="warning" round :disabled="disable[0]"
                       @click="changeRouter('/admin/user')">
                查看用户
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="success" round :disabled="disable[1]"
                       @click="changeRouter('/admin/transnode/list')">查看网点
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="primary" round :disabled="disable[1]"
                       @click="changeRouter('/admin/employee/list')">查看员工
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="info" round :disabled="disable[3]"
                       @click="changeRouter('/admin/package')">查看包裹
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round :disabled="disable[3]"
                       @click="changeRouter('/admin/express')">查看快递
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="warning" round :disabled="disable[1]"
                       @click="changeRouter('/admin/transnode/add')">增加网点
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="success" round :disabled="disable[1]"
                       @click="changeRouter('/admin/employee/add')">增加员工
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="primary" round :disabled="disable[4]"
                       @click="changeRouter('/admin/order')">
                生成订单
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round :disabled="disable[5]"
                       @click="changeRouter('/admin/logout')">
                登出
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
    import router from '../../router/router'

    export default {
        name: "AppHeader",
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

<style scoped>

</style>
