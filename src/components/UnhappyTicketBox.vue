<template>
    <box description="Unhappy tickets in current week"
         :total="all.total"
         :trend=" all.trend"
         :last30days="last30days"
         :status="status"></box>
</template>

<script>
    import Box from './generics/Box'
    import {mapGetters} from 'vuex'

    export default {
        name: 'unhappy-ticket-box',
        components: {
            Box,
        },
        computed: {
            ...mapGetters({
                status: 'unhappyTicketsStatus',
                all: 'unhappyTicketsTrend',
                last30days: 'unhappyTicketsLast30days'
            })
        },
        created() {
            this.$store.dispatch('fetchUnhappyTickets')
        }
    }
</script>