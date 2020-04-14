<template>
    <el-card>
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
                    <el-avatar shape="square" :size="310" :src="url"></el-avatar>
            </el-row>
        </el-card>
    </el-card>
</template>

<script>
    export default {
        name: "PrintOrder",
        data() {
            return {
                flag: true,
                input: '',
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
