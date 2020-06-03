<template>

	<div class="container container-welcome">

		<section>

			<div class="hx-wrapper">
				<h1>Welcome to Fotos!</h1>
			</div>

			<p class="welcome">
				Welcome back to the Raskin's foto gallery!
			</p>

			<p class="welcome">
				Some improvements have been made to the application, mainly a search function, which you'll see on the 'Collections' view, and a new 'Search Results' view. The search results are based on the image data 'tags' which are mostly names, ergo you'll get the most comprehensive results with name searches. There are a few other types of search that will also have results, e.g., "backyard", "birthday", "dinner", but evidently none of the tag data yet includes 'Bar Mitzvah', and the only city that returns results is Ottawa.
			</p>
			<p class="welcome">
				Now that this functionality has been added, I can eventually add new data (images) at my earliest convenience. Also, still pending: some text corresponding to each collection, etc.
			</p>
			<p class="welcome">
				Apologies for the basic captions, and for any errors therein. Also I'm aware that there are some dubious groupings, and perhaps some incorrect dates - these type of errors are more likely in the older collections, because the image files' datestamps may have been overwritten when duplicated or moved.
			</p>

			<p class="welcome">
				As to navigating the collections:
			</p>

			<ul>
				<li>
					in any collection, you can navigate the collection (the images) by either clicking on a thumbnail, clicking on the arrows overlaying the featured image, or simply by using your arrow keys
				</li>
				<li>
					to return to the Collections list, click the word 'Collections' within any gallery
				</li>
			</ul>

			<p class="welcome">
				more to come &hellip;
			</p>
			<p class="welcome">
				xo sr
			</p>


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

	.welcome { margin-bottom: 1.8rem; }
	.container-welcome h1 {
		margin-bottom: 1.5rem;
	}

	.lessons {
		margin: auto 18% auto 9%;
		list-style: lower-roman;
		list-style-position: outside;
		// border: 1px dotted #ccc;
	}
	.lessons li {
		margin-bottom: 1.5rem;
	}
	.lessons li:last-of-type {
		list-style: none;
	}


	.collections-link {
		margin-top: 3rem;
		border-bottom: 1px dotted lime;
	}
	.collections-link:hover {
		border-bottom: 1px solid lime;
	}

	.main ul {
		margin-left: 3rem;
		list-style: circle outside;
	}

	.main ul li {
		margin-bottom: .9rem;
	}



</style>
