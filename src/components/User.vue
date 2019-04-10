<template>
  <div>
    {{userInfo}}
    <p>
      <el-button type="primary" @click="updateUserInfo">更新用户信息</el-button>
    </p>

    <pre v-highlightjs="htmlCode"><code class="html"></code></pre>
    <pre v-highlightjs="javascriptCode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { htmlCode, javascriptCode } from '../code/user'

export default {
  data() {
    return {
      htmlCode,
      javascriptCode
    }
  },

  computed: mapState({
    userInfo: state => state.user.userInfo
  }),

  methods: mapActions('user', ['updateUserInfo']),

  created() {
    this.updateUserInfo()
  }
}
</script>
