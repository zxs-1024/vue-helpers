<template>
  <div>
    <p class="sub_head">tree :</p>
    <pre v-highlightjs="treeCode"><code class="bash"></code></pre>

    <p class="sub_head">index.js :</p>
    <pre v-highlightjs="storeCode"><code class="javascript"></code></pre>

    <p class="sub_head">user.js :</p>
    <pre v-highlightjs="userCode"><code class="javascript"></code></pre>

    <p class="sub_head">config.js :</p>
    <pre v-highlightjs="configCode"><code class="javascript"></code></pre>

    <p class="sub_head">permission.js :</p>
    <pre v-highlightjs="permissionCode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import {
  treeCode,
  storeCode,
  userCode,
  configCode,
  permissionCode
} from '../code/store'

export default {
  data() {
    return {
      treeCode,
      storeCode,
      userCode,
      configCode,
      permissionCode
    }
  }
}
</script>
