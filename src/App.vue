<template>
    <div id="wrapper">
        <div id="page-wrapper" class="gray-bg">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row  m-b-xl">
                    <div class="col-sm-4">
                        <box></box>
                    </div>
                    <div class="col-sm-4">
                        <box></box>
                    </div>
                    <div class="col-sm-4">
                        <box></box>
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
  import Box from './components/Box.vue'
  import Chart from './components/Chart.vue'
  import Tickets from './components/Tickets.vue'

  export default {
    name: 'app',
    components: {
      Box,
      Chart,
      Tickets
    }
  }
</script>
