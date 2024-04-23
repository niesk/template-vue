import { useUrlSearchParams } from '@vueuse/core'

export const TOKEN_KEY = 'APP_TOKEN'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function autoSetToken() {
  const { token } = useUrlSearchParams('history')
  token && setToken(token)
}
