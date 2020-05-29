import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

let initCollectionList;
try {
	initCollectionList = JSON.parse(localStorage.getItem("collectionList"))
	console.log("try");
}
catch (e) {
	console.log("catch");
	console.warn("no saved search results")
	initCollectionList = []
}
let initCollectionFiles;
try {
	initCollectionFiles = JSON.parse(localStorage.getItem("collectionFiles"))
	console.log("try");
}
catch (e) {
	console.log("catch");
	console.warn("no saved search results")
	initCollectionFiles = []
}



let initialSearchResults;
try {
	initialSearchResults = JSON.parse(localStorage.getItem("searchResults"))
}
catch (e) {
	console.warn("no saved search results")
	initialSearchResults = []
}

export default new Vuex.Store({
	strict: true,
	// plugins: [createPersistedState()], // the entire persisted state is 72kb
	state: {
		collectionList: initCollectionList,
		collectionFiles: initCollectionFiles,
		selectedCollectionObj: null,
		selectedCollection: null,
		ixSelected: null, // nis
		searchTerm: "",
		searchResults: initialSearchResults,
	},
	mutations: {
		setCollectionList(state, payload) { // per action
			state.collectionList = payload;
			localStorage.setItem("collectionList", JSON.stringify(payload));
		},
		setCollectionFiles(state, payload) { // per action
			// ... require each collection's .json ... [ assumes collection_xyz.json is at /data/collectiondata/ ]
			state.collectionFiles.push(require("@/data/collectiondata/" + payload.data + ".json"));
			localStorage.setItem("collectionFiles", JSON.stringify(state.collectionFiles));
		},
		setSelectedCollection(state, payload) {
			state.ixSelected = payload;
			state.selectedCollectionObj = state.collectionList[payload];
			state.selectedCollection = state.collectionFiles[payload];
			localStorage.setItem("ixSelected", payload);
			localStorage.setItem("selectedCollectionObj", JSON.stringify(state.collectionList[payload]));
			localStorage.setItem("selectedCollection", JSON.stringify(state.collectionFiles[payload]));
		},
		setSearchTerm(state, payload) {
			state.searchTerm = payload;
			localStorage.setItem("searchTerm", payload);
		},
		setSearchResults(state, payload) {
			state.searchResults = payload;
			localStorage.setItem("searchResults", JSON.stringify(payload));
		},
	},
	getters: { // getters: state is 1st arg
		getCollectionList(state) {
			// console.log("getCollectionList", state.collectionList);
			return state.collectionList;
		},
		getCollectionFiles(state) {
			// console.log("getCollectionFiles", state.collectionFiles);
			return state.collectionFiles;
		},
		getSelectedCollectionObj(state) {
			return state.selectedCollectionObj;
		},
		getSelectedCollection(state) {
			return state.selectedCollectionObj;
		},
		getSearchTerm(state) {
			return state.searchTerm;
		},
		getSearchResults(state) {
			return state.searchResults;
		}
	},
	setters: {
	},
	actions: { // ViewCollections.vue: this.$store.dispatch("setSelectedCollection");
		loadData(context, payload) {
			// GET THE LIST OF COLLECTIONS ...
			let collectionList = require("@/data/collections.json");
			context.commit("setCollectionList", collectionList);
			collectionList.forEach((collection, ix) => {
				context.commit("setCollectionFiles", collection);
			});
		},
	},
	modules: {
	}
})
