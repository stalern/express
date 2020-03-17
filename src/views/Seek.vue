<template>
  <div>
    <img alt="Aladdin logo" src="../assets/aladdin.jpg">
    <el-container class="around-margin" v-if="flag">
        <el-input type="success" class="right-margin"
                placeholder="请输入查询单号"
                v-model="input"
                clearable>
        </el-input>
        <el-button type="warning" icon="el-icon-s-help" @click="flag ? flag = false : flag = true">搜索</el-button>
    </el-container>
    <el-container v-else class="around-margin-table">
      <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="寄件人"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="快递停靠点">
      </el-table-column>
    </el-table>
      <i class="el-icon-chicken" style="padding-left: 10px" @click="flag = true"></i>
    </el-container>
  </div>
</template>

<script>
  import express from "../api/express";
  export default {
    data() {
      return {
        flag: true,
        input: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      checkExpress() {

          express.getExpress(this.input).then(function (response) {
              if (response.data.data === 1) {
                  alert("dfa")
              } else {
                  alert('包裹订单号不正确哦~')
              }
          })
      }
    }
  }
</script>

<style>
  .around-margin {
    margin-top: 50px;
    margin-left: 400px;
    margin-right: 350px;
  }
  .around-margin-table {
    margin-top: 50px;
    margin-left: 400px;
    margin-right: 320px;
  }
  .right-margin {
    margin-right: 20px;
  }
</style>
