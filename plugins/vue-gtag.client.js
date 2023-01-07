import VueGtag from 'vue-gtag-next'

import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component(VueGtag, {
        property: {
            id: 'G-2N50LHTJC8'
        }
    })
})