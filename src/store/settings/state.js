export default function () {
  return {
    route: null,
    nonRestrictedMenu: [
      {
        label: 'mainNav.home',
        icon: 'las la-campground',
        to: '/',
        class: 'text-black'
      },
      {
        label: 'mainNav.about',
        icon: 'las la-chalkboard-teacher',
        to: '/about',
        class: 'text-black'
      },
      {
        label: 'mainNav.preservation',
        icon: 'lab las la-school',
        to: '/preservation',
        class: 'text-black'
      }
    ],
    configurationMenu: [
      {
        label: 'mainNav.configuration',
        icon: 'las la-cog',
        to: '/',
        title: true,
        class: 'text-lime-10 text-overline bg-grey-2',
        loggedIn: true,
        havePermission: 'configuration'
      },
      {
        label: 'mainNav.tipitakaEdition',
        icon: 'las la-book',
        to: '/configuration/tipitaka-edition',
        class: 'text-black',
        loggedIn: true,
        havePermission: 'configuration'
      },
      {
        label: 'mainNav.pageContent',
        icon: 'las la-book',
        to: '/configuration/page-content',
        class: 'text-black',
        loggedIn: true,
        havePermission: 'configuration'
      }
    ],
    signIn: [
      {
        label: 'mainNav.signIn',
        icon: 'las la-sign-in-alt',
        to: '/user',
        class: 'text-black'
      }
    ],
    signOut: [
      {
        label: 'mainNav.signOut',
        icon: 'las la-sign-out-alt',
        to: '/user',
        class: 'text-black'
      }
    ]
  }
}
