<template>
    <div class="echarts">
        <IEcharts :option="option"></IEcharts>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/lite.vue'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/tooltip'

    export default {
        name: 'spark',
        props: ['data', 'status'],
        components: {
            IEcharts
        },
        watch: {
            status: function(newVal) {
                if(newVal === "loaded") {
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
                        data: []
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
