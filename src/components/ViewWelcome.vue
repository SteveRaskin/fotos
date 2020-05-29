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

	// import firebase from 'firebase';

	export default {
		name: "Welcome",

		data: function() {
			return {
				email: "",
				password: "",
				confirmPassword: "",
				error: false,
				errorMsgBefore: "oh nohz! somethin' ain't right!",
				errorMsgAfter: "please try again",
				errorMsg: "",
				loggedIn: false,
				emailAddress: "",
				emailText: ""
			}
		},
		created: function() {
			// console.log("this.$router", this.$router);
			// var _this = this;
			// firebase.auth().onAuthStateChanged(function(user) {
			// 	if (user) {
			// 		_this.loggedIn = true;
			// 	} else {
			// 		_this.loggedIn = false;
			// 	}
			// });
		},
		mounted: function() {
			const s1 = "giglog";
			const s2 = "@";
			const s3 = "outtolaunch.com";
			this.emailAddress = "mailto:" + s1 + s2 + s3;
			// console.log("this.emailAddress", this.emailAddress);
			// this.emailText = s1 + s2 + s3;
			this.emailText = "I'm all ears";
			// console.log("this.emailText", this.emailText);
		},
		methods: {
			signOut: function() {
				// firebase.auth().signOut().then(() => {
				// 	// TODO: try again with a mixin for signOut 'cause it's duped in Welcome'
				// 	// p.s. avoid conflict with rules in main.js by just offing any $router call
				// 	// this.$router.replace('LogIn')
				// 	// this.$router.replace({ name: 'Welcome' })
				// })
			},
		},
		watch: {}
	}
</script>



<style lang="scss" scoped>

	.welcome { margin-bottom: 1.8rem; }
	.container-welcome h1 {
		margin-bottom: 1.5rem;
	}

	.btn.btn-welcome {
		padding: 0;
		text-transform: uppercase;
		font-size: .99rem;
		font-weight: 600;
		// color: $theme1;
		border: 0;
		// border-bottom: 1px dashed $theme1;
		border-radius: 0;
		background: transparent;
	}
	.btn.btn-welcome:hover {
		// color: $theme1;
		background: transparent;
		border: 0;
		// border-bottom: 1px solid $theme1;
		border-radius: 0;
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


	// span.email:after { content: "nospam\40example.com"; }
	span.email:after { content: "fedev\40outtolaunch.com"; }

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
