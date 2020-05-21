<template>

		<nav>
			<ul>
				<!--
				<li>
					<router-link
						class="collections-link"
						:to="{ name: 'Collections', params: { mainClass: 'nav02' } }"
						tabindex="3">
						The Collections
					</router-link>
				</li>
				-->
				<li>
					<router-link
						class="login-link"
						:to="{ name: 'LogIn', params: { mainClass: 'nav01' } }"
						tabindex="6">
						Log In
					</router-link>
				</li>

			</ul>
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
		ul {
			display: flex;
			justify-content: space-around;
			li {
				a {
					display: block;
					color: #fff;
					font-family: $font2;
					font-size: 1.5rem;
					font-weight: 600;
					text-transform: capitalize;
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
						border: 1px solid lime;
						transition: all .45s ease-in-out;
					}
					&::before {
						margin: 0 .6rem 0; // inline-block
					}
					&::after {
						margin: 0 0 0 .6rem; // inline-block
					}
					&:hover::before,
					&:hover::after {
						background: lime;
					}
					&:hover::before {
						transform: rotate(-135deg);
					}
					&:hover::after {
						transform: rotate(135deg);
					}
				}
			}
		}
	}


</style>


<!--  -->
