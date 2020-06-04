<template>

	<div class="container search-results">

		<app-search-form />

		<div
			class="search-results-wrapper"
			v-bind:class="[{ open: searchResults.length > 0 }, { noresults: searchResults.length < 1 }]"
		>

			<div class="no-search-results" v-if="searchResults.length == 0 && availSearchTerms.length">
				<h4 class="results-count" >
					no results matching "{{ titleCase(getSearchTerm) }}". Maybe try searching for one of these terms:
				</h4>
				<ul class="search-terms">
					<li
						class="search-term"
						v-for="(term, ix) in availSearchTerms" v-bind:key="ix"
						@click="updateRouteParam(term)"
					>{{ term }}</li>
				</ul>
			</div>

			<div class="pos-search-results">
				<h4 class="results-count" v-if="searchResults.length">
					{{ searchResults.length }} result<span v-if="searchResults.length > 1">s</span> matching search "{{ titleCase(searchTerm) }}":
				</h4>

				<ul class="search-results">
					<li v-for="(imgObj, ix) in searchResults" :key="ix">
						<p>{{ imgObj.metadata }}</p>
						<!-- family site -->
						<img v-if="(imgObj.path.length)" :src="require('@/assets/img/collections/' + imgObj.path + '/' + imgObj.data + '/' + imgObj.imgFile)" alt="" />
						<!-- OTL pofo -->
						<img v-if="(!imgObj.path.length)" :src="require('@/assets/img/collections/' + imgObj.data + '/' + imgObj.imgFile)" alt="" />
					</li>
				</ul>
			</div>

		</div>

	</div><!-- END .search-wrapper -->

</template>



<script>

	import SearchForm from "@/components/TheSearchForm.vue"
	import Search from '@/mixins/mixin_search.js';
	import TitleCase from '@/mixins/titleCase.js';

   export default {
		components: {
			'app-search-form': SearchForm
		},
		props: {
		},
      data() {
         return {
				searchTerm: this.getSearchTerm,
				availSearchTerms: []
         }
    	},
		created: function() {
			this.$store.state.collectionList.length ? this.collectionList = this.$store.state.collectionList : this.collectionList = JSON.parse(localStorage.getItem("collectionList")); // string-to-object to get values

			this.$store.state.collectionFiles.length ? this.collectionFiles = this.$store.state.collectionFiles : this.collectionFiles = JSON.parse(localStorage.getItem("collectionFiles")); // string-to-object to get values

			// for the template
			// this.searchTerm = this.$route.params.searchTerm;

			this.$store.state.searchTerm ? this.searchTerm = this.$store.state.searchTerm : this.searchTerm = localStorage.getItem("searchTerm");

			this.$store.state.availSearchTerms.length ? this.availSearchTerms = this.$store.state.availSearchTerms : this.availSearchTerms = JSON.parse(localStorage.getItem("availSearchTerms"));
		},
		beforeRouteUpdate(to, from, next) {
			next();
			this.searchTerm = this.$route.params.searchTerm;
			// this.searchTerm = this.$store.state.searchTerm;
			this.doSearch(this.searchTerm);
		},
		computed: {
			// getters run after the search mixin has re-committed
			getSearchTerm() {
				return this.$store.getters.getSearchTerm;
			},
			searchResults: {
				get: function() {
					return this.$store.getters.getSearchResults;
				},
				set: function() {}
			},
		},
		updated: function() { // fires on subsequent searches
		},
		watch: {
			'$route'(to, from) {
			}
		},
		mounted: function() {},
		methods: {
			updateRouteParam: function(term) {
				this.$router.replace({
					params: { searchTerm: term },
				})
				this.doSearch(term);
			}
		},
		mixins: [ Search, TitleCase ]
   }
</script>



<style lang="scss" scoped>

	.collections-link {
		font-size: 1.2rem;
		border-bottom: 1px dotted lime;
	}
	.collections-link:hover {
		border-bottom: 1px solid lime;
	}

	.search-terms {
		width: 100%;
		columns: 15.3rem auto;
		li {
			color: royalblue;
			border-bottom: 1px dotted royalblue;
			&:hover {
				color: floralwhite;
				border-bottom: 1px solid floralwhite;
				cursor: pointer;
			}
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
			width: 100%;
			flex-flow: column nowrap;
			justify-content: flex-start;
			align-items: center;
			margin: 0;
			overflow: hidden;
			transition: .3s all ease-in-out;
			li {
				width: 100%;
				max-width: 750px;
				margin: 0 auto 1.5rem;
				border: .15rem solid lighten($b, 9%);
				border-radius: .3rem;
				transition: ease-in-out all .15s;
				p {
					text-align: right;
					font-size: 1.05rem;
					text-transform: capitalize;
				}
				img {
					display: block;
					width: 100%;
					max-width: 100%;
					border: .75rem solid floralwhite;
					border-radius: .15rem;
				}
			}
		}
	} // .search-results-wrapper

</style>
