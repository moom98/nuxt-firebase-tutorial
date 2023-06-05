<template>
  <div>
    <header>
      <h1>ヘッダー</h1>
      <nav>
        <ul>
          <li><nuxt-link to="/">トップ</nuxt-link></li>
          <li><nuxt-link to="/products/">商品一覧</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- 各ページのメインコンテンツ -->
      <nuxt />
    </main>
    <footer>
      <p>フッター</p>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
