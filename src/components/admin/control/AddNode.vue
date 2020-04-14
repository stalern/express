<template>
    <el-card>
        <el-row>
            <el-amap style="height: 550px; width: 1440px;" vid="amapDemo"
                     :center="center"
                     :zoom="zoom"
                     :events="events">
                <el-amap-marker :position="position" :content="content" :title="1"></el-amap-marker>
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
                    <el-col span="18">
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
        <!--        <div class="toolbar">-->
        <!--            position: [{{ lng }}, {{ lat }}] address: {{ address }}, {{province}}/{{city}}/{{district}}-->
        <!--        </div>-->
    </el-card>
</template>

<script>
    import VueAMap from 'vue-amap'

    export default {
        name: "AddNode",
        data() {
            let self = this;
            return {
                zoom: 12,
                center: [121.59996, 31.197646],
                address: '',
                province: '',
                city: '',
                district: '',
                drawer: false,
                direction: 'ttb',
                form: {
                    address: '',
                    phone: ''
                },
                events: {
                    click(e) {
                        let {lng, lat} = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;

                        // 临时添加
                        self.drawer = true;

                        // 这里通过高德 SDK 完成。
                        let geoCoder = new VueAMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });
                        // 这段代码不起作用
                        geoCoder.getAddress([lng, lat], function (status, result) {
                            console.log(result);
                            alert('我真帅');
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    console.log(result);
                                    self.address = result.regeocode.formattedAddress;
                                    self.province = result.regeocode.addressComponent.province;
                                    self.city = result.regeocode.addressComponent.city;
                                    self.district = result.regeocode.addressComponent.district;
                                    self.$nextTick();
                                }
                            }
                        });
                    }
                },
                lng: 0,
                lat: 0,
                position: [121.59996, 31.197646],
                content: '<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 12px; width: 12px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0 0 1px;"></div>'
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>
