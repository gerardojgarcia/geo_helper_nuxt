import VueGtag from 'vue-gtag'

import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'G-2N50LHTJC8'
        }
    }, nuxtApp.$router)
})