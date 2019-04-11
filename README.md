[vue-helpers Example](https://zhanghao-zhoushan.github.io/vue-helpers/dist/index.html)

当我们组件大型应用的时候，可以将 Vuex 相关代码分割到模块中。下面是项目结构示例：

```bash
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── userInfo.js   # 用户信息模块
        ├── config.js     # 配置模块
        └── permission.js # 权限模块
```

我们暂时将 modules 分为 userInfo、config、permission 3 个模块。当然，根据项目的复杂度，以及随着项目的开发迭代，还可以增加更多的模块。

预先构建好 vuex 的模块，能够使 vuex 的数据结构更加清晰，应对项目中复杂业务的时候也更加得心应手。

action 异步，为什么是异步
options 配置放在 mutations
        