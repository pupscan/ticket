<template>
    <box description="New tickets in current week"
         :total="all.total"
         :trend=" all.trend"
         :last30days="last30days"
         :status="status"></box>
</template>

<script>
    import Box from './generics/Box'
    import {mapGetters} from 'vuex'

    export default {
        name: 'new-ticket-box',
        components: {
            Box,
        },
        computed: {
            ...mapGetters({
                status: 'newTicketsStatus',
                all: 'newTicketsTrend',
                last30days: 'newTicketsLast30days'
            })
        },
        created() {
            this.$store.dispatch('fetchNewTickets')
        }
    }
</script>