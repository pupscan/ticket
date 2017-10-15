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
        props: ['data', 'labels', 'status'],
        components: {
            IEcharts
        },
        watch: {
            status: function (newVal) {
                if (newVal === "loaded") {
                    this.option.series[0].data = this.data
                    this.option.xAxis.data = this.labels
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
                        textStyle: {
                            color: '#5c6061'
                        }
                    }
                },
                series: [
                    {
                        name: 'Tickets',
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
                        data: []
                    }
                ]
            }
        })
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 200px;
    }
</style>