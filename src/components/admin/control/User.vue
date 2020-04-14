<template>
    <el-card>
        <el-row type="flex" justify="center">
            <el-col :span="20">
                <el-table
                        :data="user"
                        style="width: 200%"
                        height="522px"
                        max-height="522px">
                    <el-table-column
                            fixed
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="role"
                            label="角色"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="状态"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="电话"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="deleteRow(scope.$index, user)"
                                    type="warning"
                                    size="small">
                                移除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-pagination layout="prev, pager, next" :total="total" :current-page="page" :page-size="size"
                       @current-change="currentChange" @prev-click="page=page-1" @next-click="page=page+1">
        </el-pagination>
    </el-card>
</template>

<script>
    import user from "../../../api/user";
    export default {
        name: "User",
        data() {
            return {
                user: [{
                    name: '王小虎',
                    role: '管理员',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '用户',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '快递员',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '用户',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '用户',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '用户',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '用户',
                    status: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }]
            }
        },
        methods: {
            listUser(page, size) {
                user.listUser(page, size).then(function (response) {
                    response
                })
            }
        }
    }
</script>

<style scoped>

</style>
