import AOS from "aos"

import "aos/dist/aos.css"
import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.AOS = AOS.init() // eslint-disable-line new-cap
    }
})