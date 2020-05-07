<template>
    <el-card style="margin-top: 30px">
        <el-row v-if="flag" :gutter="1" justify="center" style="margin: 200px 0 310px 0">
            <el-col :span="8" :offset="6">
                <el-input type="success"
                          placeholder="请输入订单号"
                          v-model="input"
                          clearable>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="warning" icon="el-icon-camera-solid" @click="printOrder">生成订单</el-button>
            </el-col>
        </el-row>
        <el-card v-if="!flag" style="margin: 98px 350px 98px 350px;">
            <el-row type="flex" justify="center" style="height: 310px">
                <img style="height: 134px; width: 78px;" :src="url"/>
            </el-row>
        </el-card>
    </el-card>
</template>

<script>
    import express from "../../api/express";

    export default {
        name: "Order",
        data() {
            return {
                flag: true,
                input: '',
                url: ''
            }
        },
        methods: {
            printOrder() {
                this.flag = false;
                let _this = this;
                express.getExpress(this.input).then(function (response) {
                    let data = response.data.data;
                    console.log(data);
                    _this.url = data.barCode;
                })

            }
        }
    }
</script>

<style scoped>

</style>
