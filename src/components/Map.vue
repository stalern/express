<template>
    <div class="amap-page-container">
        <el-amap
                vid="amapDemo"
                :center="center"
                :zoom="zoom"
                class="amap-demo"
                :events="events">
        </el-amap>
        <div class="toolbar">
            position: [{{ lng }}, {{ lat }}] address: {{ address }}
        </div>
    </div>
</template>

<style>
    .amap-demo {
        height: 300px;
        width: 300px;
    }
</style>

<script>
    export default {
        data() {
            let self = this;
            return {
                zoom: 12,
                center: [121.59996, 31.197646],
                address: '',
                events: {
                    click(e) {
                        let { lng, lat } = e.lnglat;
                        self.lng = lng;
                        self.lat = lat;

                        // 这里通过高德 SDK 完成。
                        // eslint-disable-next-line no-undef
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });
                        geocoder.getAddress([lng ,lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    self.address = result.regeocode.formattedAddress;
                                    self.$nextTick();
                                }
                            }
                        });
                    }
                },
                lng: 0,
                lat: 0
            };
        }
    };
</script>
