import { computed } from 'vue'
import { useStore } from 'vuex'
import { includes } from 'lodash'

export default function useRequiresPermission (navs) {
  const $store = useStore()

  const authInfo = computed(() => {
    return $store.getters['auth/authInfo']
  })
  const authPermission = computed(() => {
    return $store.getters['auth/authPermission']
  })

  const result = []

  navs.forEach(nav => {
    // ต้องล็อกอินไหม
    if (nav.loggedIn) {
      // ตรวจการล็อกอิน
      if (authInfo.value.loggedIn) {
        // ต้องระบุสิทธิ์ไหม
        if (nav.havePermission) {
          if (includes(authPermission.value, nav.havePermission)) {
            result.push(nav)
          }
        // ต้องล็อกอิน แต่ไม่ต้องระบุสิทธิ์
        } else {
          result.push(nav)
        }
      }
    // ไม่ต้องล็อกอิน
    } else {
      result.push(nav)
    }
  })

  return result
}
