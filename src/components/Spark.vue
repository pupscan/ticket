<template>
    <div id="sparkline"></div>
</template>

<script>
  import sparkline from 'jquery-sparkline'
  import $ from 'jquery'

  export default {
    name: 'spark',
    mounted () {
      $('#sparkline').sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#1ab394',
        fillColor: 'transparent'
      });
    }
  }
</script>