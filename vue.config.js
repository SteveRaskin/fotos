module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/fotos/' : '/',
	runtimeCompiler: true,
	devServer: {
		port: 8089,
		open: true,
	},
	  // https://github.com/vuejs/vue-cli/issues/4526 [ see Kagz' & jaiko86's comment ]
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/scss/app.scss";`
			}
		}
	},

	pages: {
		index: {
			// not that I was gonna tweak the entry point
			entry: './src/main.js',
			title: "Pics 'n' Fotos"
		}
	},
	configureWebpack: {
	},
}



//
