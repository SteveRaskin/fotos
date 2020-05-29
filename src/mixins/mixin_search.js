export default {
	created: function() {},
	methods: {
		doSearch: function(term) {
			const searchTerm = term.toLowerCase();
			this.$store.commit("setSearchTerm", term);

			let searchResults = [];

			this.collectionList = this.$store.state.collectionList;
			this.collectionFiles = this.$store.state.collectionFiles;

			this.collectionFiles.forEach((collectionFile, i) => {
				collectionFile.filter((imgObj) => {
					let searchResult = {}; // TODO: REMEMBER THIS, PRESERVE YOUR SANITY: *WITHIN* THE ITERATION
					if (imgObj.tags.indexOf(searchTerm) !== -1) {
						searchResult.data = this.collectionList[i].data;
						searchResult.path = this.collectionList[i].path;
						searchResult.imgFile = imgObj.imgFile;
						searchResult.metadata = imgObj.metadata;
						searchResults.push(searchResult);
					};
				});
			}); // this.collectionFiles.forEach
			this.$store.commit("setSearchResults", searchResults);
			this.searchResults = searchResults; // ?
		} // doSearch
	} // methods
}
