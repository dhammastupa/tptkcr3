<template>
  <q-page class="flex flex-center">
    <sign-in v-if="!authInfo.loggedIn"></sign-in>
    <sign-out v-if="authInfo.loggedIn"></sign-out>
  </q-page>
</template>

<script>
import { computed, defineComponent, defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'mainNav.user',

  components: {
    SignIn: defineAsyncComponent(() => import('src/pages/user/components/SignIn.vue')),
    SignOut: defineAsyncComponent(() => import('src/pages/user/components/SignOut.vue'))
  },

  setup () {
    // composible
    const $store = useStore()

    // ---------------------
    // authInfo
    // ---------------------
    const authInfo = computed(() => {
      const result = $store.getters['auth/authInfo']
      return result
    })

    // ------
    // return
    // ------
    return {
      authInfo
    }
  }
})
</script>
