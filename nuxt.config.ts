// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		['@nuxtjs/robots', { configPath: "~/config/robots.config" }],
		'@nuxt/image-edge',
		'@averjs/nuxt-compression'
		


],
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
	],

	build: {
		transpile: [
			'@fortawesome/fontawesome-svg-core'

		]
	},

	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: 'EarthTutor: Free resources to help you pass your Earth Science course',
			meta: [
			// <meta name="description" content="My amazing site">
			{ name: 'description', content: 'Free resources to help you master your Earth Science Courses' }
			 ],
		}
	},
	nitro: {
		compressPublicAssets: true,
	},
	


})
