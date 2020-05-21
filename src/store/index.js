import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		selectedCollection: ""
	},
	mutations: {
		increment(state) {
			state.count++
		},
		updateSelectedCollection(state) {
			state.selectedCollection = "";
		}
	},
	actions: {
	},
	modules: {
	}
})
