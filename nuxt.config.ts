export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      script: [
        {
          innerHTML: "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}"
        }
      ],
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Portfólio · Kauã Rodrigues',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Desenvolvedor full stack. Sistemas web e automações que resolvem problema real, do fiscal eletrônico ao render por IA.'
        }
      ]
    }
  },
  nitro: { prerender: { routes: ['/'] } }
})
