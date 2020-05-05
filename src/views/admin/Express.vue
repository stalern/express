<template>
    <el-container style="margin-top: 10px;">
        <el-aside width="120px">
            <el-button style="margin-top: 100px" @click="open">按发件人查</el-button>
            <br/>
            <el-button class="mar">按收件人查</el-button>
            <el-button class="mar">按包裹查</el-button>
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
                                    prop="sender"
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
                                    prop="receiver"
                                    label="收件人"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    prop="senderAddr"
                                    label="发件人地址"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverAddr"
                                    label="收件人地址"
                                    width="250">
                            </el-table-column>
                            <el-table-column
                                    prop="senderNumber"
                                    label="发件人电话"
                                    width="200">
                            </el-table-column>
                            <el-table-column
                                    prop="receiverNumber"
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
    import user from '../../api/user';
    export default {
        name: "Express",
        data() {
            return {
                user: [ {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
                }, {
                    sender: '王星星',
                    receiver: '吕俊桥',
                    senderNumber: '12365478963',
                    receiverNumber: '12365478963',
                    senderAddr: '北京市北京市海淀区白家疃',
                    receiverAddr: '郑州大学',
                    weight: '40',
                    cost: '100',
                    status: '运输中',
                    beginTime: '2020-04-26 14:23:33',
                    endTime: '无'
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
