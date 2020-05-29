<template>

	<div class="container container-collections">

		<!-- TODO: heading component, here & ViewCollection (props: :to, text, class?, tag) -->
		<div class="hx-wrapper">
			<h1>
				<router-link
					tag="span"
					class="collections-link"
					:to="{ name: 'Collections', params: {} }"
					tabindex="3"
				>
					{{ viewTitle }}
				</router-link>
			</h1>
		</div>

		<app-search
			v-if="(viewName == 'Collections')"
			v-bind:collectionFiles="collectionFiles"
			v-bind:collectionList="collectionList"
		/>

		<ul class="thumbnails collection-thumbnails">
			<li
				class="collection-thumbnail"
				v-for="tileObj in collectionTiles"
				v-bind:key="tileObj.name"
			>
				<router-link
					tag="div"
					class="collection-link"
					:to="{
						name: 'Collection',
						params: { selectedCollection: tileObj.data }
					}"
					@click.native="setSelection(tileObj)"
					>
					<p class="collection-name">{{ tileObj.name }}</p>
					<img :src="require('@/assets/img/collections/' + tileObj.path + tileObj.data + '/' + tileObj.placeholder)" alt="" />
				</router-link>
			</li>
		</ul>

	<!-- </transition> -->
	</div>

</template>



<script>

	import SearchForm from "@/components/TheSearchForm.vue";

	export default {
		// viewName: 'Collections',
		components: {
			'app-search': SearchForm
		},
		props: {
			selectedCollection: String,
		},
		data () {
			return {
				viewTitle: 'The Collections',
				collectionList: [],
				collectionFiles: [],
				collectionTiles: [],
				viewName: 'Collections',
			}
		},

		created: function() {
			if (!this.$store.state.collectionList.length) {
				this.$store.dispatch('loadData');
			}
			this.collectionList = this.$store.state.collectionList;
			this.collectionFiles = this.$store.state.collectionFiles;
			this.collectionList.forEach((collectionObj, ix) => {
				// ... create tileObj to hold name, placeholder img ...
				let tileObj = {};
				// ... store the name in the tileObj, push to collectionTiles[] ...
				tileObj.name = collectionObj.displayName;
				tileObj.data = collectionObj.data;
				// if there's a path value in collections.json, set path in the Tiles, used in the template img URLs
				collectionObj.path.length ? tileObj.path = `${collectionObj.path}/` : tileObj.path = "";
				this.collectionTiles.push(tileObj);
			})
			// ... from each collection.json, set a random img as the placeholder ...
			this.collectionFiles.forEach((collectionFile, ix) => {
				let placeholder = collectionFile[this.random(collectionFile.length)].imgFile;
				this.collectionTiles[ix].placeholder = placeholder;
			})
		}, // created

		methods: {
			// Math.floor() : largest integer less than or equal to a given number
			// Math.random() : >= 0, < 1
			random: function(cl) {
				let min = 0;
				// let max = cl - 1; // will be [ix], ergo != cl
				// let randomVal = Math.floor(Math.random() * (max - min + 1)) + min;
				let max = cl; // w/out '+ 1'
				let randomVal = Math.floor(Math.random() * (max - min)) + min;
				return randomVal;
			},
			setSelection: function(selObj) {
				// collectionTiles.length === collectionList.length, ERGO, mutation handler requires only the index
				this.$store.commit("setSelectedCollection", this.collectionTiles.indexOf(selObj)); // mutations
			}
		}, // methods

		computed: {
			getSelectedCollection: function() {
				return this.$store.state.selectedCollection;
			},
		}
	}
</script>





