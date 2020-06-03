<template>

	<nav>
		<router-link
			class="collections-link"
			:to="{ name: 'Collections', params: { mainClass: 'nav02' } }"
			tabindex="3">
			The Collections
		</router-link>
	</nav>

</template>



<script>
	export default {
		name: 'Nav',
		data () {
			return {
			}
		}
	}
</script>




<style lang="scss" scoped>

	nav {
		width: auto;
		a {
			display: block;
			color: #fff;
			font-family: $font1;
			font-size: 1.5rem;
			font-weight: 600;
			text-transform: capitalize;
			transition: .45s all ease-in-out;
			opacity: .6;
			// &.router-link-active { border-bottom: 3px double #ccc; }
			// &:focus { border-bottom: 3px double #000; }
			&:active {
				// outline: 3px double #ccc;
				outline-width: 3px 3px 0 3px;
				outline: 0;
				color: $w;
				background: $b;
				border-radius: 3px;
			}
			&::before,
			&::after {
				display: inline-block;
				width: .9rem;
				height: .9rem;
				// margin: .3rem auto 0; // if block/below
				content: "";
				border: 1px solid royalblue;
				transition: all .45s ease-in-out;
			}
			&::before {
				margin: 0 .6rem 0; // inline-block
			}
			&::after {
				margin: 0 0 0 .6rem; // inline-block
			}
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
		}
	}


</style>


<!--  -->
