export default {
	created: function() {},
	methods: {
		doSearch: function(term) {
			console.log("doSearch, term", term);
			let searchResults = [];
			let searchResult = {};
			const searchTerm = term.toLowerCase();
			// props: this.collectionList, this.collectionFiles
			this.collectionFiles.forEach((collectionFile, i) => {
				collectionFile.filter((imgObj) => {
					if (imgObj.tags.indexOf(searchTerm) !== -1) {
						searchResult.data = this.collectionList[i].data;
						searchResult.path = this.collectionList[i].path;
						searchResult.imgFile = imgObj.imgFile;
						searchResult.metadata = imgObj.metadata;
						searchResults.push(searchResult);
					};
				});
			}); // this.collectionFiles.forEach
			console.log("doSearch: searchResults", searchResults);
			this.searchResults = searchResults;
		},
	} // computed
}
