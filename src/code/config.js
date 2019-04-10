const htmlCode = `<div>
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
</div>`

const javascriptCode = `import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      state: '',
      job: ''
    }
  },

  computed: mapState({
    options: state => state.config.options
  }),

  methods: mapActions('config', ['updateOptions']),

  created() {
    this.updateOptions()
  }
}`

export { htmlCode, javascriptCode }
