/**
 * Mocking client-server processing
 */
const _userInfo = {
  name: 'Sailor',
  age: '27',
  job: '程序猿',
  city: '上海',
  userId: 9527,
  mobile: 18888888888
}

export function getUserInfo () {
  return new Promise(resolve => {
    setTimeout(() => resolve(_userInfo), 500)
  })
}
