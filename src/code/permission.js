const htmlCode = `<div>
  <p>{{permissions}}</p>

  <el-button type="primary" v-if="checkPermission('vuex-helpers:permissionsButton:update')" @click="updatePermissions">更新权限</el-button>
  <el-button type="danger" :disabled="!checkPermission('vuex-helpers:permissionsButton:reset')">修改权限</el-button>
</div>`

const javascriptCode = 
`import checkPermissionMixin from '../mixins/checkPermissionMixin'

export default {
  mixins: [checkPermissionMixin],

  created() {
    this.updatePermissions()
    // this.$store.dispatch('permission/updatePermissions')
  }
}`

const mixinCode = 
`import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters('permission', ['permissions']),

  // computed: mapState({
  //   permissions: state => state.permission.permissions
  // }),

  methods: {
    ...mapActions('permission', ['updatePermissions']),

    checkPermission(permission) {
      return this.permissions.includes(permission)
    }
  }
}`

export { htmlCode, javascriptCode, mixinCode }
