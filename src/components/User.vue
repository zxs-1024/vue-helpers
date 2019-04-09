<template>
  <div>
    {{userInfo}}
    <p><button @click="updateUserInfo">更新用户信息</button></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    ...mapActions('user', ['updateUserInfo'])
  },
  created() {
    this.$store.dispatch('user/updateUserInfo')
  }
}
</script>
