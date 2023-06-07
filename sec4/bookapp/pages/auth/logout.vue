<template>
  <div>ログアウト</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('auth/logout')
  }

}
</script>

<style>

</style>
