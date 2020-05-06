<template>
    <el-container style="margin-top: 10px;">
        <el-aside width="110px">
            <el-button type="success" style="margin-top: 100px">按发件查</el-button>
            <br/>
            <el-button type="primary" class="mar">按收件人</el-button>
            <el-button type="warning" class="mar" @click="open">按包裹查</el-button>
        </el-aside>
        <el-main>
            <el-card>
                <el-row type="flex" justify="center">
                    <el-col :span="22">
                        <el-table
                                :data="express"
                                style="width: 200%"
                                height="522px"
                                max-height="522px">
                            <el-table-column
                                    fixed
                                    prop="id"
                                    label="订单号"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="senderId"
                                    label="发件人"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="cost"
                                    label="花费"
                                    width="50">
                            </el-table-column>
                            <el-table-column
                                    prop="weight"
                                    label="重量"
                                    width="50">
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="状态"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverId"
                                    label="收件人"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="senderAddress"
                                    label="发件人地址"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverAddress"
                                    label="收件人地址"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="senderPhoneNumber"
                                    label="发件人电话"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverPhoneNumber"
                                    label="收件人电话"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="beginTime"
                                    label="揽收时间"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="endTime"
                                    label="结束时间"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="120">
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
    import express from '../../api/express';
    export default {
        name: "Express",
        data() {
            return {
                total : 0,
                page: 1,
                size: 8,
                express: []
            }
        },
        methods: {
            listExpress(page, size) {
                let _this = this;
                express.listExpress(page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.express = data.obj;
                })
            },
            listExpressInNode(node, page, size) {
                let _this = this;
                express.listExpressInPackage(node, page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.user = data.obj;
                })
            },
            currentChange (page) {
                this.page = page;
                this.listExpress(page, this.size);
                scrollTo(0, 0)
            },
            deleteRow(index, expressId) {
                this.express.splice(index, 1);
                let _this = this;
                express.delete(expressId).then(function () {
                    _this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                })
            },
            open() {
                this.$prompt('请输入包裹Id', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.listExpressInNode(value, this.page, this.size);
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
            this.listExpress(this.page, this.size)
        }
    }
</script>

<style scoped>
    .mar {
        margin-top: 100px;
    }
</style>
