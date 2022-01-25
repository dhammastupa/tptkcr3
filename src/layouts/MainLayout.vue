<template>
  <q-layout view="hHr lpR fFf">

    <!-- header -->
    <q-header
      bordered
      class="text-accent autumn"
    >
      <!-- toolbar -->
      <q-toolbar>
        <q-toolbar-title>
          <!-- home icon -->
          <q-btn
            to="/"
            round flat
          >
            <q-avatar size="42px">
              <img src="~assets/logo-32x32.png">
            </q-avatar>
          </q-btn>

          <!-- appName -->
          <span class="text-subtitle1 gt-sm q-ml-md">{{ $t('appName') }}</span>
          <span class="text-subtitle1 lt-md q-ml-sm">{{ $t('appNameMobile') }}</span>
        </q-toolbar-title>

        <q-space />

        <!-- ปุ่มสลับภาษา -->
        <switch-language></switch-language>

        <!-- right menu -->
        <q-btn
          flat icon="menu"
          round
          @click="toggleRightDrawer"
        />
      </q-toolbar>

    </q-header>

    <!-- right drawer menu -->
    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
      <main-nav></main-nav>
    </q-drawer>

    <!-- page container -->
    <q-page-container
      class="cloud"
    >
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'

export default {
  components: {
    MainNav: defineAsyncComponent(() => import('src/layouts/components/MainNav.vue')),
    SwitchLanguage: defineAsyncComponent(() => import('src/layouts/components/SwitchLanguage.vue'))
  },

  setup () {
    // composable
    const $q = useQuasar()
    
    const rightDrawerOpen = ref(false)
    const tab = ref('')

    function toggleRightDrawer () {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    return {
      rightDrawerOpen,
      tab,
      toggleRightDrawer
    }
  }
}
</script>

<style>
</style>