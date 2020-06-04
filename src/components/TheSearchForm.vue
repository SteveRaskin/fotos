<template>

	<div class="search-wrapper">

		<form class="search">

			<input
				ref="searchInput"
				type="text"
				class="search-input"
				v-model="searchTerm"
				placeholder="search"
			/>

			<!-- TODO: replace with native button? w/$route, name param in mixin? -->
			<router-link
				tag="button"
				class="search-submit"
				:to="{
					name: 'SearchResults',
					params: { searchTerm: this.searchTerm },
				}"
				@click.native="doSearch(searchTerm)"
				>
				<span v-if="searchTerm">find pics of <span>'{{ searchTerm }}'</span></span>
				<span v-else>find pics</span>
			</router-link>

		</form>

	</div><!-- END .search-wrapper -->

</template>



<script>

	import Search from '@/mixins/mixin_search.js';

   export default {
		props: {
		},
      data() {
         return {
				collectionList: [],
				collectionFiles: []
         }
    	},
		created: function() {
			// we need the data here 'cause it makes its debut in ViewCollections
			this.$store.state.collectionList.length ? this.collectionList = this.$store.state.collectionList : this.collectionList = JSON.parse(localStorage.getItem("collectionList")); // string-to-object to get values

			this.$store.state.collectionFiles.length ? this.collectionFiles = this.$store.state.collectionFiles : this.collectionFiles = JSON.parse(localStorage.getItem("collectionFiles")); // string-to-object to get values
		},
		computed: {
			searchTerm: {
				get: function() {
					return this.$store.getters.getSearchTerm;
				},
				set: function(term) {
					this.$store.commit("setSearchTerm", term);
				}
			},
		},
		mounted: function() {
			this.$refs.searchInput.value = "";
		},
		updated: function() {
		},
		mixins: [ Search ],
   }
</script>



<style lang="scss" scoped>

	.search-wrapper {
		// display: flex;
		display: block;
		width: 100%;
		margin: 0 0 1.5rem;
		.search { // form.search
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			.search-input {
				width: calc(100% - 15.6rem);
				width: 100%;
				margin-bottom: .9rem;
			}
			.search-submit {
				width: 15rem;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 1.11rem;
				span span { text-transform: capitalize; }
			}
		}
	} // .search-wrapper

	@media all and (min-width: 33rem) {
		.search-wrapper {
			.search { // form.search
				flex-flow: row nowrap;
				.search-input {
					width: calc(100% - 15rem);
					margin: 0;
				}
				.search-submit {
					width: 13.5rem;
				}
			}
		}
	}


</style>
