export default function ({redirect, store, route}) {
  console.log('middlewareCheck', route.name);
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
