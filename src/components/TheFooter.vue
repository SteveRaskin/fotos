<template>

	<footer class="footer">

		<p class="debug">TheFooter.vue; not much going on here just yet</p>

		<!-- <app-button buttonClass="btn-debug" buttonText="log route" @click.native="test"/> -->

		<!-- <p class="debug">{{ titleCase("just testing, title case")}}</p> -->

		<!-- <router-link
			tag="button"
			class="btn btn-debug"
			:to="{ name: 'UX', params: {} }"
			>wanna see the original UX mockups?
		</router-link> -->


	</footer>

</template>




<script>

	// import debugRoute from '@/mixins/debug_route.js';
	// import titleCase from '@/mixins/titleCase.js';

   export default {
		props: {},

      data() {
			return {
				title: "",
				subtitle: "",
				debugMsg: "footer.vue",
				loggedIn: false
         }
    	},

		created: function() {
			// console.log("footer.vue @created");
		},

		methods: {},

		// mixins: [ debugRoute, titleCase ]

   }
</script>



<style lang="scss">

</style>
