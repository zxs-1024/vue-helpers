<template>
  <div id="app">
    <h1>vuex helpers</h1>
    <div class="panel">
      <el-button class="panel__button" @click="jumpTopage('user')" type="primary">User</el-button>
      <el-button class="panel__button" @click="jumpTopage('config')" type="success">Config</el-button>
      <el-button class="panel__button" @click="jumpTopage('permission')" type="info">Permission</el-button>
      <el-button class="panel__button" @click="jumpTopage('createNamespaced')" type="warning">Namespaced</el-button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    jumpTopage(name) {
      this.$router.push(name)
    }
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
  width: 800px;
  margin: 30px auto;
}
.border {
  border-bottom: 1px dashed #2c3e50;
}
.panel {
  margin-bottom: 40px;
}
.panel__button {
  width: 128.64px;
}
pre {
  background: rgba(204, 204, 204, 0.2);
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
}
pre code {
  text-align: left;
  padding: 21px !important;
  border-radius: 5px;
  font-family: DankMono, OperatorMono, 'Fira Code';
}
.text_left {
  padding-left: 10px;
  text-align: left;
}
</style>
