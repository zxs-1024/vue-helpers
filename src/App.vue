<template>
  <div id="app">
    <h1>vuex helpers</h1>
    <h2>User</h2>
    <User />
    <h2>Config</h2>
    <Config />
    <h2>Permission</h2>
    <Permission />
  </div>
</template>

<script>
import User from './components/User.vue'
import Config from './components/Config.vue'
import Permission from './components/Permission.vue'

export default {
  name: 'app',
  components: {
    User,
    Config,
    Permission
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
