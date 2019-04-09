<template>
  <div>
    <p>{{options.STATE}}</p>
    <p>{{options.JOB}}</p>
    <p><button @click="updateOptions">更新配置</button></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      options: state => state.config.options
    })
  },
  methods: {
    ...mapActions('config', ['updateOptions'])
  },
  created() {
    this.$store.dispatch('config/updateOptions')
  }
}
</script>
