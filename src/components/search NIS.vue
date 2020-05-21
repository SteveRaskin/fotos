<template>

	<div class="search-wrapper">

		<div class="search">
			<input type="text" class="search-input" v-model="searchTerm" placeholder="search by name, occasion" />
			<!-- <button type="submit" class="search-submit" @click="doSearch(searchTerm)">show me</button> -->

		</div>

	</div><!-- END .search-wrapper -->

</template>



<script>

	import Search from '@/mixins/mixin_search.js';

   export default {
		props: {
			collectionList: Array,
			collectionFiles: Array
		},
      data() {
         return {
				search: "",
				searchTerm: "",
				searchResults: []
         }
    	},
		created: function() {
			// console.log("Array.isArray(collectionList)", Array.isArray(this.collectionList));
		},
		mounted: function() {},
		mixins: [ Search ],
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
			width: 100%;
			margin: .3rem 0 0;
			padding: 0 $space * 5;
			max-height: 0;
			height: 0;
			overflow: hidden;
			transition: .3s all ease-in-out;
			&.open {
				max-height: 100vh;
				height: auto;
				padding: $space * 3 $space * 5;
				border-top: 0px solid lighten($b, 90%);
				border-bottom: 3px solid lighten($b, 75%);
			}
			&.noresults {
				max-height: 100vh;
				height: auto;
				padding: $space * 3 $space * 5;
				border-top: 0px solid lighten($b, 90%);
				border-bottom: 3px solid lighten($b, 75%);
			}

			.results-count {
				display: block;
				// margin: .9rem 0 1.5rem;
				margin-bottom: .9rem;
				font-weight: bold;
			}
			.search-results {
				// max-height: 0;
				// height: 0;
				overflow: hidden;
				transition: .3s all ease-in-out;
				// &.open { max-height: 100vh; height: auto; }
			}
		} // .search-results-wrapper

	   .search-results li {
	      margin-bottom: .9rem;
			padding: $space * 3;
	      color: rgb(18, 72, 255);
	      background: #fff;
	      border: .15rem solid lighten($theme1, 9%);
	      border-radius: .3rem;
			transition: ease-in-out all .15s;
	   }
	   .search-results li:hover {
	      margin-bottom: .9rem;
	      color: #fff;
	      background: rgb(18, 72, 255);
	      border: .15rem solid rgb(18, 72, 255);
	   }
		.search-results li a {
			color: $theme1;
			border-bottom: 1px dotted $theme1;
			transition: ease-in-out all .15s;
		}
		.search-results li:hover a {
			color: #fff;
			border-bottom: 1px solid #fff;
		}
	} // .search-wrapper


</style>
