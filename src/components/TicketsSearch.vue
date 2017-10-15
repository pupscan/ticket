<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="input-group">
                <input v-on:input="search" type="text" class="form-control input-sm" placeholder="Search">
                <div class="input-group-btn">
                    <button type="submit" class="btn btn-sm btn-primary">
                        <loader :status="status"><i class="fa fa-search"></i> Find {{ total }} tickets</loader>
                    </button>
                    <button type="submit" class="btn btn-sm btn-success" v-on:click="downloadTicketsSearch()">
                        <i class="fa fa-cloud-download"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Loader from './generics/Loader'
    import json2csv from 'json2csv'
    import _ from 'lodash'
    import {mapGetters} from 'vuex'

    export default {
        components: {Loader},
        name: 'tickets-search',
        props: [''],
        methods: {
            search: _.debounce(function (e) {
                this.$store.dispatch('fetchTickets', {search: e.target.value})
            }, 500),
            downloadTicketsSearch: function() {
                let csvData = new Blob([json2csv({data: this.tickets})], {type: 'text/csv;charset=utf-8;'})
                let link = document.createElement('a')
                link.href = window.URL.createObjectURL(csvData)
                link.setAttribute('download', 'tickets.csv')
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }
        },
        computed: {
            ...mapGetters({
                status: 'ticketsStatus',
                tickets: 'ticketsList',
                total: 'ticketsTotal',
            })
        },
    }
</script>