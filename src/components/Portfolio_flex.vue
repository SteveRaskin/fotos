<template>

	<transition name="fade-component" mode="out-in">

	<div class="component">

		<div class="hx-wrapper">
			<h1>{{ h1 }}</h1>
		</div>

		<div class="slideshow">

			<p class="debug">{{ portfolio[objID].img }}</p>

			<button id="next" v-on:click="buttonNav($event)"></button>
			<button id="previous" v-on:click="buttonNav($event)"></button>

			<!-- 'thumbnails' = thumbnails -->
			<ul class="thumbnails">
				<li v-for="obj in portfolio" v-bind:key="obj.id">
					<a href="#" v-bind:title="obj.metadata" v-on:click="updateObjId(obj.id)">
						<img :src="'/static/portfolio/'+obj.img" v-bind:alt="obj.metadata" />
					</a>
				</li>
			</ul>

			<div class="active-image-wrapper" :style="imgWrapperStyle">
				<transition name="img-fade" mode="out-in">
				<!--
					see "Transitioning Between Elements" in the docs about <transition>; a :key is required when transitioning between elements of the same type
				-->
					<img
						class="active-image"
						:src="'/static/portfolio/'+portfolio[objID].img"
						v-bind:alt="objID"
						v-bind:key="portfolio[objID].img"
						@load="updateImgDims"
						:style="imgStyle"
					/>
				</transition>
			</div><!-- END .-image-wrapper -->

		</div><!-- END .slideshow -->

	</div><!-- END .component -->
</transition>

</template>



<script>

	import Portfolio from '@/data/foodstylist.json';

	export default {
		name: 'Portfolio',
		data () {
			return {
				h1: 'Portfolio',
				portfolio: Portfolio,
				portfolioLength: 0,
				objID: 0,
				imgWrapperStyle: {
					// "max-width": "calc(100% - 90px)",
					// overflow: "hidden",
					// border: "1px solid red"
				},
				imgStyle: {
					"max-width": null,
					"max-height": null,
					"border": null
				}
			}
		},
		created: function() {
			var portfolio = require('@/data/foodstylist.json');
			// this.portfolio = portfolio; // alt: via import
         // in lieu of IDs in the .json, set IDs dynamically w/'key' iterator
			for (let key in portfolio) {
				portfolio[key].id = key;
			}
			this.portfolioLength = portfolio.length;
			window.addEventListener('keyup', this.detectKeys);
		}, // created

		methods: {
			updateObjId: function(selObjID) {
				this.objID = parseInt(selObjID);
			},
			objIdDec: function() {
				this.objID = (this.objID == 0) ? parseInt(this.portfolioLength - 1) : parseInt(this.objID -= 1);
			},
			objIdInc: function() {
				this.objID = (this.objID == parseInt(this.portfolioLength - 1)) ? parseInt(1) : parseInt(this.objID += 1);
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
				if (e.which === 37) { // left arrow
					this.objIdDec();
				} else if (e.which === 39) { // right arrow
					this.objIdInc();
				}
			}, // detectKeys
			updateImgDims: function() {
            // constrain the displayed active image width to its natural width
				// let imgWrapper = document.querySelector(".active-image-wrapper");
				let activeImg = document.querySelector(".active-image");
				this.activeImgWidth = activeImg.naturalWidth;
				this.activeImgHeight = activeImg.naturalHeight;
				console.log("this.activeImgHeight", this.activeImgHeight);
				// this.activeImgHeight = activeImg.naturalHeight;
			}
		} // methods
	}
</script>





