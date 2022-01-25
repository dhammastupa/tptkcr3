import { LocalStorage } from 'quasar'

export function saveLocale ({ commit }, payload) {
  LocalStorage.set('locale', payload)
}