<template>
  <div class="home">
    <img alt="Aladdin logo" src="../assets/aladdin.jpg">
    <h1 style="margin-top: 50px;">Welcome to Aladdin Express</h1>
    <p style="margin-bottom: 30px">
      <el-button style="margin-top: 20px;" type="success" icon="el-icon-map-location" @click="listNode">查看网点
      </el-button>
      <el-button style="margin-top: 20px;" type="warning" icon="el-icon-connection" @click="seek">查询快递
      </el-button>
      <el-button style="margin-top: 20px;" type="danger" icon="el-icon-user" @click="login">管理登录
      </el-button>
    </p>
    <el-drawer
            title="快递所覆盖的网点"
            :visible.sync="drawer"
            :direction="direction"
            size="90%">
      <el-amap style="margin: 20px 20px 20px 20px" :center="center" :zoom="7" :plugin="plugin">
        <el-amap-marker v-for="(marker,index) in markers" :position="marker.position" :content="content"
                        :title="marker.title"
                        :key="index"></el-amap-marker>
      </el-amap>
    </el-drawer>
    <h3 style="margin-top: 180px;">Friendship Links</h3>
    <ul>
      <li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener">Vue.js</a></li>
      <li><a href="http://wxxlamp.cn" target="_blank" rel="noopener">Wxxlamp</a></li>
      <li><a href="https://github.com/stalern/express" target="_blank" rel="noopener">Github</a></li>
    </ul>
  </div>

</template>

<script>
// @ is an alias to /src
import router from '../router/router'
import store from "../store/store";
import node from "../api/transnode";
export default {
  name: 'Home',
  data() {
    let self = this;
    return {
      drawer: false,
      direction: 'btt',
      center: [113.613, 34.7483],
      content: '<div style="text-align:center; background-color: hsla(112,100%,70%,0.7); height: 6px; width: 6px; border: 1px solid hsl(5,60%,50%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0 0 1px;"></div>',
      markers: [],
      lng: '',
      lat: '',
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.loaded = true;
                self.$nextTick();
              }
            });
          }
        }
      }]
    };
  },
  methods: {
    login() {
      if(store.state.token !== '') {
        router.push({
          path: '/admin'
        })
      } else {
        router.push({
          path: '/login'
        })
      }
    },
    seek() {
      router.push({
        path: '/seek'
      })
    },
    listNode() {
      this.drawer = true;
      let _this = this;
      node.listAllNode().then(function (response) {
        let data = response.data.data;
        console.log(data);
        for (let i = 0; i < data.length; i ++) {
          if (data[i].x !== null && data[i].y !== null) {
            _this.markers.push({
              position: [data[i].x, data[i].y],
              title: data[i].address.length < 5 ? data[i].region : data[i].address
            });
          }
        }
      })
    }
  }
}
</script>

<style>
  img {
    margin-top: 70px;
    width: 500px;
  }
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
