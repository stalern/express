<template>
    <el-row type="flex" justify="center" style="margin-top: 10px">
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round @click="changeRouter('/index')">首页
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="warning" round :disabled="disable[0]"
                       @click="changeRouter(0)">查看用户
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="success" round :disabled="disable[1]"
                       @click="changeRouter(1)">查看网点
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="primary" round :disabled="disable[2]"
                       @click="changeRouter(2)">查看员工
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="info" round :disabled="disable[3]"
                       @click="changeRouter(3)">查看包裹
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round :disabled="disable[4]"
                       @click="changeRouter(4)">查看快递
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="warning" round :disabled="disable[5]"
                       @click="changeRouter(5)">增加网点
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="success" round :disabled="disable[6]"
                       @click="changeRouter(6)">增加员工
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="primary" round :disabled="disable[7]"
                       @click="changeRouter(7)">生成订单
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="grid-content" type="danger" round
                       @click="changeRouter('logout')">登出
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
    import router from '../../router/router'
    import store from '../../store/store'
    export default {
        name: "AppHeader",
        data() {
            return {
                flag: 1,
                disable: [false, false, false, false, false, false, false, false]
            }
        },
        methods: {
            changeRouter(path) {
                if (path !== '/index' && path !== 'logout') {
                    this.disable[this.flag] = false;
                    this.flag = path;
                    this.disable[path] = true;
                }
                if (path === 0) {
                    path = '/admin/user'
                } else if (path === 1) {
                    path = '/admin/transnode/list'
                } else if (path === 2) {
                    path = '/admin/employee/list'
                }else if (path === 3) {
                    path = '/admin/package'
                } else if (path === 4) {
                    path = '/admin/express'
                }else if (path === 5) {
                    path = '/admin/transnode/add'
                } else if (path === 6) {
                    path = '/admin/employee/add'
                }else if (path === 7) {
                    path = '/admin/order'
                } else if (path === 'logout') {
                    path = '/index';
                    store.commit('logout');
                }
                router.push(path);
            }
        }
    }
</script>

<style scoped>

</style>
