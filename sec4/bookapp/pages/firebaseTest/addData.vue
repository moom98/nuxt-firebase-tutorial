<template>
  <div class="">
    <v-btn @click="addData">追加</v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default {
  data(){
    return {
      id: '001',
      title: 'テスト'
    }
  },

  methods:{
    async addData(){
      // クラウドからデータを取ってくるので非同期処理を使用する
      // try-catchでエラー処理を行う
      try {
        const db = getFirestore(this.$firebase);
        const docRef = await addDoc(collection(db, "tasks"), {
          id: this.id,
          title: this.title
        });
        console.log('追加したデータのID: ', docRef.id);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
}
</script>

<style>

</style>
