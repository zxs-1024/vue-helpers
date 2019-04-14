<template>
  <div>
    <div v-for="(item, i) of codes" :key="i">
      <p class="sub_head">{{ item.name }} :</p>
      <pre v-highlightjs="item.code"><code :class="item.type || 'javascript'"></code></pre>
    </div>
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
      codes: [
        {
          name: 'tree.js',
          code: treeCode,
          type: 'bash'
        },
        {
          name: 'store.js',
          code: storeCode
        },
        {
          name: 'user.js',
          code: userCode
        },
        {
          name: 'config.js',
          code: configCode
        },
        {
          name: 'permissio.js',
          code: permissionCode
        }
      ]
    }
  }
}
</script>
