export default {
  target: 'static',
  ssr:false,
  head: {
    title: 'web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'vendor/jquery/jquery.min.js' },
      {  src: 'vendor/bootstrap/js/bootstrap.bundle.min.js' },
      {  src: 'vendor/jquery.easing/jquery.easing.min.js' },
      {  src: 'vendor/isotope-layout/isotope.pkgd.min.js' },
      {  src: 'vendor/venobox/venobox.min.js' },
      {  src: 'vendor/aos/aos.js' },
      {  src: 'vendor/js/main.js' },
    ]
  },

  css: [
    'ant-design-vue/dist/antd.css',
    'assets/css/bootstrap.css',
    'assets/css/all.css',
    'assets/css/style.css',
  ],

  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/chart'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data'}
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      // callback: '/login',
      home: '/home'
    }
  },

  axios: {
    baseURL: process.env.NODE_ENV === 'dev'
      ? 'http://localhost:8000/api/'
      : 'https://phreezone.africinnovate.xyz/api/'
  },

  build: {
  },

  router: {
    // middleware: ['auth']
  }
}
