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
            name: '安装，实施人员',
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
    created() {
      this.$http.post('http://127.0.0.1:8087/income/totalDailyIncome').then((response) => {
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
          series: [{
            name: '总收入',
            data: response.body.countlist
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
        }
        })
    },
    components: {
      XChart
    }
  }
</script>
