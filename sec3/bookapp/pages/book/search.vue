<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="keyword"
          label="本のタイトルを検索">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="search(keyword)">
          検索する
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          color="secondary"
          to="/book">
          一覧に戻る
        </v-btn>
      </v-col>
    </v-row>
    <div v-show="!isFound" class="mt-10">検索結果は0件でした</div>
    <v-row class="mt-10">
      <v-col
      v-for="(book, index) in searchResults" :key="index"
      cols="12"
      md="6">
        <v-card class="mx-auto mb-5">
          <v-row>
            <v-col
            cols="4">
              <v-img
                :src="book.img"
                height="200px"
                contain
              ></v-img>
            </v-col>
            <v-col
            cols="8">
            <v-card-title>{{ book.title }}</v-card-title>
            <v-card-text>{{ book.description }}</v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn
              class="mx-2"
              fab
              dark
              color="indigo">
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
            return {
              keyword: '',
              searchResults: [],
              isFound: true,
            }
          },
  methods: {
    async search(keyword) {
      this.searchResults = []
      // クエリーストリングを作成
      const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
      const params = {
        q: `intitle:${keyword}`,
        maxResults: 40,
      }

      const queryParams = new URLSearchParams(params)
      const url = baseURL + queryParams

      // fetchでJSONを取得
      const response = await fetch(url)
      .then(response => response.json())
      // console.log(response.items);

      // 検索結果がなかったとき
      if(response.items === undefined) {
        this.isFound = false
      } else {
        // 検索結果があるとき
        this.isFound = true

        // 必要な情報を配列にpush
        for(const book of response.items ){
          const title = book.volumeInfo.title
          const img = book.volumeInfo.imageLinks
          const description = book.volumeInfo.description
          this.searchResults.push({
            title: title ? title : 'No title', // eslint-disable-line
            img: img ? img.thumbnail : '',
            description : description ? description.slice(0, 40) : 'No description'
          })
        }
      }
    }
  }
}
</script>

<style>

</style>