<style scoped lang="scss">

	main {
		flex-flow: row wrap;
		.debug {
			display: none;
			margin-bottom: 3rem;
			padding: .3rem;
			background: red;
			color: white;
		}
	} /* main */

		.slideshow {
			position: relative;
			display: flex;
			width: calc(100% + 3rem); // take pack the padding on #app
			// height: calc(100vh - [ header height ]);
			margin: 0 -1.5rem; /* re; buttons, which I want flush */
			// padding: 0 45px; /* re; arrows */
			flex-flow: row nowrap;
			justify-content: space-between;
				align-items: flex-start;
			border-top: 0px dotted #000;

			button {
				display: inline-block;
				// position: absolute;
				width: 60px;
            // if flex, need min-width
				min-width: 60px;
				max-width: 60px;
				height: 210px;
				background-color: transparent;
				// background-image: url('../../static/chevrons_90x90.png');
				background-image: url('../../static/chevronz_120x420.png');
				// background-position: cover;
				background-position: 0 0;
				background-repeat: no-repeat;
				cursor: pointer;
				border: 0;
				align-self: center;
				border: 0px solid #bbb;
				opacity: .3;
				&#previous {
					order: 1;
					left: 0;
					// top: .3rem;
					// top: 3rem;
					background-position: 0 0;
					&:hover { background-position: 0 -210px; }
				}
				&#next {
					order: 4;
					right: 0;
					// top: .3rem;
					// top: 3rem;
					background-position: -60px 0;
					&:hover { background-position: -60px -210px; }
				}
			}
			@media (min-width: 444px) {
				button { align-self: flex-start;  border: 0px solid #bbb; }
			}

			ul.thumbnails {
				order: 2;
				display: none;
				overflow: hidden;
			}

			.active-image-wrapper {
				order: 3;
				width: 100%;
				overflow: hidden;
				margin: 0 auto;
				border-top: 0px solid lime;
				img { border-top: 0px solid red; }

				img {
					margin: auto;
					display: inherit;
					border-radius: 3px;
				}
			}
         // only applies to > mobile view/MQ
			$thumbnailSize: 54px;

         // re: margins on .thumbnails li, not ul.thumbnails ...
			$thumbnailMargin: $thumbnailSize / 3;

			// $thumbnailsWidth: calc((#{$thumbnailSize} * 6) + (#{$thumbnailMargin} * 5));
			$thumbnailsWidth: calc((#{$thumbnailSize} * 5) + (#{$thumbnailMargin} * 4));
			//  re: margins on ul.thumbnails, which are used to calc other values
			$thumbnailsLeftMargin: $thumbnailSize / 2;
			$thumbnailsRightMargin: $thumbnailSize / 3;

			$activeImageWrapperWidth: calc(100% - (#{$thumbnailsWidth} + #{$thumbnailsLeftMargin} + #{$thumbnailsRightMargin} ));

			$minWidthForThumbs: calc(	(#{$thumbnailsWidth} * 2) + (#{$thumbnailsLeftMargin} + #{$thumbnailsRightMargin}) );

			// @media (min-width: $minWidthForThumbs) {
			@media (min-width: 734px) {
				ul.thumbnails {
					display: inline-block;
					width: $thumbnailsWidth;
					min-width: $thumbnailsWidth; // if flex, need min-width
					max-height: 100vh;
               // and if flex, skip the margin?
					// margin-left: $thumbnailsLeftMargin;
					// margin-right: $thumbnailsRightMargin;
					margin-right: $thumbnailsRightMargin;
					border-top: 0px solid red;
				}
				.thumbnails li	{
					display: block;
					float: left;
					width: $thumbnailSize;
					height: $thumbnailSize;
					margin: 0 $thumbnailMargin $thumbnailMargin 0;
					// &:nth-of-type(6n) { margin-right: 0; border-top: 0px solid red;}
					&:nth-of-type(5n) { margin-right: 0; border-top: 0px solid red;}
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
					}
					img { width: $thumbnailSize; height: $thumbnailSize; /*!!!*/ border-radius: 50%; background: #fff; }
					// .selected	{ /*margin-top: -3px; border: 3px solid #666; */ border: 3px solid #5ba1ff; border: 3px solid #fff; border: 1px dotted #000; }
					// .selected a	{ color: #000; opacity: 1; }
				}

				.active-image-wrapper {
					position: relative;
					width: $activeImageWrapperWidth;
					flex-grow: 1;
					margin: 0;
					border-top: 0px solid lime;
				}
			} /* MQ */

			.img-fade-enter-active { transition: all .6s ease; }
			.img-fade-leave-active { transition: all .6s ease-in-out; }

			.img-fade-enter,
			.img-fade-leave-to { opacity: 0; }

		} /* .slideshow */














</style>
