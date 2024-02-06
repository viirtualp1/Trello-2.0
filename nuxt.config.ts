export default defineNuxtConfig({
  ssr: false,
  css: ['@/assets/scss/app.scss'],
  modules: ['@pinia/nuxt'],
  plugins: ['@/plugins/FirebasePlugin'],
  devtools: { enabled: false },
})
