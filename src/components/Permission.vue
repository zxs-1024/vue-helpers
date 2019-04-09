<template>
  <div>
    {{permissions}}
    <p><button @click="updatePermissions">更新权限</button></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      permissions: state => state.permission.permissions
    })
  },
  methods: {
    ...mapActions('permission', ['updatePermissions'])
  },
  created() {
    this.$store.dispatch('permission/updatePermissions')
  }
}
</script>
