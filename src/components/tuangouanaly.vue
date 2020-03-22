<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">ceshi</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>数量范围</th>
          <th>支付状态</th>
          <th>用户数量</th>
          <th>商家数量</th>
          <th>商品数量</th>
          <th>商铺数量</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(lable,index) in lables">
          <td>{{index+1}}</td>
          <td>{{lable.numRange}}</td>
          <td>{{lable.status}}</td>
          <td>{{lable.usernums}}</td>
          <td>{{lable.merchatnums}}</td>
          <td>{{lable.productnums}}</td>
          <td>{{lable.shopnums}}</td>
        </tr>
        </tbody>
      </table>
      <x-chart id="high1" class="high" :option="option1"></x-chart>
      <x-chart id="high2" class="high" :option="option2"></x-chart>
      <x-chart id="high3" class="high" :option="option3"></x-chart>
      <x-chart id="high4" class="high" :option="option4"></x-chart>
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
          {'typename': '李磊', 'lablevalue': '25'},
          {'typename': '李磊', 'lablevalue': '25'}
        ],
        option1:{
          title: {
            text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
          },
          subtitle: {
            text: '数据来源：thesolarfoundation.com'
          },
          yAxis: {
            title: {
              text: '就业人数'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 2010
            }
          },
          series: [{
            name: '安装，实施人员1',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },{
            name: '安装，实施人员2',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          }],
          responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
                }
              }
            }]
          }
        },
      }
    },created() {
      this.$http.post('http://127.0.0.1:8087/yinxiao/tuangouanaly').then((response) => {
        this.lables = response.body.yinxiaoEntityList
        this.option1 = {
          title: {
            text: '用户数量每日趋势'
          },
          yAxis: {
            title: {
              text: '数量'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          xAxis: {
            categories: response.body.infolist,
            crosshair: true
          },
          series: response.body.userResultList
        }
        this.option2 = {
          title: {
            text: '商品数量每日趋势'
          },
          yAxis: {
            title: {
              text: '数量'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          xAxis: {
            categories: response.body.infolist,
            crosshair: true
          },
          series: response.body.productResultList
        }
        this.option3 = {
          title: {
            text: '商铺数量每日趋势'
          },
          yAxis: {
            title: {
              text: '数量'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          xAxis: {
            categories: response.body.infolist,
            crosshair: true
          },
          series: response.body.shopResultList
        }
        this.option4 = {
          title: {
            text: '商家数量每日趋势'
          },
          yAxis: {
            title: {
              text: '数量'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          xAxis: {
            categories: response.body.infolist,
            crosshair: true
          },
          series: response.body.merchartResultList
        }
      })
    },
    components: {
      XChart
    }
  }
</script>
