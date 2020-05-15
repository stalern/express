<template>
    <el-card style="margin-top: 30px">
        <el-row :gutter="1" justify="center" style="margin: 200px 0 310px 0">
            <el-col :span="8" :offset="6">
                <el-input type="success"
                          placeholder="请输入订单号"
                          v-model="input"
                          clearable>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="warning" icon="el-icon-camera-solid" @click="gotoListOrder(0)">生成包裹</el-button>
            </el-col>
            <el-col :span="1">
                <el-button type="success" icon="el-icon-camera-solid" @click="gotoListOrder(1)">生成快递</el-button>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                input: '',
            }
        },
        methods: {
            gotoListOrder(flag) {
                this.$router.push({
                    name:'ListOrder',
                    params: {id: flag + this.input}
                });
            }
        }
    }
</script>

<style scoped>

</style>
