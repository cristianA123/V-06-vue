<template>
    <h1>Counter</h1>
    <h2>Direct - Access: {{$store.state.counter.count}}</h2>
    <h2>Computed: {{countComputed}}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="mapActions" :disabled="isLoading">ramdon</button>

    <h1>mapState</h1>
    <h2>mapState: {{count}}</h2>
    <h2>LastMutation: {{lastMutation}}</h2>

    <h2>Diirect getter:  {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

    // computed: mapState(['count'])
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter',['count', 'lastMutation','isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: 'lastMutation'
        // })
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy',5)
        },
        // incrementRandomInt() {
        //     this.$store.dispatch( 'incrementRandomInt', 1 )
        // }
        // ...mapActions('counter',['incrementRandomInt'])
        ...mapActions('counter',{
            randomInt: 'incrementRandomInt',
        })
    }


}
</script>

<style>

</style>