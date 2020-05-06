<template>
    <el-container style="margin-top: 10px;">
        <el-main>
            <el-card>
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                        <el-table
                                :data="node"
                                style="width: 100%"
                                height="522px"
                                max-height="522px">
                            <el-table-column
                                    fixed
                                    prop="address"
                                    label="名称"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="num"
                                    label="员工数量"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="region"
                                    label="地址"
                                    width="270">
                            </el-table-column>
                            <el-table-column
                                    prop="phoneNumber"
                                    label="电话"
                                    width="150">
                            </el-table-column>
                            <el-table-column
                                    prop="x"
                                    label="x坐标"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="y"
                                    label="y坐标"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    fixed="right"
                                    align="center"
                                    label="操作"
                            width="120">
                                <template slot-scope="scope">
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
    import node from "../../api/transnode";

    export default {
        name: "Transnode",
        data() {
            return {
                total : 0,
                page: 1,
                size: 8,
                node: []
            }
        },
        methods: {
            listNode(page, size) {
                let _this = this;
                node.listNode(page, size).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.total = data.totalNum;
                    _this.page = data.currPage;
                    _this.node = data.obj;
                })
            },
            currentChange (page) {
                this.page = page;
                this.listNode(page, this.size);
                scrollTo(0, 0)
            },
            deleteRow(index, nodeId) {
                this.node.splice(index, 1);
                let _this = this;
                node.deleteNode(nodeId).then(function () {
                    _this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                })
            }
        },
        mounted() {
            this.listNode(this.page, this.size);
        }
    }
</script>

<style scoped>

</style>
