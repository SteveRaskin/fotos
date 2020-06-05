<template>

	<div class="container container-welcome">

		<section>

			<div class="hx-wrapper">
				<h1>Welcome to Fotos!</h1>
			</div>

			<div class="welcome">

				<p>
					<b>'Fotos' is another application built using Vue.js, incorporating state management (Vuex), and local storage</b>.
				</p>

				<p>
					Sometime ago I built a small site which mainly comprised an image gallery. In my ongoing work with Vue.js, I had an idea to re-purpose that site, expanding it so that it would instead feature a <i><b>collection</b></i> of photo galleries. It had to be <b>dynamic</b>, <b>responsive</b>, <b>extensible</b>, and provide a <b>search function</b>. Beyond that, my objective in building this application was to get my feet wet with <b>Vuex</b>.
				</p>

				<p>
					And since I wanted to have the views - especially search results - survive a refresh, I invited <b>local storage</b> to the party (shortly after which <b>.htaccess</b> <i>crashed</i> the party).
				</p>

				<p><b>'Fotos'</b> is the result of that effort.</p>

				<p>
					Navigating the app is pretty straightforward:
				</p>
				<ul class="how-to">
					<li>
						<b>click or tap the camera image in the header</b> to load the Collections list view;
					</li>
					<li>
						<b>in a collection</b>, navigate the images either by clicking/tapping on a <b>thumbnail</b>, clicking/tapping on the <b>arrows overlaying the featured image</b>, or by <b>using your arrow keys</b>;
					</li>
					<li>
						<b>as to the search function</b> (Collections view): well, how would you know what to search for? Try searching for <i><b>*anything*</b></i> &hellip;
					</li>
				</ul>

				<p>
					Questions or comments? <a v-bind:href="emailAddress" v-bind:title="emailAddress">{{ emailText }}</a>
				</p>

				<p>
					<a href="https://github.com/SteveRaskin/fotos" title="fotos on github" target="_blank">
						'fotos' code on github
					</a>
				</p>

				<p>
					<b>sr</b>
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
						P.S. shout-outs to the photographers whose work I found on <a href="http://unsplash.com" title="unsplash.com" target="_blank">unsplash.com</a>, and use in the header:
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
				emailAddress: "",
				emailText: ""
			}
		},
		created: function() {
		},
		mounted: function() {
			const s1 = "fotos";
			const s2 = "@";
			const s3 = "outtolaunch.com";
			this.emailAddress = "mailto:" + s1 + s2 + s3;
			this.emailText = "feedback is welcome";
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
		// text-shadow: 6px 6px 6px #000;
	}

	.welcome ul {
		margin: 3rem 4.5rem 4.5rem 4.5rem;
		// margin-left: 3rem;
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
		display: inline-block;
		margin: 1.5rem 0 4.5rem 0;
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
