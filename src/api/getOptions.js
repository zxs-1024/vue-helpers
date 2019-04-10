/**
 * Mocking client-server processing
 */
const _options = {
  STATE: [
    {
      value: 1,
      label: '成功'
    },
    {
      value: 2,
      label: '失败'
    }
  ],
  JOB: [
    {
      value: 1,
      label: '前端程序猿'
    },
    {
      value: 2,
      label: '后端程序猿'
    }
  ]
}

export function getOptions() {
  return new Promise(resolve => {
    setTimeout(() => resolve(_options), 500)
  })
}
