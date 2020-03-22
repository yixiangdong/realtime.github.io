<template>
  <div>
    <x-chart id="high" class="high" :option="option1"></x-chart>
  </div>
</template>
<script>
  // 导入chart组件
  var myvue = {};
  import XChart from './charts'
  export default {
    data() {
      return {
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
    },
    beforeCreate:function(){
      myvue = this;
    },
    mounted:function(){
      myvue.other.title.text = '2010 ~ 2016 年太阳能行业就业人员发展情况';
      myvue.other.subtitle.text = '数据来源：thesolarfoundation.com';
      myvue.other.series = myvue.data;//数据
      myvue.other.yAxis.title.text = '就业人数'; //数据
      myvue.option = myvue.other;
    },
    created() {
      this.$http.post('http://127.0.0.1:8087/income/totalDailyIncomeByPaytype').then((response) => {
        this.option1 = {
          title: {
            text: '每日总收入趋势'
          },
          yAxis: {
            title: {
              text: '数量（万元）'
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
          series: response.body.resultList
        }
      })
    },
    components: {
      XChart
    }
  }
</script>
