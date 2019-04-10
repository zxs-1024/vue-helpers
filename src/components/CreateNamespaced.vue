<template>
  <div>
    <p>{{permissions}}</p>

    <el-button type="primary" v-if="checkPermission('vuex-helpers:permissionsButton:update')" @click="updatePermissions">更新权限</el-button>
    <el-button type="danger" :disabled="!checkPermission('vuex-helpers:permissionsButton:reset')">修改权限</el-button>

    <p>PS：这里使用 disabled 是为了显示效果，在项目可以使用 v-if 指令。</p>

    <p class="text_left">html :</p>
    <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

    <p class="text_left">javascript :</p>
    <pre v-highlightjs="javascriptCode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { htmlCode, javascriptCode } from '../code/createNamespaced'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('permission')

export default {
  data() {
    return {
      htmlCode,
      javascriptCode
    }
  },

  computed: mapGetters(['permissions']),

  // computed: mapState({
  //   permissions: state => state.permissions
  // }),

  methods: {
    ...mapActions(['updatePermissions']),

    checkPermission(permission) {
      return this.permissions.includes(permission)
    }
  },

  created() {
    this.updatePermissions()
    // this.$store.dispatch('updatePermissions')
  }
}
</script>
