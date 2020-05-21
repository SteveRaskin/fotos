<template>

	<header class="header">

		<h1>
			<router-link :to="{ name: 'WelcomeView', params: {} }">
				<img class="logo" :src="require(`@/assets/img/pics_mockup_1092x374.png`)" alt="pics" />
				<span style="padding: 0 1.5rem; font-size: 4.5rem; transform: rotate(-9deg);">'n'</span>
				<img class="logo" :src="require(`@/assets/img/fotos_mockup_1593x396.png`)" alt="fotos" />
			</router-link>
		</h1>

		<app-nav />

	</header>

</template>



<script>
	export default {
		name: 'Header',
		data () {
			return {
				// h1: '',
				h2: 'sr foto galleries',
				h1css: {
					display: "inline-block"
					// color: "rebeccapurple",
					// "border-bottom": "2px solid #333"
				}
				// headerHeight: {
				// 	height: "",
				// 	border: "3px solid blue"
				// }
			}
		}
	}
</script>




<style scoped lang="scss">

	header {
		// padding-top: .9rem;
		/* display: flex;
		width: 100%;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		text-align: center; */
	}

	h1 {
		font-size: 1.8rem;
		text-transform: lowercase;
	}
	h2 {
		font-size: .99rem;
		text-transform: lowercase;
		font-weight: bold;
		/* border: 2px dotted #ccc; */
	}

	h1 a {
display: flex;
flex-flow: row nowrap;
align-items: center;
align-content: center;
		color: #fff;
		text-shadow:
			2px 2px 2px rgb(102, 51, 153),
			-2px 2px 2px rgb(102, 51, 153),
			2px -2px 2px rgb(102, 51, 153),
			-2px -2px 2px rgb(102, 51, 153);
		text-shadow:
			2px 2px 2px #666,
			-2px 2px 2px #666,
			2px -2px 2px #666,
			-2px -2px 2px #666;
		text-shadow:
			1px 1px 0px #999,
			-1px 1px 0px #999,
			1px -1px 0px #999,
			-1px -1px 0px #999;
		}

	h2 a {
		color: #000;
		padding: .45rem .6rem;
		/* color: #fff;
		background: #999; */
		/* border: 2px solid #ddd; */
		border-radius: 3px;
	}

	h1 a span {
		display: inline-block;
		/* color: rebeccapurple; */
		/* text-shadow: none; */
		/* border-bottom: 2px solid #333; */
	}

	.logo { max-height: 60px; }


</style>
