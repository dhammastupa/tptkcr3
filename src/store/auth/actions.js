export const signup = async (context, { email, password }) => {
  console.log('signup action')
}

export const signIn = async (context, { email, password }) => {
  console.log('signIn action')
  // dummy
  const authInfoPayload = {
    userName: 'admin'
  } 
  const authPermissionPayload = [
    'configuration'
  ]
  // =====
  commit('setAuthInfo', authInfoPayload)
  commit('setAuthPermission', authPermissionPayload)
}
    
export const logout = async (context) => {
  console.log('logout action')
}
