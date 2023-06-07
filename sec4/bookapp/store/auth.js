import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const state = () => ({
  isLoggedIn: false,
  userUid: '',
  email: ''
})

export const mutations = {
  setLoginState(state, loggedIn) {
    state.isLoggedIn = loggedIn
  },
  setUserUid(state, userUid) {
    state.userUid = userUid
  },

  setEmail(state, email) {
    state.email = email
  }
}

export const actions = {
  async login({ commit }, payload) {
    const auth = getAuth(this.$firebase);
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then( userCredential => {
        // Signed in
        commit ('setLoginState', true);
        commit ('setUserUid', userCredential.user.uid);
        commit ('setEmail', userCredential.user.email);
        console.log('ログインOK');
        this.$router.push('/book');
      })
      .catch( e => {
        const errorMessage = e.message;
        alert(errorMessage);
      })
  },

  async logout({ commit }) {
    const auth = getAuth(this.$firebase);
    await signOut(auth)
    .then(() => {
      commit('setLoginState', false);
      commit('setUserUid', '');
      commit('setEmail', '');
      this.$router.push('./login');
    }).catch((error) => {
      console.log(error);
    });
  },

  // ページをリロードしてもVuexの状態を初期化されないようにする
  addUserInfo({ commit }, payload) {
    commit ('setLoginState', true)
    commit('setUserUid', payload.uid)
    commit('setEmail', payload.email)
  }
}

// stateを参照するときはgettersを使用するほうが好ましい
// 誤ってstateを直接変更してしまうことを防ぐため
export const getters = {
  // getLoggedIn(state){
  // return !!state.isLoggedIn
  // }

  getLoggedIn: state => !!state.isLoggedIn,
  getUser: state => state.user,
  getError: state => state.error
}
