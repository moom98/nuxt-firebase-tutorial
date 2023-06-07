import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function ({ store, route, redirect, $firebase }) {

  // ページをリロードしてもVuexの状態を初期化されないようにする
  const auth = getAuth($firebase)
  // storeに情報がなかったときにfirebaseから情報を取得する
  if(!store.getters['auth/getLoggedIn']) {
    onAuthStateChanged(auth, (user) => {
      // userが存在するときはstoreに情報を追加する
      if(user) {
        store.dispatch('auth/addUserInfo', user)
      } else if(!route.path.match (/\/auth\//)) {
        // userが存在しないときはログインページにリダイレクト
        redirect('/auth/login')
      }
    })
  }

  // // ログインしていない状態でauth以外のページにアクセスした場合はログインページにリダイレクト
  // const isAutehnticated = store.getters['auth/getLoggedIn']
  // if(!isAutehnticated && !route.path.match (/\/auth\//)) {
  //   redirect('/auth/login')
  // }

}
