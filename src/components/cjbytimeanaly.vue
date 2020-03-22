<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">ceshi</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>店铺名称</th>
          <th>成交次数</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(lable,index) in lables">
          <td>{{index+1}}</td>
          <td>{{lable.key}}</td>
          <td>{{lable.value}}</td>
        </tr>
        <tr>
          <td>开始时间：<input v-model="startTime"></input></td>
          <td>结束时间：<input v-model="endTime"></input></td>
          <td><input value="提交" type="button" v-on:click="queryBytime()"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  // 导入chart组件
  var myvue = {};
  import XChart from './charts'
  export default {
    data() {
      return {
        startTime:"2019-09-05",
        endTime:"2019-10-05",
        lables: [
          {'typename': '李磊', 'lablevalue': '25'},
          {'typename': '李磊', 'lablevalue': '25'}
        ]
      }
    },created() {
    this.$http.post('http://127.0.0.1:8087/shopTheme/cjbytimeanaly').then((response) => {
      this.lables = response.body.keyValueEntityList
    })
  },
  methods:{
    queryBytime() {
      this.$http.post('http://127.0.0.1:8087/shopTheme/cjbytimeanaly',{
        "startTime": this.startTime,"endTime":this.endTime
      },{emulateJSON: true}).then((response) => {
        this.lables = response.body.keyValueEntityList
      })
    }
  },
    components: {
      XChart
    }
  }
</script>
