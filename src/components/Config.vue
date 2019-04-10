<template>
  <div>
    <p>{{options.STATE}}</p>

    <el-select v-model="state" clearable placeholder="请选择">
      <el-option v-for="item in options.STATE" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <p>{{options.JOB}}</p>

    <el-select v-model="job" clearable placeholder="请选择">
      <el-option v-for="item in options.JOB" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <p>
      <el-button type="primary" @click="updateOptions">更新配置</el-button>
    </p>

    <p class="text_left">html :</p>
    <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

    <p class="text_left">javascript :</p>
    <pre v-highlightjs="javascriptCode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { htmlCode, javascriptCode } from '../code/config'

export default {
  data() {
    return {
      state: '',
      job: '',
      htmlCode,
      javascriptCode
    }
  },

  computed: mapGetters('config', ['options']),

  // computed: mapState({
  //   options: state => state.config.options
  // }),

  methods: mapActions('config', ['updateOptions']),

  created() {
    this.updateOptions()
    // this.$store.dispatch('config/updateOptions')
  }
}
</script>
