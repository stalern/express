<template>
    <el-header v-if="flag === '1'" style="height: 600px; width: 600px; margin-left: 100px; text-align: left">
        <el-main style="border:1px dashed #2c3e50; text-align: center;">
            <b>快递订单：{{express.id}}</b>
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            收件人姓名：{{express.receiverName}}
            <br>收件人地址：{{express.receiverAddress}}
            <br>收件人电话：{{express.receiverPhoneNumber}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            发件人姓名：{{express.senderName}} <br>
            发件人地址：{{express.senderAddress}} <br>
            发件人电话：{{express.senderPhoneNumber}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            快递类型：{{express.type}} <br>
            快递花费：{{express.cost}} 软妹币<br>
            快递重量：{{express.weight}} kg
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            开始时间：{{express.beginTime}} <br>
            结束时间：{{express.endTime}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;text-align: center">
            条形码 <br>
            <img :src="express.barCode" alt="条形码" style="height: 134px; width: 78px; margin-top: 5px">
        </el-main>
    </el-header>
    <el-header v-else style="height: 600px; width: 600px; margin-left: 100px; text-align: left">
        <el-main style="border:1px dashed #2c3e50; text-align: center;">
            <b>包裹订单： {{packages.id}}</b>
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            目的网点：{{packages.receiverTransportNodeId}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            发件网点：{{packages.senderTransportNodeId}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            负责人：{{packages.personLiableName}} <br>
            电话：{{packages.personLiableNum}}<br>
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            包裹状态：{{packages.status}} <br>
            快递个数：{{packages.expressCount}}<br>
        </el-main>
        <el-main style="border:1px dashed #2c3e50;">
            装包时间：{{packages.beginTime}} <br>
            拆包时间：{{packages.endTime}}
        </el-main>
        <el-main style="border:1px dashed #2c3e50;text-align: center">
            条形码 <br>
            <img :src="packages.barCode" alt="条形码暂未生成，稍后再试~" style="height: 134px; width: 78px; margin-top: 5px">
        </el-main>
    </el-header>
</template>

<script>
    import express from "../../api/express";

    export default {
        name: "ListOrder",
        data() {
            return {
                express: {},
                packages: {},
                id: 0,
                flag: 0
            }
        },
        methods: {
            getExpress() {
                let _this = this;
                express.getExpress(this.id).then(function (response) {
                    let data = response.data.data;
                    if (response.data.code === 30001) {
                        alert('快件不存在，请返回上级页面')
                    }
                    console.log(data);
                    _this.express = data;
                })
            },
            getPackage() {
                let _this = this;
                express.getPackage(this.id).then(function (response) {
                    let data = response.data.data;
                    if (response.data.code === 30002) {
                        alert('包裹不存在，请返回上级页面')
                    }
                    console.log(data);
                    _this.packages = data;
                })
            }
        },
        mounted() {
            let data = this.$route.params.id;
            this.flag = data.substr(0,1);
            this.id = data.substr(1);
            if (this.flag === '1') {
                this.getExpress();
            } else {
                this.getPackage();
            }
        }
    }
</script>

<style scoped>
</style>
