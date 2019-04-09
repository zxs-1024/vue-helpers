/**
 * Mocking client-server processing
 */
const _options = {
  STATE: [
    {
      value: '成功',
      label: 1
    },
    {
      value: '失败',
      label: 2
    }
  ],
  JOB: [
    {
      value: '前端',
      label: 1
    },
    {
      value: '后端',
      label: 2
    }
  ]
}

export function getOptions() {
  return new Promise(resolve => {
    setTimeout(() => resolve(_options), 500)
  })
}
