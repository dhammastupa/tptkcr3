import store from 'src/store'
import { intersection } from 'lodash'

const n = 5
let i = 0
export function requiresPermission (requirePermission, to, next) {
  function keepTrying () {
    i++
    if (intersection(store.state.auth.authPermission, requirePermission).length) {
      return next()
    } else {
      if (i < n) {
        console.log('try again in 1 seconds')
        setTimeout(keepTrying, 1000) // try again in 1 seconds
      } else {
        next('/Error403')
      }
    }
  }
  keepTrying()
}
