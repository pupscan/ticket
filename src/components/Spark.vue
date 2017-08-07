<template>
    <div class="echarts">
        <IEcharts :option="option"></IEcharts>
    </div>
</template>

<script>
  import IEcharts from 'vue-echarts-v3/src/lite.vue'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/tooltip'

  function convertHex (hex, opacity) {
    hex = hex.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
    return result
  }

  export default {
    name: 'spark',
    props: ['data'],
    components: {
      IEcharts
    },
    data: () => ({
      option: {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '0%',
          containLabel: false
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#5c6061'
            }
          },
          data: []
        },
        yAxis: {
          splitNumber: 3,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#dde1e2"
            }
          },
          axisTick: {
            length: 8,
            show: false,
            lineStyle: {
              color: "#dde1e2"
            }
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#5c6061'
            }
          }
        },
        series: [
          {
            name: 'stats',
            type: 'line',
            smooth: false,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: '#1ab394'
              }
            },
            data: [14,14,18,15,32,20,16,27,15,30,28,32,14,38,24,24,26,50,30,39,34,14,6,16,23,41,31,32,30,22,19]
          }
        ]
      }
    })
  }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 50px;
    }
</style>
