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
                            label="名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="role"
                            label="员工数量"
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
        name: "Transnode",
        data() {
            return {
                user: [{
                    name: '王大虎',
                    role: '1',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '3',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '5',
                    status: '关门',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '5',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '10',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: 200333
                }, {
                    name: '王小虎',
                    role: '6',
                    status: '工作中',
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
