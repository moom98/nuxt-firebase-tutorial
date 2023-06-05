export default function () {
  console.log('This is an example module');

   // Hookを使って実行タイミングを指定できる
   // this = ModuleContainer
   this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt.js is ready to work')
   })
}
