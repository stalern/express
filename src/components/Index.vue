<template>
    <div>
        <h1>{{ msg }}</h1>
        <p>
            <el-button style="margin-top: 20px;" type="warning" icon="el-icon-s-help" @click="drawer = true">点击查看网点
            </el-button>
        </p>
        <el-drawer
                title="快递所覆盖的网点"
                :visible.sync="drawer"
                :direction="direction"
                size="90%">
            <el-amap style="margin: 20px 20px 20px 20px" :center="center">
                <el-amap-marker v-for="(marker,index) in markers" :position="marker.position" :content="content"
                                :title="title"
                                :key="index"></el-amap-marker>
            </el-amap>
        </el-drawer>
        <h3 style="margin-top: 180px;">Friendship Links</h3>
        <ul>
            <li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener">vue.js</a></li>
            <li><a href="http://wxxlamp.cn" target="_blank" rel="noopener">wxxlamp</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        props: {
            msg: String
        },
        data() {
            return {
                drawer: false,
                direction: 'btt',
                center: [113.613, 34.7483],
                title: '1',
                content: '<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 12px; width: 12px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0 0 1px;"></div>',
                markers: null
            };
        },
        created() {
            let markers = [];
            markers.push({
                position: [113.994, 32.9731]
            });
            markers.push({
                position:
                    [114.651, 33.6476]
            });
            markers.push({
                position:
                    [114.163, 35.9546]
            });
            markers.push({
                position:
                    [115.074, 35.7773]
            });

            this.markers = markers;
        },
        methods: {}
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 10px;
    }

    a {
        color: #b9512d;
    }
</style>
