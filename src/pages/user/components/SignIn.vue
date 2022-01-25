<template>
  <q-card
    class="shadow-24"
    style="width:300px;"
  >
    <q-card-section class="earthly">
      <div class="text-h6 text-white text-center">{{ $t('user.login') }}</div>
    </q-card-section>

    <q-form
      class="q-px-sm q-pt-md"
      @submit="login"
    >
      <q-card-section>
        <q-input
          square
          v-model="email" type="email"
          lazy-rules
          :rules="[ val => isValidEmailAddress(val) || $t('user.notValidEmail')]"
          :label="$t('user.email')">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input
          square
          v-model="password" type="password"
          lazy-rules
          :rules="[ val => val.length >= 6 || $t('user.atLeast6Char')]"
          :label="$t('user.password')">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated rounded
            color="teal"
            class="full-width text-white"
            :label="$t('general.submit')"
            type="submit"
          />
        </q-card-actions>
      </q-card-section>

    </q-form>

  </q-card>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { isValidEmailAddress } from 'src/functions/check-valid-email.js'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    // composable
    const $t = useI18n().t
    const $q = useQuasar()
    const $store = useStore()
    const $router = useRouter()

    // variables
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    // ---------------------
    // login
    // ---------------------
    const login = async () => {
      try {
        await $store.dispatch('auth/login', {
          email: email.value,
          password: password.value
        })
        $router.push('/')
      }
      catch (err) {
        error.value = err.message
        $q.notify({
          icon: 'error',
          color: 'negative',
          message: $t('error') + ': ' + $t(err.message)
        })
      }
    }

    return {
      login,
      email,
      password,
      error,
      isValidEmailAddress
    }
  }
}
</script>
