<template>
   <div class="container container-login">

      <section class="section-login">

			<h1>log in</h1>


			<div class="" v-if="loggedIn">
				<p>
					you're logged in; wanna
					<router-link
						tag="a"
						class="btn btn-welcome"
						v-on:click.native="signOut"
						:to="{ name: 'Welcome', params: {} }"
						>log out
					</router-link>
					?
				</p>
			</div>

         <div class="fieldset-wrapper" v-if="!loggedIn">
            <fieldset>
               <legend>giglog login</legend>

					<p class="error" v-bind:class="{ true: error }">
						<span class="error-before">{{ errorMsgBefore }}</span>
						<span class="errorMsg">{{ errorMsg }}</span>
						<span class="error-after">{{ errorMsgAfter }}</span>
					</p>

					<!-- EMAIL ADDRESS -->
               <div class="label-input text">
                  <label for="email">email address</label>
                  <input type="text" id="email" ref="emailInput" v-model="email" placeholder="email address" required />
               </div>

               <!-- PASSWORD -->
					<div class="label-input text">
                  <label for="">password</label>
                  <input type="password" id="password" v-model="password" placeholder="password" required />
               </div>

		         <div class="buttons">
						<app-button buttonClass="btn-color-1" buttonText="log in" v-on:click.native="logIn" />
		         </div>
				</fieldset>

         </div><!-- END .fieldset-wrapper -->

			<p v-if="!loggedIn">
				If you don't yet have an account, please create one on the
				<router-link tag="a" class="" :to="{ name: 'SignUp', params: {} }">sign up page</router-link>
			</p>

      </section>

   </div>
</template>



<script>

	// import firebase from 'firebase';

   export default {
		name: "login",
		data: function() {
			return {
				name: "",
				email: "",
				password: "",
				error: false,
				errorMsgBefore: "Message from firebase.io:",
				errorMsgAfter: "Please try again.",
				errorMsg: "",
				loginButtonPath: null,
				loggedIn: false
			}
		},

      props: {},
   	components: {},

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
			// let emailInput = document.querySelector("#email");
			// emailInput.focus();
			this.$refs.emailInput.focus();
		},
      methods: {
			logIn: function() {
				// const emailInput = document.querySelector("#email");
				// firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				// 	// arrow function non-optional re: this.$router
				// 	(user) => {
				// 		const userFirstName = this.email.charAt(0).toUpperCase() + this.email.slice(1).split('@')[0];
				// 		alert("welcome to giglog, " + userFirstName);
				// 		this.$router.replace({ name: 'Projects' })
				// 	},
				// 	(err) => {
				// 		console.log("err.message:", err.message);
				// 		this.error = true;
				// 		this.errorMsg = err.message;
				// 		emailInput.classList += 'true';
				// 		emailInput.focus();
				// 	}
				// )
			}, // logIn

			signOut: function() {
				// firebase.auth().signOut().then(() => {
				// 	// this.$router.replace('LogIn')
				// 	this.$router.replace({ name: 'LogIn' })
				// })
			}
      },

   } // export default
</script>


<style lang="scss" scoped>

   section  {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
		margin-bottom: 3rem;
		padding-bottom: 1.5rem;
		h1 {
			margin-bottom: 1.5rem;
			font-size: 1.8rem;
			// color: $theme1;
			text-transform: uppercase;
		}
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




	.fieldset-wrapper { width: 100%; }
	legend { color: #000; font-weight: bold; text-transform: uppercase; }

	.error {
		max-height: 0;
		height: 0;
		overflow: hidden;
		margin-bottom: 0;
		// color: $error;
		transition: .9s all ease-in-out;
		&.true {
			max-height: 100vh;
			height: auto;
			margin-bottom: .9rem;
		}
		.error-before { margin-right: .6rem; }
		.errorMsg {
			margin-right: .6rem;
			font-weight: bold;
			text-transform: none;
		}
		.error-after {}
	}

</style>
