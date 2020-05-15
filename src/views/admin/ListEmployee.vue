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
                                                @click="handleEdit(scope.row.id, scope.row.phoneNumber, scope.row.status, scope.row.name)"
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
                <el-drawer
                        :title="form.title"
                        :visible.sync="drawer"
                        :direction="direction"
                        size="20%">
                    <el-form :inline="true" :model="form" class="demo-form-inline">
                        <el-form-item label="手机号">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-select v-model="form.status">
                                <el-option label="工作中" value="2"></el-option>
                                <el-option label="休息中" value="0"></el-option>
                                <el-option label="注册中" value="1"></el-option>
                                <el-option label="管理员" value="100"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="warning" @click="onSubmit">更新</el-button>
                        </el-form-item>
                    </el-form>
                </el-drawer>
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
                type : 0, // 0是listEmployee， 1是inNode
                value: '',
                size: 8,
                user: [],
                direction: 'ttb',
                drawer: false,
                form: {
                    id: '',
                    title: '',
                    phone: '',
                    status: ''
                }
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
                    _this.change();
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
                    _this.change();
                })
            },
            currentChange (page) {
                this.page = page;
                if (this.type === 0) {
                    this.listUser(page, this.size);
                } else {
                    this.listUserInNode(this.value, page, this.size);
                }
                scrollTo(0, 0)
            },
            handleEdit(id, phone, status, name) {
                this.form.phone = phone;
                this.form.status = status;
                this.form.id = id;
                this.form.title = "修改" + name + "的信息";
                this.drawer = true;
            },
            onSubmit() {
                let _this = this;
                user.updateUser(this.form.id, this.form.phone, this.form.status).then(function () {
                    location.reload()
                    _this.$message({
                        type: 'success',
                        message: '更新' + _this.form.title + '信息成功'
                    });
                })
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
                    this.page = 1;
                    this.type = 1;
                    this.value = value;
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
            },
            change() {
                let _this = this;
                for (let i = 0; i < _this.user.length; i ++) {
                    let st = _this.user[i].status;
                    if (st === 0) {
                        _this.user[i].status = '休息中'
                    } else if (st === 1) {
                        _this.user[i].status = '注册中'
                    } else if (st === 2) {
                        _this.user[i].status = '工作中'
                    } else {
                        _this.user[i].status = '管理员'
                    }
                    let gen = _this.user[i].gender;
                    if (gen === 0) {
                        _this.user[i].gender = '未知';
                    } else if (gen === 1) {
                        _this.user[i].gender = '男'
                    } else {
                        _this.user[i].gender = '女'
                    }
                }
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
