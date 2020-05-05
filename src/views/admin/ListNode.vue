<template>
    <el-container style="margin-top: 10px;">
        <el-main>
            <el-card>
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                        <el-table
                                :data="user"
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
                                    width="200">
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
    import user from "../../api/user";

    export default {
        name: "Transnode",
        data() {
            return {
                user: [{
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市市辖区黄浦区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
                }, {
                    address: '王大虎快递网点',
                    num: '10',
                    region: '上海市普陀区',
                    phoneNumber: 15263987456,
                    x: 120.2,
                    y: 109
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
