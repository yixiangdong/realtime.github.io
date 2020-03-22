<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">ceshi</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>终端类型</th>
          <th>用户数量</th>
          <th>商品浏览数量</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(lable,index) in lables">
          <td>{{index+1}}</td>
          <td>{{lable.typename}}</td>
          <td>{{lable.usernum}}</td>
          <td>{{lable.productnum}}</td>
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
        lables: [
          {'typename': '李磊', 'usernum': '25',"productnum":"45"},
          {'typename': '李磊', 'usernum': '25',"productnum":"56"}
        ]
      }
    },created() {
      this.$http.post('http://127.0.0.1:8087/liuLiang/diviceTypeanaly').then((response) => {
        this.lables = response.body.deviceEntityList
      })
    },
    components: {
      XChart
    }
  }
</script>
