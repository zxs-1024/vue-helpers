const htmlCode = 
`<div>
  {{userInfo}}
  <p>
    <el-button type="primary" @click="updateUserInfo">更新用户信息</el-button>
  </p>
</div>`

const javascriptCode = 
`import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    userInfo: state => state.user.userInfo
  }),

  methods: mapActions('user', ['updateUserInfo']),

  created() {
    this.updateUserInfo()
  }
}`

export { htmlCode, javascriptCode }
