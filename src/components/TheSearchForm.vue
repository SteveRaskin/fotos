<template>

	<div class="search-wrapper">

		<div class="search">

			<input
				type="text"
				class="search-input"
				v-model="searchTerm"
				placeholder="search by name, occasion"
			/>
			<router-link
				tag="button"
				class="search-submit"
				:to="{
					name: 'SearchResults',
					params: { searchTerm: this.searchTerm },
				}"
				@click.native="doSearch(searchTerm)"
				>
				<p class="">show me!</p>
			</router-link>
		</div>

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
		},
		computed: {
			searchTerm: {
				get: function() { return this.$store.getters.getSearchTerm },
				set: function(term) {
					this.$store.commit("setSearchTerm", term);
				}
			},
		},
		mounted: function() {
		},
		mixins: [ Search ],
   }
</script>



<style lang="scss" scoped>

	.search-wrapper {
		display: flex;
		width: 100%;
		margin: 1.5rem 0 1.5rem;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		.search {
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			.search-input {
				width: calc(100% - 15.6rem);
			}
			.search-submit {
				width: 15rem;
			}
		}
	} // .search-wrapper

</style>
