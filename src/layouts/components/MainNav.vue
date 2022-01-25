<template>
  <!-- เมนูสาธารณะ -->
 <NavigationItem
    :navItems="nonRestrictedMenu"
  />

  <!-- ระบบตั้งค่าการใช้งาน -->
  <NavigationItem
    :navItems="configurationMenu"
  />

  <!-- ท้ายเมนู -->
  <q-list bordered class="bg-white" padding>
    <q-item to="/user">
      <q-item-section>
          <q-item-label caption>
            <q-item-label>
              <img alt="Logo" src="~assets/logo-96x96.png">
            </q-item-label>
          </q-item-label>
        <q-item-label>นโม ตสฺส ภควโต อรหโต สมฺมาสมฺพุทฺธสฺส</q-item-label>
        <q-item-label caption>
          ขอถวายความนอบน้อม แด่พระผู้มีพระภาคเจ้า ผู้ไกลจากกิเลส ผู้ตรัสรู้ชอบได้โดยพระองค์เอง พระองค์นั้น
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>

  <!-- เข้า/ออกระบบ -->
  <NavigationItem
    v-if="!authInfo.loggedIn"
    :navItems="signIn"
  />

  <!-- เข้า/ออกระบบ -->
  <NavigationItem
    v-if="authInfo.loggedIn"
    :navItems="signOut"
  />
</template>

<script>
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'
import useRequiresPermission from 'src/hooks/requires-permission.js'

export default {
  components: {
    NavigationItem: defineAsyncComponent(
      () => import('src/layouts/components/NavigationItem.vue'))
  },

  setup () {
    // initial composible
    const $store = useStore()

    // ---------------------
    // authInfo
    // ---------------------
    const authInfo = computed(() => {
      const result = $store.getters['auth/authInfo']
      return result
    })
  
    // ---------------------
    // non restircted menu
    // ---------------------
    const nonRestrictedMenu = computed(() => {
      const result = $store.getters['settings/nonRestrictedMenu']
      return result
    })

    // ---------------------
    // configuration menu
    // ---------------------
    const configurationMenu = computed(() => {
      const result = $store.getters['settings/configurationMenu']
      return useRequiresPermission(result)
    })

    // ---------------------
    // signIn
    // ---------------------
    const signIn = computed(() => {
      const result = $store.getters['settings/signIn']
      return result
    })

    // ---------------------
    // signOut
    // ---------------------
    const signOut = computed(() => {
      const result = $store.getters['settings/signOut']
      return result
    })

    return {
      authInfo,
      nonRestrictedMenu,
      configurationMenu,
      signIn,
      signOut
    }
  }

}
</script>
