<template>
    <el-container style="margin-top: 10px;">
        <el-aside width="100px">
            <el-button type="primary" style="margin-top: 200px" @click="open">按网点查</el-button>
        </el-aside>
        <el-main>
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
                                    prop="status"
                                    label="状态"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="工作网点"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="phone"
                                    label="电话"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="pwd"
                                    label="密码"
                                    width="220">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="200">
                                <template slot-scope="scope">
                                    <el-button
                                            @click.native.prevent="deleteRow(scope.$index, user)"
                                            type="warning"
                                            size="small">
                                        编辑
                                    </el-button>
                                    <el-button
                                            @click.native.prevent="deleteRow(scope.$index, user)"
                                            type="danger"
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
        </el-main>
    </el-container>
</template>

<script>
    import user from '../../api/user';
    export default {
        name: "ListEmployee",
        data() {
            return {
                total: 20,
                page:2,
                size:8,
                user: [{
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }, {
                    name: '王小虎',
                    pwd: '52fdsa5sd6afd2sf2',
                    status: '工作中',
                    address: '上海市普陀区金沙江路 ',
                    phone: 15269874532
                }]
            }
        },
        methods: {
            listUser(page, size) {
                user.listUser(page, size).then(function (response) {
                    response
                })
            },
            open() {
                this.$prompt('请输入网点', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的网点是: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .mar {
        margin-top: 100px;
    }
</style>
