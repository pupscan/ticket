<template>
    <div>
        <h2>Total tickets of last 30 days</h2>
        <chart :data="data" :labels="labels" :status="status"></chart>
    </div>
</template>

<script>
    import Chart from './generics/Chart'
    import {mapGetters} from 'vuex'

    export default {
        name: 'ticket-chart',
        components: {
            Chart,
        },
        computed: {
            ...mapGetters({
                status: 'ticketsChartStatus',
                data: 'ticketsChartData',
                labels: 'ticketsChartLabels'
            })
        },
        created() {
            this.$store.dispatch('fetchTicketsChart')
        }
    }
</script>