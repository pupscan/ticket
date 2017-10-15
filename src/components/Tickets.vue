<template>
    <div class="ibox">
        <div class="ibox-content">
            <tickets-search></tickets-search>
            <tickets-table></tickets-table>
        </div>
    </div>
</template>

<script>
    import TicketsTable from './TicketsTable'
    import TicketsSearch from './TicketsSearch'

    export default {
        name: 'tickets',
        components: {
            TicketsTable,
            TicketsSearch,
        },
    }
</script>