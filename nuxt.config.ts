// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxthq/studio', '@nuxt/content', "@nuxt/ui"],
  // force module initialization on dev env
  studio: {
    enabled: true
  }
})