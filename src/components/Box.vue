<template>
    <div>
        <h1 class="m-b-xs">
            26,900
        </h1>
        <small>
            Sales in current month
        </small>
        <spark></spark>
        <div class="row">
            <div class="col-xs-4">
                <small class="stats-label">Pages / Visit</small>
                <h4>236 321.80</h4>
            </div>

            <div class="col-xs-4">
                <small class="stats-label">% New Visits</small>
                <h4>46.11%</h4>
            </div>
            <div class="col-xs-4">
                <small class="stats-label">Last week</small>
                <h4>432.021</h4>
            </div>
        </div>
    </div>
</template>

<script>
  import Spark from './Spark.vue'

  export default {
    name: 'box',
    components: {
      Spark
    }
  }
</script>