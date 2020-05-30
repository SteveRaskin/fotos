import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/ViewWelcome.vue'
import LogIn from '@/components/ViewLogIn.vue'
import Collections from '@/components/ViewCollections.vue'
import Collection from '@/components/ViewCollection.vue'
import SearchResults from '@/components/ViewSearchResults.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	// https://router.vuejs.org/api/#base
	// the base URL of the app; if the SPA is served at domain.com/app/, then base should be "/app/" (default: "/")
	base: '/fotos/',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		// redirect to a path, not a name
		{
			path: '*',
			redirect: '/index.html'
		},
		{
			path: '/',
			redirect: '/index.html'
		},
		{
			path: '/index.html',
			name: 'WelcomeView',
			component: Welcome,
			meta: {
				requiresAuth: false
			}
		},
		{
			path: '/login/',
			name: 'LogIn',
			component: LogIn,
			meta: {
				requiresAuth: false
			}
		},

		// https://router.vuejs.org/guide/essentials/passing-props.html
		// "WHEN PROPS IS SET TO TRUE, THE ROUTE.PARAMS WILL BE SET AS THE COMPONENT PROPS ... "
		{
			path: '/collections',
			name: 'Collections',
			component: Collections,
			meta: {},
			props: true,
			params: { mainClass: "ix", id: "id1" }
		},
		{
			path: '/collection/',
			redirect: '/collections'
		},
		{
			path: '/collection/:selectedCollection',
			name: 'Collection',
			component: Collection,
			props: true,
			params: {
				collectionName: String,
				displayName: String
			}
		},
		{
			path: '/search_results/:searchTerm',
			name: 'SearchResults',
			component: SearchResults,
			meta: {},
			props: true,
			params: {
				searchTerm: String
			}
		},

		{
			path: '/collection/private/',
			redirect: '/login'
		},
		{
			path: '/collection/private/:selectedCollection',
			name: 'Collection',
			component: Collection,
			props: {
				selectedCollection: String,
				displayName: String
			},
			params: {
				collectionName: String
			},
			meta: {
				requiresAuth: true
			}
		},
	]
})














//
