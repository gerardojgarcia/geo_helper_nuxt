// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		['@nuxtjs/robots', { configPath: "~/config/robots.config" }],
		'@nuxt/image',
		'@averjs/nuxt-compression',
		'@nuxtjs/supabase'
		


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
			viewport: 'width=device-width, initial-scale=1',
			title: 'EarthTutor: Free resources to help you pass your Earth Science course',
			meta: [
			// <meta name="description" content="My amazing site">
			{ name: 'description', content: 'Free resources to help you master your Earth Science Courses' }
			 ],
			 htmlAttrs: {
				lang: 'en',
			  },
		}
	},
	nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true,
		}
	},
	supabase: {
		url: 'https://jtehldmbvntevzzmecyw.supabase.co',
		key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZWhsZG1idm50ZXZ6em1lY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTg4NTgsImV4cCI6MTk5NTEzNDg1OH0.CU5zMoWzdepE8lpIFJi9c5KeUg5TfwsLgBWFp6BvRDw'
	}
	


})
