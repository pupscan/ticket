<template>
    <box description="Happy tickets in current week"
         :total="all.total"
         :trend=" all.trend"
         :last30days="last30days"
         :status="status"></box>
</template>

<script>
    import Box from './generics/Box'
    import {mapGetters} from 'vuex'

    export default {
        name: 'happy-ticket-box',
        components: {
            Box,
        },
        computed: {
            ...mapGetters({
                status: 'happyTicketsStatus',
                all: 'happyTicketsTrend',
                last30days: 'happyTicketsLast30days'
            })
        },
        created() {
            this.$store.dispatch('fetchHappyTickets')
        }
    }
</script>