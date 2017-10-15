ta
<template>
    <div id="wrapper">
        <div id="page-wrapper" class="gray-bg">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row  m-b-xl">
                    <div class="col-sm-4">
                        <new-ticket-box></new-ticket-box>
                    </div>
                    <div class="col-sm-4">
                        <happy-ticket-box></happy-ticket-box>
                    </div>
                    <div class="col-sm-4">
                        <unhappy-ticket-box></unhappy-ticket-box>
                    </div>
                </div>
                <div class="row  m-b-xl">
                    <div class="col-sm-12">
                        <chart></chart>
                    </div>
                </div>
                <div class="row  m-b-xl">
                    <div class="col-sm-12">
                        <tickets></tickets>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewTicketBox from './components/NewTicketBox'
    import HappyTicketBox from './components/HappyTicketBox'
    import UnhappyTicketBox from './components/UnhappyTicketBox'
    import Chart from './components/generics/Chart.vue'
    import Tickets from './components/generics/Tickets.vue'

    export default {
        name: 'app',
        components: {
            NewTicketBox,
            HappyTicketBox,
            UnhappyTicketBox,
            Chart,
            Tickets
        }
    }
</script>
