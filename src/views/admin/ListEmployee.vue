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
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="gender"
                                    label="性别"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="workTransnode"
                                    label="工作网点"
                                    width="300">
                            </el-table-column>
                            <el-table-column
                                    prop="phoneNumber"
                                    label="电话"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="password"
                                    label="密码"
                                    width="270">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="200">
                                <template slot-scope="scope">
                                    <el-button
                                            type="warning"
                                            size="small">
                                        编辑
                                    </el-button>
                                    <el-button
                                            @click.native.prevent="deleteRow(scope.$index, scope.row.id)"
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
                total : 0,
                page: 1,
                size: 8,
                user: []
            }
        },
        methods: {
            listUser(page, size) {
                let _this = this;
                user.listEmployee(page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.user = data.obj;
                })
            },
            listUserInNode(node, page, size) {
                let _this = this;
                user.listEmployeeInNode(node, page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.user = data.obj;
                })
            },
            currentChange (page) {
                this.page = page;
                this.listUser(page, this.size);
                scrollTo(0, 0)
            },
            deleteRow(index, userId) {
                this.user.splice(index, 1);
                let _this = this;
                user.delete(userId).then(function () {
                    _this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                })
            },
            open() {
                this.$prompt('请输入网点', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.listUserInNode(value, this.page, this.size);
                    this.$message({
                        type: 'success',
                        message: '获取数据成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        },
        mounted() {
            this.listUser(this.page, this.size)
        }
    }
</script>

<style scoped>
    .mar {
        margin-top: 100px;
    }
</style>
