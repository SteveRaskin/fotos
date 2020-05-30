import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

let initCollectionList;
try {
	initCollectionList = JSON.parse(localStorage.getItem("collectionList"))
}
catch (e) {
	console.warn("no collectionList in localStorage")
	initCollectionList = []
}


let initCollectionFiles;
try {
	// console.log("try initCollectionFiles");
	initCollectionFiles = JSON.parse(localStorage.getItem("collectionFiles"))
}
catch (e) {
	console.warn("no collectionFiles in localStorage")
	initCollectionFiles = []
}

let initialSearchResults;
try {
	initialSearchResults = JSON.parse(localStorage.getItem("searchResults"))
}
catch (e) {
	console.warn("no search results in localStorage")
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
		searchResults: initialSearchResults
	},
	mutations: {
		setCollectionList(state, payload) { // per action
			state.collectionList = payload;
			localStorage.setItem("collectionList", JSON.stringify(payload));
		},
		setCollectionFiles(state, payload) { // per action
			state.collectionFiles = payload;
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
			return state.collectionList;
		},
		getCollectionFiles(state) {
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
			let collectionFiles = [];
			context.commit("setCollectionList", collectionList);
			collectionList.forEach((collection, ix) => {
				// ... require each collection's .json ... [ assumes collection_xyz.json is at /data/collectiondata/ ]
				let collectionFile = require("@/data/collectiondata/" + collection.data + ".json"); // √
				collectionFiles.push(collectionFile);
			});
			context.commit("setCollectionFiles", collectionFiles);
		},
	},
	modules: {
	}
})
