import { mapState, mapGetters, mapActions } from 'vuex'

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
}