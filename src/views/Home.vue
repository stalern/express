<template>
  <div class="home">
    <img alt="Aladdin logo" src="../assets/aladdin.jpg">
    <h1 style="margin-top: 50px;">Welcome to Aladdin Express</h1>
    <p>
      <el-button style="margin-top: 20px;" type="success" icon="el-icon-map-location" @click="drawer = true">查看网点
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
      <el-amap style="margin: 20px 20px 20px 20px" :center="center" :zoom="5">
        <el-amap-marker v-for="(marker,index) in markers" :position="marker.position" :content="content"
                        :title="title"
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
// import index from '../components/Index'
import router from '../router/router'
export default {
  name: 'Home',
  // components: {
  //   index
  // }
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
  methods: {
    login() {
      router.push({
        path: '/login'
      })
    },
    seek() {
      router.push({
        path: '/seek'
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
