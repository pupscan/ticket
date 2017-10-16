<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead class="thead-default">
            <tr>
                <th class="col-md-6">Ticket</th>
                <th class="text-center col-md-1">Status</th>
                <th class="col-md-2">Tags</th>
                <th class="col-md-2">Created</th>
                <th class="text-right col-md-1">Link</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="ticket in tickets">
                <td>
                    <div style="word-break: break-all">
                        <b>{{ ticket.name }}</b> {{ ticket.email ? ' - ' + ticket.email : ''}}
                    </div>
                    <div style="word-break: break-all" class="small text-muted">
                        <b>{{ ticket.subject }}</b><br/>
                        {{ ticket.message }}
                    </div>
                </td>
                <td class="text-center" >
                      <span class="label"
                            :class="{
                          'label-danger': (ticket.status==='pending' || ticket.status==='hold'),
                          'label-primary': (ticket.status==='new'),
                          'label-warning': (ticket.status==='open')}">
                        {{ticket.status}}</span>
                </td>
                <td>
                    <ul class="tag-list" style="padding: 0">
                        <li v-for="tag in ticket.tags" class="tag"><i class="fa fa-tag"></i> {{tag}}</li>
                    </ul>
                </td>
                <td>
                    <strong>{{ticket.created}}</strong>
                    <div class="small text-muted">Updated: {{ticket.updated}}</div>
                </td>
                <td style="cursor: pointer" class="text-right">
                    <a :href="'https://pupscan.zendesk.com/agent/tickets/'+ ticket.zenDeskId"><i
                            class="fa fa-external-link"></i></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'tickets-table',
        computed: {
            ...mapGetters({
                status: 'ticketsStatus',
                tickets: 'ticketsList',
            })
        },
        created() {
            this.$store.dispatch('fetchTickets')
        }
    }
</script>

<style lang="scss" scoped>
    .tag {
        font-size: 10px;
        background-color: #f3f3f4;
        padding: 5px 12px;
        color: inherit;
        border-radius: 2px;
        border: 1px solid #e7eaec;
        margin-right: 5px;
        margin-top: 5px;
        display: block;
    }
</style>
