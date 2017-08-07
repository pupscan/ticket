<template>
    <div>
        <h1 class="m-b-xs">
            {{ all.total }}
        </h1>
        <small>
            New tickets in current week
        </small>
        <spark :data="last30days"></spark>
        <div class="row">
            <div class="col-xs-4">
                <small class="stats-label">Trend</small>
                <h4>{{ all.trend | number(0) }} % </h4>
            </div>
        </div>
    </div>
</template>

<script>
  import Spark from './Spark.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'box',
    components: {
      Spark
    },
    computed: {
      ...mapGetters({
        status: 'ticketsStatus',
        all: 'ticketsTrend',
        last30days: 'ticketsLast30days'
      })
    },
    created() {
      this.$store.dispatch('fetchTickets')
    }
  }
</script>
