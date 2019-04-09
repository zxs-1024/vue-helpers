/**
 * Mocking client-server processing
 */
const _userInfo = [
  'vuex-helpers:permissions:index',
  'vuex-helpers:permissionsButton:update'
]

export function getPermissions () {
  return new Promise(resolve => {
    setTimeout(() => resolve(_userInfo), 500)
  })
}
