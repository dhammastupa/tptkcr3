export default function () {
  return {
    authInfo: {
      loggedIn: true,
      userName: 'admin'
    },
    authPermission: [
      'preservation',
      'configuration'
    ]
  }
}
