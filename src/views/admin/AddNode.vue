<template>
    <el-container style="margin-top: 30px">
    <el-card>
        <el-row>
            <el-amap style="height: 550px; width: 1440px;" vid="amapDemo"
                     :center="center"
                     :zoom="5"
                     :events="events">
            </el-amap>
        </el-row>
        <el-drawer
                :visible.sync="drawer"
                :direction="direction"
                size="70%">
            <el-row style="margin: 0 350px 0 350px;">
                <el-alert
                        center
                        title="录入网点"
                        type="warning"
                        :closable="false">
                </el-alert>
            </el-row>
            <el-card style="margin: 60px 350px 98px 350px;">
                <el-row type="flex" justify="center">
                    <el-col :span="18">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="网点地址">
                                <el-input v-model="form.address"></el-input>
                            </el-form-item>
                            <el-form-item label="网点电话">
                                <el-input v-model="form.phone"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="warning" @click="onSubmit">立即录入</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-card>
        </el-drawer>
    </el-card>
    </el-container>
</template>

<script>
    import transnode from "../../api/transnode";
    import router from "../../router/router";
    export default {
        name: "AddNode",
        data() {
            let self = this;
            return {
                center: [121.59996, 31.197646],
                address: '',
                province: '',
                city: '',
                adcode: '',
                district: '',
                drawer: false,
                direction: 'ttb',
                form: {
                    address: '',
                    phone: ''
                },
                lng: 0,
                lat: 0,
                events: {
                    click(e) {
                        let {lng, lat} = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;
                        // 临时添加
                        self.drawer = true;

                        // 这里通过高德 SDK 完成。
                        // eslint-disable-next-line no-undef
                        let geoCoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });

                        // 这段代码不起作用
                        geoCoder.getAddress([lng, lat], function (status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    console.log(result);
                                    self.province = result.regeocode.addressComponent.province;
                                    self.city = result.regeocode.addressComponent.city;
                                    self.adcode = result.regeocode.addressComponent.adcode;
                                    self.district = result.regeocode.addressComponent.district;
                                    self.$nextTick();
                                }
                            }
                        });
                    }
                }
            }
        },
        methods: {
            onSubmit() {
                let _this = this;
                transnode.postNode(this.province + this.city + this.district, this.form.address, this.form.phone, this.lng, this.lat, this.adcode).then(function () {
                    _this.$message({
                        type: 'success',
                        message: '上传网点成功'
                    });
                    router.push('/admin/transnode/list')
                })
            }
        }
    }
</script>

<style scoped>

</style>
