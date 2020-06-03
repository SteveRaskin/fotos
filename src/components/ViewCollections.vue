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
		/>

		<ul class="thumbnails collection-thumbnails">
			<li
				class="collection-thumbnail"
				v-for="tileObj in collectionTiles"
				v-bind:key="tileObj.name"
			>
				<router-link
					tag="a"
					class="collection-link"
					:to="{
						name: 'Collection',
						params: { selectedCollection: tileObj.data }
					}"
					@click.native="setSelection(tileObj)"
					>
					<span class="collection-name">{{ tileObj.name }}</span>
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
			this.$store.dispatch('loadData');
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
		flex-flow: column nowrap;
		justify-content: flex-start;
		align-items: center;
		.collection-thumbnail {
			position: relative;
			display: flex;
			flex-flow: column nowrap;
			width: 180px;
			height: 180px;
			margin-bottom: 3rem;
			padding: .45rem;
			justify-content: space-between;
			overflow: hidden;
			color: $w;
			border-radius: .15rem;
			transition: all ease-in-out .3s;
			.collection-link {
				display: block;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}
			img {
				// width: 180px;
				// height: 180px;
				width: 100%;
				height: 100%;
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
				font-family: $font1;
				font-size: 1.05rem;
				font-weight: 600;
				text-align: center;
				text-transform: uppercase;
				transition: .45s all ease-in-out;
				&:hover { background: rgba(0, 0, 0, 9); }
			}
		} // li
	} // .thumbnails

	@media all and (min-width: 390px) {
		.collection-thumbnails {
			flex-flow: row wrap;
			justify-content: space-around;
		}
	} // min-width 390


</style>
