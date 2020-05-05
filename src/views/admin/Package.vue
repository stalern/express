<template>
    <el-container style="margin-top: 10px;">
        <el-aside width="100px">
            <el-button type="info" style="margin-top: 200px" @click="open">按网点查</el-button>
        </el-aside>
        <el-main>
            <el-card>
                <el-row type="flex" justify="center">
                    <el-col :span="22">
                        <el-table
                                :data="user"
                                style="width: 200%"
                                height="522px"
                                max-height="522px">
                            <el-table-column
                                    fixed
                                    prop="name"
                                    label="负责人"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="num"
                                    label="快件数量"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="包裹状态"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="sendAdd"
                                    label="发送网点"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="recAdd"
                                    label="接收网点"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="beginTime"
                                    label="打包时间"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="endTime"
                                    label="拆包时间"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100">
                                <template slot-scope="scope">
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
        name: "Package",
        data() {
            return {
                total: 20,
                page:2,
                size:8,
                user: [{
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
                }, {
                    name: '王小虎',
                    status: '已拆包',
                    sendAdd: '北京市市辖区东城区',
                    recAdd: '内蒙古自治区呼和浩特市新城区',
                    num: '2',
                    beginTime: '2020-04-10 18:13:09',
                    endTime: '2020-04-10 21:56:58'
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
                this.$prompt('请输入邮箱', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的邮箱是: ' + value
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
