<template>

	<div class="search-wrapper">

		<app-search />

		<div
			class="search-results-wrapper"
			v-bind:class="[{ open: searchResults.length > 0 }, { noresults: searchResults.length < 1 }]"
		>
			<h4 class="results-count" v-if="searchResults.length == 0">
				no results matching "{{ searchTerm }}":
			</h4>
			<h4 class="results-count" v-if="searchResults.length > 0">
				{{ searchResults.length }} result<span v-if="searchResults.length > 1">s</span> matching search "{{ searchTerm }}":
			</h4>

			<ul class="search-results">
				<li v-for="(imgObj, ix) in searchResults" :key="ix">
					<img :src="require('@/assets/img/collections/' + imgObj.path + '/' + imgObj.data + '/' + imgObj.imgFile)" alt="" />
				</li>
			</ul>
		</div>

	</div><!-- END .search-wrapper -->

</template>



<script>

	import SearchForm from "@/components/TheSearchForm.vue"
	import Search from '@/mixins/mixin_search.js';

   export default {
		components: {
			'app-search': SearchForm
		},
		props: {
		},
      data() {
         return {
				searchTerm: "",
         }
    	},
		created: function() {
			// for the template
			this.searchTerm = this.$route.params.searchTerm;
			// this.searchTerm = this.getSearchTerm; // TODO: add to $store init ?
		},
		computed: {
			// getSearchTerm & searchResults are committed from the search mixin
			getSearchTerm() {
				return this.$store.getters.getSearchTerm;
			},
			searchResults: {
				get: function() { return this.$store.getters.getSearchResults },
				set: function() {}
			},
		},
		beforeRouteUpdate(to, from, next) {
			next();
			this.searchTerm = this.$route.params.searchTerm;
			// 'back', 'forward' don't update results
			this.doSearch(this.searchTerm);
		},
		updated: function() { // fires on subsequent searches
			// console.log("updated");
		},
		watch: {
			'$route'(to, from) {
			}
		},
		mounted: function() {},
		mixins: [ Search ]
   }
</script>



<style lang="scss" scoped>

	.search-wrapper {
		width: 100%;
		// subheader has margin-bottom, so w/search, counter it here w/negative margin-top
		margin: 1.5rem 0 1.5rem;
		display: flex;
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

		.search-results-wrapper {
			display: flex;
			flex-flow: column nowrap;
			justify-content: flex-start;
			width: 100%;
			max-height: 0;
			height: 0;
			// overflow: hidden;
			transition: .3s all ease-in-out;
			&.open {
				max-height: 999999vh;
				height: auto;
			}
			&.noresults {
				max-height: 100vh;
				height: auto;
				padding: $space * 3 $space * 5;
			}

			.results-count {
				display: block;
				margin-bottom: .9rem;
				font-weight: bold;
			}
			.search-results {
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				width: 100%;
				margin: 0;
				overflow: hidden;
				transition: .3s all ease-in-out;
			}
		} // .search-results-wrapper

	   .search-results li {
	      margin-bottom: .9rem;
			padding: $space * 3;
	      color: rgb(18, 72, 255);
	      border: .15rem solid lighten($b, 9%);
	      border-radius: .3rem;
			transition: ease-in-out all .15s;
			img {
				display: block;
				max-width: 750px;
				margin: 0 auto;
			}
	   }
	} // .search-wrapper


</style>
