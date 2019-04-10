<template>
  <div>
    {{userInfo}}
    <p>
      <el-button type="primary" @click="updateUserInfo">更新用户信息</el-button>
    </p>

    <p class="text_left">html :</p>
    <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

    <p class="text_left">javascript :</p>
    <pre v-highlightjs="javascriptCode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { htmlCode, javascriptCode } from '../code/user'

export default {
  data() {
    return {
      htmlCode,
      javascriptCode
    }
  },

  computed: mapGetters('user', ['userInfo']),

  // computed: mapState({
  //   userInfo: state => state.user.userInfo
  // }),

  methods: mapActions('user', ['updateUserInfo']),

  created() {
    this.updateUserInfo()
    // this.$store.dispatch('user/updateUserInfo')
  }
}
</script>
