<template>

	<div class="container container-collections" ref="container">

		<div class="hx-wrapper">
			<h1>
				<router-link
					tag="span"
					class="collections-link"
					:to="{ name: 'Collections', params: {} }"
					tabindex="3"
				>
					Collections
				</router-link>
				<span class="view-title">
					{{ displayName }}
				</span>
			</h1>
		</div>


		<div class="collection-gallery">

			<ul class="thumbnails">
				<li v-for="obj in collection" v-bind:key="obj.id" :class="{ 'selected': obj.id == objID }">
					<a
						href="#"
						:title="obj.metadata"
						@click="updateObjId(obj.id)"
						>
						<img :src="require(`@/assets/img/collections/${subfolder}${imgDir}/${obj.imgFile}`)" />
					</a>
					<p>{{ obj.imgFile }}</p>
				</li>
			</ul>


			<transition name="img-fade" mode="out-in">
				<div
					class="active-image-wrapper-outer"
					:style="imgWrapperOuterStyle"
					:key="collection[objID].id"
				>
					<p class="caption">
						<span class="counter">
							{{ `${objID + 1} of ${this.collectionLength}` }}:
						</span>
						{{ `${collection[objID].metadata}` }}
					</p>

					<div class="active-image-wrapper-inner" :style="imgWrapperInnerStyle">

						<button id="previous" v-on:click="buttonNav($event)">
							<svg id="svg-previous" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 24 24" preserveAspectRatio="none">
								<path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
							</svg>
						</button>

						<button id="next" v-on:click="buttonNav($event)">
							<svg id="svg-next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="60" height="60" viewBox="0 0 24 24" preserveAspectRatio="none">
								<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
							</svg>
						</button>

						<img
							ref="activeImage"
							class="active-image"
							:src="require(`@/assets/img/collections/${subfolder}${imgDir}/${collection[objID].imgFile}`)"
							:alt="objID"
							@load="updateImgDims"
							:style="imgStyle"
						/>
					</div><!-- .active-image-wrapper-inner -->
				</div><!-- .active-image-wrapper-outer -->
			</transition>

		</div><!-- .collection-gallery -->
	</div><!-- .container -->

</template>



<script>

	export default {
		watch: {
			'$route'(to, from) {
				console.log("to, from", to, from);
			}
		},
		props: {
			// nope
			file: String
		},
		data () {
			return {
				viewTitle: "",
				imgDir: "",
				selectedCollection: null,
				collectionName: null,
				displayName: String,
				dataFile: null,
				subfolder: null,
				collectionLength: 0,
				objID: 0,
				activeImgWidth: null,
				activeImgHeight: null,
				collection: [],
				routeTest: null,
				/*
					activeImageWrapperStyle: {
						min-width per img.naturalWidth
						min-height per img.naturalHeight
					},
					buttonStyle: {
						height?
					}
				*/
				imgWrapperOuterStyle: {
				},
				imgWrapperInnerStyle: {
					maxWidth: null
				},
				imgStyle: {
					"max-width": null,
					"max-height": null,
					border: null
				}
			}
		},

		created: function() {
			// $route.params doesn't survive a refresh, so get the manifest again (boo)
			// and then find the displayName corresponding to the selectedCollection,
			// the value that *does* survive a refresh 'cause it's the path's dynamic value
			let collectionList = require("@/data/collections.json");

			// var index = peoples.findIndex(function(person) {
			//   return person.attr1 == "john"
			// }
			let selectedCollectionIx = collectionList.findIndex(obj => {
				return obj.data === this.$route.params.selectedCollection;
			})
			this.displayName = collectionList[selectedCollectionIx].displayName;
			collectionList[selectedCollectionIx].path.length ? this.subfolder = `${collectionList[selectedCollectionIx].path}/` : this.subfolder = "";

			// TODO:
			// if (this.$route.params.selectedCollection === "private" && !currentUser) ...
			if (this.$route.params.selectedCollection === "private") {
				this.$router.replace({ name: 'LogIn' });
			}
			else {
				let collection = this.$route.params.selectedCollection;
				this.imgDir = collection;
				let jsonData = require("@/data/collectiondata/" + collection + ".json");
	         // add IDs
				for (let key in jsonData) {
					jsonData[key].id = key;
				}
				this.collection = jsonData;
				// OOPS: 'collection' is the file name, not the data
				this.collectionLength = jsonData.length;
				this.viewTitle = collection.replace(/[_]/gi, ' ');
			}
			window.addEventListener('keyup', this.detectKeys);
			// console.clear();
		}, // created

		mounted: function() {},
		methods: {
			updateObjId: function(selObjID) {
				this.objID = parseInt(selObjID);
			},
			objIdDec: function() {
				this.objID = (this.objID === 0) ? parseInt(this.collectionLength - 1) : parseInt(this.objID -= 1);
			},
			objIdInc: function() {
				// (this.objID === parseInt(this.collectionLength - 1)) ? console.log("the end") : console.clear();
				// huh? since when was this wrong?
				// this.objID = (this.objID === parseInt(this.collectionLength - 1)) ? parseInt(1) : parseInt(this.objID += 1);
				this.objID = (this.objID === parseInt(this.collectionLength - 1)) ? parseInt(0) : parseInt(this.objID += 1);
			},
			buttonNav: function(event) {
				let buttonID = event.currentTarget.id;
				if (buttonID === "previous") {
					this.objIdDec();
				} else if (buttonID === "next") {
					this.objIdInc();
				}
			}, // buttonNav
			detectKeys: function(e) {
				// if (e.which === 37) { // left arrow
				if (e.keyCode === 37) { // left arrow
					this.objIdDec();
				// } else if (e.which === 39) { // right arrow
				} else if (e.keyCode === 39) { // right arrow
					this.objIdInc();
				}
			}, // detectKeys
			updateImgDims: function() {
            // constrain the active image width to its natural width
				let activeImg = this.$refs.activeImage;
				this.activeImgWidth = activeImg.naturalWidth;
				this.activeImgHeight = activeImg.naturalHeight;
				this.imgWrapperInnerStyle.maxWidth = this.activeImgWidth + 120 + "px";
				// this.imgWrapperInnerStyle.border = "2px solid red";
			}
		}, // methods
		computed: {},
		beforeDestroy: function() {
			window.removeEventListener('keyup', this.detectKeys);
		},
	}
