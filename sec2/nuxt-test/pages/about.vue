<template>
  <div>
    <h1>About Page</h1>
    {{ now }}<br>
    <img src="@/assets/images/example-moomin.png" alt="">
    <p class="color-blue">cssのテスト</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      now: null
    }
  },

  mounted() {
    this.now = this.$dayjs().format('YYYY/MM/DD HH:mm:ss');
  }

}
</script>

<style>

</style>