<style scoped lang="scss">

	.container {}

	// ul.collections-thumbnails
	.collection-thumbnails {
		display: flex;
		width: 100%;
		margin: 0;
		flex-flow: row wrap;
		justify-content: space-between;
		.collection-thumbnail {
			position: relative;
			display: flex;
			flex-flow: column nowrap;
			width: 180px;
			height: 180px;
			margin-bottom: 3rem;
			justify-content: space-between;
			overflow: hidden;
			color: $w;
			border-radius: .15rem;
			transition: all ease-in-out .3s;
			.collection-link {
				cursor: pointer;
			}
			img {
				width: 180px;
				height: 180px;
				border-radius: 51%;
			}
			.collection-name {
				position: absolute;
				left: 0;
				top: calc(50% - 1.5rem);
				width: 100%;
				height: 3rem;
				display: flex;
				flex-flow: row wrap;
				justify-content: center;
				align-content: center;
				background: rgba(0, 0, 0, .66);
				color: $w;
				font-family: $font2;
				font-size: 1.11rem;
				font-weight: 600;
				text-align: center;
				text-transform: uppercase;
				transition: .45s all ease-in-out;
				&:hover { background: rgba(0, 0, 0, 9); }
			}
		} // li
	} // .thumbnails


	// (still in .slideshow)
	$thumbnailSize: 60px; // init
	$thumbnailCount: 0;

   // // min-width values include 330-450px for image wrapper
	// @media (min-width: 670px) { .thumbnails { display: inline-block; } }
	//
	// // MQ 1: 670px
	// @media (min-width: 670px) {
	// 	$thumbnailCount: 4;
	// 	$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
	// 	.thumbnails {
	// 		// border-top: 6px solid black;
	// 		min-width: $thumbnailsWidth;
	// 		max-width: $thumbnailsWidth;
	// 		margin: 0 $thumbnailSize/3;
	// 		li	{
	// 			width: $thumbnailSize;
	// 			height: $thumbnailSize;
	// 			margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
	// 			&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
	// 			&:nth-of-type(4n) { margin-right: 0; }
	// 			a img {
	// 				width: $thumbnailSize;
	// 				height: $thumbnailSize;
	// 			}
	// 		}
	// 	}
	// 	.active-image-wrapper-outer {
	// 		width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
	// 	}
	// } // MQ 1: 670px
	//
	// // MQ 2: 810px
	// @media (min-width: 810px) {
	// 	$thumbnailCount: 5;
	// 	$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
	// 	.thumbnails {
	// 		// border-top: 6px solid red;
	// 		min-width: $thumbnailsWidth;
	// 		max-width: $thumbnailsWidth;
	// 		margin: 0 $thumbnailSize/3;
	// 		li	{
	// 			width: $thumbnailSize;
	// 			height: $thumbnailSize;
	// 			margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
	// 			&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
	// 			&:nth-of-type(5n) { margin-right: 0; }
	// 			a img {
	// 				width: $thumbnailSize;
	// 				height: $thumbnailSize;
	// 			}
	// 		}
	// 	}
	// 	.active-image-wrapper-outer {
	// 		width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
	// 	}
	// } // MQ 2: 810px
	//
	// // MQ 3: 950px
	// @media (min-width: 950px) {
	// 	$thumbnailCount: 6;
	// 	$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
	// 	.thumbnails {
	// 		// border-top: 6px solid blue;
	// 		min-width: $thumbnailsWidth;
	// 		max-width: $thumbnailsWidth;
	// 		margin: 0 $thumbnailSize/3;
	// 		li	{
	// 			width: $thumbnailSize;
	// 			height: $thumbnailSize;
	// 			margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
	// 			&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
	// 			&:nth-of-type(6n) { margin-right: 0; }
	// 			a img {
	// 				width: $thumbnailSize;
	// 				height: $thumbnailSize;
	// 			}
	// 		}
	// 	}
	// 	.active-image-wrapper-outer {
	// 		width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
	// 	}
	// } // MQ 3: 950px


	.img-fade-enter-active { transition: all .6s ease; }
	.img-fade-leave-active { transition: all .6s ease-in-out; }

	.img-fade-enter,
	.img-fade-leave-to { opacity: 0; }

	// .selected	{ /*margin-top: -3px; border: 3px solid #666; */ border: 3px solid #5ba1ff; border: 3px solid #fff; border: 1px dotted #000; }
	// .selected a	{ color: #000; opacity: 1; }


</style>
