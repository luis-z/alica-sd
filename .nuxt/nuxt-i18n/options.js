import locale67ae66a0 from '../..\\static\\lang\\es-ES.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"es"},
  vueI18nLoader: false,
  locales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"},{"code":"es","iso":"es-ES","name":"Spanish","file":"es-ES.js","dir":"ltr"}],
  defaultLocale: "es",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\proyectos\\agency-theme\\static\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: false,
  normalizedLocales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"},{"code":"es","iso":"es-ES","name":"Spanish","file":"es-ES.js","dir":"ltr"}],
  localeCodes: ["ar","de","en","id","pt","zh","es"],
  additionalMessages: [],
}

export const localeMessages = {
  'es-ES.js': () => Promise.resolve(locale67ae66a0),
  'ar-AR.js': () => import('../..\\static\\lang\\ar-AR.js' /* webpackChunkName: "lang-ar-AR.js" */),
  'de-DE.js': () => import('../..\\static\\lang\\de-DE.js' /* webpackChunkName: "lang-de-DE.js" */),
  'en-US.js': () => import('../..\\static\\lang\\en-US.js' /* webpackChunkName: "lang-en-US.js" */),
  'id-ID.js': () => import('../..\\static\\lang\\id-ID.js' /* webpackChunkName: "lang-id-ID.js" */),
  'pt-PT.js': () => import('../..\\static\\lang\\pt-PT.js' /* webpackChunkName: "lang-pt-PT.js" */),
  'zh-ZH.js': () => import('../..\\static\\lang\\zh-ZH.js' /* webpackChunkName: "lang-zh-ZH.js" */),
}
