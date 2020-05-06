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
                <el-button type="warning" icon="el-icon-camera-solid" @click="printOrder">生成二维码</el-button>
            </el-col>
        </el-row>
        <el-card v-if="!flag" style="margin: 98px 350px 98px 350px;">
            <el-row type="flex" justify="center" style="height: 310px">
                <!--                    <span class="title">{{ input }}的二维码</span>-->
                <img style="height: 134px; width: 78px;" :src="url"/>
            </el-row>
        </el-card>
    </el-card>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                flag: true,
                input: '',
                url: 'https://lslwind.oss-cn-beijing.aliyuncs.com/lsl/img/19.png?Expires=1903313452&OSSAccessKeyId=LTAI4GDGXz2hj1ULHTu5DRya&Signature=2Zuazncftx2te6l1UAY9S3DgS6M%3D'
            }
        },
        methods: {
            printOrder() {
                this.flag = false;
            },
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>