</script>





<style scoped lang="scss">

	.collection-gallery {
		position: relative;
		display: flex;
		width: calc(100% + 3rem); // take back the padding on #app
		// height: calc(100vh - [ header height ]);
		margin: 0 -1.5rem; /* re; buttons, which I want flush */
		// padding: 0 45px; /* re; arrows */

		flex-flow: row nowrap;
		justify-content: space-between;
		// align-items: flex-start;
		.thumbnails {
			display: none;
			// overflow: hidden;
		}

		.active-image-wrapper-outer {
			width: 100%;
			flex-grow: 1;
			margin: 0 auto;
			// border-top: 6px solid red;
			.caption {
				font-size: 1.2rem;
				font-weight: bold;
				text-align: right;
				color: gold;
			}
			.active-image-wrapper-inner {
				width: auto;
				position: relative;
				margin: 0 auto;
				overflow: hidden;
				border-top: 1px solid floralwhite;
				button {
					display: inline-block;
					position: absolute;
					width: 60px;
					height: 100%;
					// top: calc(50% - 30px);
					top: 0;
					background-color: rgba(255, 255, 255, .09);
					cursor: pointer;
					border: 0;
					&#previous { left: 0; }
					&#next { right: 0; }
					svg {
						fill: #fff;
						fill-opacity: .6;
						stroke: #000;
						stroke-width: .6px;
						&:hover { fill: black; }
					}
					&:focus { outline: none; }
				} // button
				img {
					margin: auto;
					display: inherit;
					border-radius: 3px;
				}
			} // .active-image-wrapper-inner
		} // .active-image-wrapper-outer

      // (still in .collection-gallery)
		.thumbnails {
			max-height: 100vh;
			li	{
				display: block;
				float: left;
				text-align: center;
				overflow: hidden;
				background: #fff;
				border: 1px solid #ddd;
				border-radius: 50%;
				transition: all ease-in-out .3s;
				&:hover	{ border: 1px solid #bbb; }
				a {
					display: block;
					opacity: .75;
					transition: inherit;
					&:hover { opacity: 1.0; }
					img {
						border-radius: 50%;
						background: #fff;
					}
				}
				&.selected {
					background: transparent;
					border-radius: 3%;
				}
				&.selected a {
					opacity: 1;
					img {
						border-radius: 3%;
						background: transparent;
					}
				}
			} // li
		} // .thumbnails


		// (still in .collection-gallery)
		$thumbnailSize: 60px; // init
		$thumbnailCount: 0;

      // min-width values include 330-450px for image wrapper
		@media (min-width: 670px) { .thumbnails { display: inline-block; } }

		// MQ 1: 670px
		@media (min-width: 670px) {
			$thumbnailCount: 4;
			$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
			.thumbnails {
				// border-top: 6px solid black;
				min-width: $thumbnailsWidth;
				max-width: $thumbnailsWidth;
				margin: 0 $thumbnailSize/3;
				li	{
					width: $thumbnailSize;
					height: $thumbnailSize;
					margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
					&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
					&:nth-of-type(4n) { margin-right: 0; }
					a img {
						width: $thumbnailSize;
						height: $thumbnailSize;
					}
				}
			}
			.active-image-wrapper-outer {
				width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
			}
		} // MQ 1: 670px

		// MQ 2: 810px
		@media (min-width: 810px) {
			$thumbnailCount: 5;
			$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
			.thumbnails {
				// border-top: 6px solid red;
				min-width: $thumbnailsWidth;
				max-width: $thumbnailsWidth;
				margin: 0 $thumbnailSize/3;
				li	{
					width: $thumbnailSize;
					height: $thumbnailSize;
					margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
					&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
					&:nth-of-type(5n) { margin-right: 0; }
					a img {
						width: $thumbnailSize;
						height: $thumbnailSize;
					}
				}
			}
			.active-image-wrapper-outer {
				width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
			}
		} // MQ 2: 810px

		// MQ 3: 950px
		@media (min-width: 950px) {
			$thumbnailCount: 6;
			$thumbnailsWidth: calc((#{$thumbnailSize} * #{$thumbnailCount}) + ((#{$thumbnailSize}/3) * (#{$thumbnailCount} - 1)));
			.thumbnails {
				// border-top: 6px solid blue;
				min-width: $thumbnailsWidth;
				max-width: $thumbnailsWidth;
				margin: 0 $thumbnailSize/3;
				li	{
					width: $thumbnailSize;
					height: $thumbnailSize;
					margin: 0 $thumbnailSize/3 $thumbnailSize/3 0;
					&:nth-of-type(1n) { margin-right: $thumbnailSize/3; }
					&:nth-of-type(6n) { margin-right: 0; }
					a img {
						width: $thumbnailSize;
						height: $thumbnailSize;
					}
				}
			}
			.active-image-wrapper-outer {
				width: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailSize/3}));
			}
		} // MQ 3: 950px


		.img-fade-enter-active { transition: all .6s ease; }
		.img-fade-leave-active { transition: all .6s ease-in-out; }

		.img-fade-enter,
		.img-fade-leave-to { opacity: 0; }

	} /* .collection-gallery */




</style>
