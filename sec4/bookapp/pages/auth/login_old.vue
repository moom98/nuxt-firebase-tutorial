<template>
  <div>ログイン
  <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          label="メールアドレス">
        </v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="password"
          label="パスワード">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="login">
          ログイン
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          text
          color="secondary"
          to="./register">
          ユーザー登録
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data(){
    return {
      email: '',
      password: '',
    }
  },

  methods:{
    login(){
      const auth = getAuth(this.$firebase);
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then( userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log('ログインOK');

      })
      .catch( e => {
        const errorCode = e.code;
        const errorMessage = e.message;
        alert(errorMessage);
        console.log(errorCode, errorMessage);
      })
    }
  }

}
</script>

<style>

</style>
