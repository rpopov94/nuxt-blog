export default function ({ route, redirect }) {
  if (!route.matched.length) {
    redirect('/404')
  }
}
