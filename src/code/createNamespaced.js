const htmlCode = `<div>
  <p>{{permissions}}</p>

  <el-button type="primary" v-if="checkPermission('vuex-helpers:permissionsButton:update')" @click="updatePermissions">更新权限</el-button>
  <el-button type="danger" :disabled="!checkPermission('vuex-helpers:permissionsButton:reset')">修改权限</el-button>
</div>`

const javascriptCode = `import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('permission')

export default {
  computed: {
    ...mapState({
      permissions: state => state.permissions
    })
  },

  methods: {
    ...mapActions(['updatePermissions']),

    checkPermission(permission) {
      return this.permissions.includes(permission)
    }
  },

  created() {
    this.updatePermissions()
  }
}`

export { htmlCode, javascriptCode }
