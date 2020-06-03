<template>

	<div class="container container-welcome">

		<section>

			<div class="hx-wrapper">
				<h1>Welcome to Fotos!</h1>
			</div>

			<div class="welcome">

				<p>
					<b>Welcome back to the Raskin's foto gallery</b>. Please have a quick read so you're aware of the changes.
				</p>

				<p>
					Mainly the updates comprise <b>the search function</b>, <b>'responsiveness'</b> (layouts vary according to the device/screen size), and visual design enhancements. A click or tap on the camera in the header, btw, will always bring you back to the 'Collections' view.
				</p>

				<p>
					The search results are based on the image data 'tags' which are mostly names, ergo you'll get the most comprehensive results with name searches. Other search terms that will have results include, "backyard", "birthday", "dinner", but if I'm not mistaken none of the tag data yet includes 'Bar Mitzvah', and the only city that returns results is Ottawa.
				</p>
				<p>
					Pending: new data (images) at my earliest convenience, some text corresponding to each collection, etc.
				</p>
				<p>
					Apologies for the basic captions, and for any errors therein. Also I'm aware that there are some dubious groupings, and perhaps some incorrect dates - these type of errors are more likely in the older collections, because the image files' datestamps may have been overwritten when duplicated or moved.
				</p>

				<p>
					As to navigating the collections:
				</p>

				<ul>
					<li>
						in any collection, you can navigate the collection (the images) by either clicking on a thumbnail, clicking on the arrows overlaying the featured image, or simply by using your arrow keys
					</li>
					<li>
						to return to the Collections list, click or tap the camera image in the header
					</li>
				</ul>

				<p>
					more to come &hellip;
				</p>
				<p>
					xo sr
				</p>

			</div>

			<router-link
				tag="a"
				class="collections-link"
				:to="{ name: 'Collections', params: {} }"
				tabindex="3"
			>
				go to the Collections
			</router-link>


		</section>
	</div>
</template>




<script>

	export default {
		name: "Welcome",

		data: function() {
			return {
			}
		},
		created: function() {
		},
		mounted: function() {
		},
		methods: {
		},
		watch: {}
	}
</script>



<style lang="scss" scoped>

	.container-welcome h1 {
		font-size: 2.4rem;
	}

	.welcome {
		padding: 1.5rem;
		background: #222;
		border: 6px double #444;
		border-radius: .15rem;
	}

	.welcome p {
		margin-bottom: 1.8rem;
		font-size: 1.11rem;
	}

	.welcome ul {
		margin: auto 18% auto 9%;
		margin-left: 3rem;
		list-style: disc outside;
	}
	.welcome li {
		margin-bottom: 1.5rem;
	}


	.lessons {
		margin: auto 18% auto 9%;
		list-style: lower-roman outside;
	}
	.lessons li {
		margin-bottom: 1.5rem;
	}
	.lessons li:last-of-type {
		list-style: none;
	}


	.collections-link {
		margin-top: 3rem;
		border-bottom: 1px dotted royalblue;
	}
	.collections-link:hover {
		border-bottom: 1px solid royalblue;
	}

</style>
