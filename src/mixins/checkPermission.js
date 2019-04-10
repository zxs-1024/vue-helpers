import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['permissions']),
  
  methods: {
    ...mapActions('permission', ['updatePermissions']),

    checkPermission(permission) {
      return this.permissions.includes(permission)
    }
  },

  created() {
    this.updatePermissions()
  }
}
