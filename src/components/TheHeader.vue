<template>

	<header class="header">

		<h1>
			<router-link
				class="logo-link"
				:to="{ name: 'WelcomeView', params: {} }"
			>
				<img class="letter" :src="require(`@/assets/img/F_90x120.png`)" alt="F" />
				<img class="letter" :src="require(`@/assets/img/O_fire_111x120.png`)" alt="O" />
				<img class="letter" :src="require(`@/assets/img/T_90x120.png`)" alt="T" />
				<img class="letter" :src="require(`@/assets/img/O_neon_90x120.png`)" alt="O" />
				<img class="letter" :src="require(`@/assets/img/S_stones_111x120.png`)" alt="S" />
			</router-link>
		</h1>

		<router-link
			class="collections-link"
			:to="{ name: 'Collections', params: {} }"
			tabindex="3"
		>
		<img :src="require(`@/assets/img/kodak_pony_372x333.png`)" alt="Kodak Pony" />

		</router-link>

		<!-- <app-nav /> -->

	</header>

</template>



<script>
	export default {
		name: 'Header',
		data () {
			return {
				// h1: '',
				h2: 'sr foto galleries',
			}
		}
	}
</script>




<style scoped lang="scss">

	h1 {
		height: 100%;
		.logo-link {
			display: flex;
			height: 100%;
			flex-flow: row nowrap;
			align-items: center;
			.letter {
				max-height: 60%;
				margin-right: 1.8rem;
				margin-right: .9rem;
				transition: all .3s ease-in-out;
				border: .09em solid white;
			}
			.letter:not(:nth-of-type(1)) {
				border-radius: .15rem;
			}
			.letter:nth-of-type(odd) { transform: rotate(-9deg); }
			.letter:nth-of-type(even) { transform: rotate(9deg); }
			&:hover {
				.letter:nth-of-type(odd) { transform: rotate(9deg); }
				.letter:nth-of-type(even) { transform: rotate(-9deg); }
			}
		}
	}

	.collections-link {
		display: flex;
		height: 100%;
		white-space: nowrap;
		align-items: center;
		color: royalblue;
		font-family: $font1;
		font-size: 1.5rem;
		font-weight: 600;
		text-transform: capitalize;
		transition: .45s all ease-in-out;
		opacity: .69;
		overflow: visible;
		&:active,
		&:focus {
			outline: 0;
			color: $w;
			background: $b;
			// border-radius: 3px;
		}
		// &::before,
		// &::after {
		// 	display: inline-block;
		// 	width: .9rem;
		// 	height: .9rem;
		// 	// margin: .3rem auto 0; // if block/below
		// 	content: "";
		// 	border: 1px solid royalblue;
		// 	transition: all .45s ease-in-out;
		// }
		// &::before {
		// 	margin: 0 .6rem 0 0; // inline-block
		// }
		// &::after {
		// 	margin: 0 0 0 .6rem; // inline-block
		// }
		&:hover {
			opacity: 1;
		}
		&:hover::before,
		&:hover::after {
			background: royalblue;
		}
		&:hover::before {
			transform: rotate(-135deg);
		}
		&:hover::after {
			transform: rotate(135deg);
		}
		img {
			height: 150%;
			margin-top: 1.8rem;
			// max-height: 135px;
		}
	}





</style>
