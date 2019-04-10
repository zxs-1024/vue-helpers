const htmlCode = 
`<div>
  <p>{{permissions}}</p>

  <el-button type="primary" v-if="checkPermission('vuex-helpers:permissionsButton:update')" @click="updatePermissions">更新权限</el-button>
  <el-button type="danger" :disabled="!checkPermission('vuex-helpers:permissionsButton:reset')">修改权限</el-button>
</div>`

const javascriptCode = 
`import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    permissions: state => state.permission.permissions
  }),

  methods: {
    ...mapActions('permission', ['updatePermissions']),

    checkPermission(permission) {
      return this.permissions.includes(permission)
    }
  },

  created() {
    this.updatePermissions()
  }
}`

export { htmlCode, javascriptCode }
