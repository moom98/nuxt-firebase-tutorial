<template>
  <div>
    index page
    <br>
    <nuxt-logo />
    <nuxt-link to="./products/">to products</nuxt-link>

  </div>
</template>

<script>
  export default {
asyncData({route, isDev, app, $axios}) {
  console.log('asyncData');
  console.log('route.name', route.name);
  console.log('isDev', isDev);
  console.log('app', app);
  console.log('app.$axios', app.$axios);
  console.log('$axios', $axios);
  console.log("================================")
},

fetch(context) {
  console.log('fetch', context.route);
},

created() {
  console.log('created');
},


}

</script>
