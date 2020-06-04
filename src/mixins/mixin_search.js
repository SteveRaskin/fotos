export default {
	created: function() {
	},
	methods: {
		doSearch: function(term) {
			const searchTerm = term.toLowerCase();
			this.$store.commit("setSearchTerm", term);
			let searchResults = [];
			let availSearchTerms = [];

			this.collectionFiles.forEach((collectionFile, i) => {
				collectionFile.filter((imgObj) => {
					let searchResult = {};
					if (imgObj.tags.indexOf(searchTerm) !== -1) {
						searchResult.data = this.collectionList[i].data;
						searchResult.path = this.collectionList[i].path;
						searchResult.imgFile = imgObj.imgFile;
						searchResult.metadata = imgObj.metadata;
						searchResults.push(searchResult);
					}
					else {
						imgObj.tags.forEach((tag) => {
							if (availSearchTerms.includes(tag) === false) {
								availSearchTerms.push(tag);
							}
						})
					}
				});
			}); // this.collectionFiles.forEach

			availSearchTerms.sort();
			this.$store.commit("setSearchResults", searchResults);
			this.$store.commit("setAvailSearchTerms", availSearchTerms);
			this.searchTerm = this.$store.state.searchTerm;
			// this.searchResults = searchResults; // ?
		} // doSearch
	} // methods
}
