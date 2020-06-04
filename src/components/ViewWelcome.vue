<template>

	<div class="container container-welcome">

		<section>

			<div class="hx-wrapper">
				<h1>Welcome to Fotos!</h1>
			</div>

			<div class="welcome">

				<p>
					<b>'Fotos' is another application built using Vue.js, and incorporating state management via Vuex</b>.
				</p>

				<p>
					Sometime ago I built a small site which mainly comprised an image gallery. In my ongoing work with Vue.js, I had an idea to re-purpose that site, expanding it so that it could instead be a <i>collection</i> of photo galleries, make it dynamic, and searchable.
				</p>

				<p>
					'Fotos' is the result of that effort. I opted to forgo Firebase this time, mainly because one of my prime objectives in building this application was to get my feet wet with Vuex. So the data is all in .json files.
				</p>

				<p>
					Speaking of which, here's what's happening: when the Collections view loads, a .json file - a manifest, so to speak - referencing the various collections, is loaded, assigned to the Vuex store, and iterated to generate the collection cards. The objects in this manifest .json hold, among other values, the path of each collection's .json data, and a value which is used as a route parameter. This architecture makes it very easy to add galleries to the application.
				</p>

				<p>
					(And just for a little variety - and because I'm a bit of a random junkie, I added some logic to the Collections view so that, rather than using a pre-selected placeholder for each collection card, an image is randomly selected from each collection for use in a collection card. You can see this in action by refreshing the Collections view.)
				</p>

				<p>
					Each of the collection .json files' objects hold the file path, metadata (used as a caption), and a tags array corresponding to each image. Both the metadata and the tags array are used by the search function.
				</p>

				<p>
					I wanted very much to have the views - especially search results - survive a refresh, so I opted to 'back up' the $store with local storage &hellip; and then I <i>still</i> had to dance with .htaccess.
				</p>

				<ul>
					<li>
						in any collection, you can navigate the collection (i.e., the images) by either clicking on a thumbnail, clicking on the arrows overlaying the featured image, or by using your arrow keys;
					</li>
					<li>
						to return to the Collections list, click or tap the camera image in the header;
					</li>
				</ul>

				<p>
					more collections to come &hellip;
				</p>
				<p>
					sr
				</p>


				<router-link
					tag="a"
					class="collections-link"
					:to="{ name: 'Collections', params: {} }"
					tabindex="3"
				>
					go to the Collections
				</router-link>



				<div class="credits">

					<p>
						P.S. shout-outs to the various photographers whose work I found on <a href="http://unsplash.com" title="unsplash.com" target="_blank">unsplash.com</a>, used in the header:
					</p>

					<ul>
						<li>
							<!-- 'F' -->
							<a
								href="https://unsplash.com/@helloimnik?utm_medium=referral&utm_campaign=photographer-credit"
								title="Hello I'm Nik on unsplash"
								target="_blank"
							>
								Hello I'm Nik
							</a>
						</li>
						<li>
							<!-- 'O' -->
							<a
								href="https://unsplash.com/@jeremyperkins?utm_medium=referral&utm_campaign=photographer-credit"
								title="Jeremy Perkins on unsplash"
								target="_blank"
							>
							Jeremy Perkins
							</a>
						</li>
						<li>
							<!-- 'T' -->
							<a
								href="https://unsplash.com/@mct1997?utm_medium=referral&utm_campaign=photographer-credit"
								title="Manuel Cortina on unsplash"
								target="_blank"
							>
								Manuel Cortina
							</a>
						</li>
						<li>
							<!-- 'O' -->
							<a
								href="https://unsplash.com/@villxsmil?utm_medium=referral&utm_campaign=photographer-credit"
								title="Luis Villasmil on unsplash"
								target="_blank"
							>
								Luis Villasmil
							</a>
						</li>
						<li>
							<!-- 'S' -->
							<a
								href="https://unsplash.com/s/photos/s?utm_medium=referral&utm_campaign=photographer-credit"
								title="Danielle Rice on unsplash"
								target="_blank"
							>
								Danielle Rice
							</a>
						</li>
						<li>
							<a
								href="https://unsplash.com/@andalexander?utm_medium=referral&utm_campaign=photographer-credit"
								title="Andrew Draper on unsplash"
								target="_blank"
							>
								Andrew Draper
							</a>
						</li>
					</ul>
				</div>

			</div>

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
		text-shadow: 6px 6px 6px #000;
	}

	.welcome ul {
		margin: auto 18% auto 9%;
		margin-left: 3rem;
		list-style: disc outside;
	}
	.welcome li {
		margin-bottom: 1.5rem;
	}
	.welcome a {
		color: royalblue;
		border-bottom: 1px dotted royalblue;
		transition: all .3s ease-in-out;
	}
	.welcome a:hover {
		color: floralwhite;
		border-bottom: 1px solid floralwhite;
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

	.welcome .credits {
		margin-top: 3rem;
		padding-top: 4.5rem;
	}
	.welcome .credits p {
		font-size: .99rem;
	}
	.welcome .credits li {
		margin-bottom: .3rem;
		font-size: .99rem;
	}





</style>
