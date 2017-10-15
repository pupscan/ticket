<template>
    <div class="echarts">
        <IEcharts :option="option"></IEcharts>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.vue'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/tooltip'

    function convertHex(hex, opacity) {
        hex = hex.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
        return result
    }

    export default {
        name: 'chart',
        components: {
            IEcharts
        },
        watch: {
            status: function (newVal) {
                if (newVal === "loaded") {
                    this.option.series[0].data = this.data
                }
            }
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
                    right: '1%',
                    bottom: '0%',
                    top: '3%',
                    containLabel: true
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
                        textStyle: {
                            color: '#5c6061'
                        }
                    },
                    data: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']
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
                        textStyle: {
                            color: '#5c6061'
                        }
                    }
                },
                series: [
                    {
                        name: 'Funds',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: '#1ab394'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: convertHex('#1ab394', 10)
                            }
                        },
                        data: [193, 138, 121, 54, 145, 106, 126, 59, 135, 166, 105, 125, 89, 128, 113, 102, 103, 196, 61, 130, 99, 56, 98, 137, 139, 83, 189, 106]
                    }
                ]
            }
        }),
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 200px;
    }
</style>