<template>
    <div>
        <h1 class="m-b-xs">
            <loader :status="status">{{ total }}</loader>
        </h1>
        <small>
            {{ description}}
        </small>
        <spark :data="last30days" :status="status"></spark>
        <div class="row">
            <div class="col-xs-4">
                <small class="stats-label">Trend</small>
                <h4>{{ trend | number(0) }} % </h4>
            </div>
        </div>
    </div>
</template>

<script>
    import Spark from './Spark.vue'
    import Loader from './Loader'
    import {mapGetters} from 'vuex'

    export default {
        name: 'box',
        props: ['description', 'total', 'trend', 'last30days', 'status'],
        components: {
            Spark,
            Loader,
        }
    }
</script>
