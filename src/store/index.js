import { createStore } from 'vuex'

import auth from './auth'
import settings from './settings'
import preservation from './preservation'

const store = createStore({
  modules: {
    auth,
    settings,
    preservation
  },
  strict: process.env.DEBUGGING
})

export default store
