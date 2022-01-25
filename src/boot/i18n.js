import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { LocalStorage, Quasar } from 'quasar'

const selectedLocale = LocalStorage.getItem('locale') || 'en-US'

import(`quasar/lang/${selectedLocale}`
).then(lang => {
  Quasar.lang.set(lang.default)
})

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: selectedLocale,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})

