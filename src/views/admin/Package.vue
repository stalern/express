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
                                :data="packages"
                                style="width: 200%"
                                height="522px"
                                max-height="522px">
                            <el-table-column
                                    fixed
                                    prop="id"
                                    label="包裹ID"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="personLiableId"
                                    label="负责人"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="expressCount"
                                    label="快件数量"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="包裹状态"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="senderTransportNodeId"
                                    label="发送网点"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverTransportNodeId"
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
                                            @click.native.prevent="deleteRow(scope.$index)"
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
    import express from "../../api/express";
    export default {
        name: "Package",
        data() {
            return {
                total: 0,
                page:1,
                size:8,
                type: 1,
                value: '',
                packages: []
            }
        },
        methods: {
            listPackage(page, size) {
                let _this = this;
                express.listPackage(page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.packages = data.obj;
                })
            },
            listPackageInNode(node, page, size) {
                let _this = this;
                express.listPackageInNode(node, page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.packages = data.obj;
                })
            },
            currentChange (page) {
                this.page = page;
                if (this.type === 1) {
                    this.listPackage(page, this.size);
                } else {
                    this.listPackageInNode(this.value, page, this.size);
                }
                scrollTo(0, 0)
            },
            deleteRow(index) {
                this.packages.splice(index, 1);
            },
            open() {
                this.$prompt('请输入网点', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({ value }) => {
                    this.page = 1;
                    this.type = 1;
                    this.value = value;
                    this.listPackageInNode(value, 1, this.size);
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
            this.listPackage(this.page, this.size)
        }
    }
</script>

<style scoped>
</style>
