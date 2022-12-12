// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',


],
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	build: {
		transpile: [
			'@fortawesome/fontawesome-svg-core'

		]
	}

})
