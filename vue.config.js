// vue.config.js


/*
RE: publicPath: [ default is '/' ]
	- requires some trial & error @ 'npm run build'

https://cli.vuejs.org/config/#publicpath:

"The base URL where your application bundle will be deployed ... equivalent to webpack's output.publicPath, but Vue CLI also needs this value for other purposes, so use publicPath instead of modifying webpack output.publicPath ...

Vue CLI assumes your app will be deployed at the root of a domain, e.g. https://www.my-app.com/. If your app is deployed at a sub-path, specify that sub-path using this option, e.g., if your app is deployed at https://www.foobar.com/my-app/, set publicPath to '/my-app/'.

The value can also be set to an empty string ('') or a relative path (./) so that all assets are linked using relative paths. This allows the built bundle to be deployed under any public path ...

Relative publicPath has some limitations and should be avoided when:
	- you are using HTML5 history.pushState routing;
	- you are using the pages option to build a multi-paged app

This value is also respected during development. If you want your dev server to be served at root instead, you can use a conditional value:

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	? '/production-sub-path/'
	: '/'
}
*/

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	? '/fotos/'
	: '/',
	// publicPath: '/',
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
	/*
		valid configureWebpack properties:
			object { amd?, bail?, cache?, context?, dependencies?, devServer?, devtool?, entry?, externals?, infrastructureLogging?, loader?, mode?, module?, name?, node?, optimization?, output?, parallelism?, performance?, plugins?, profile?, recordsInputPath?, recordsOutputPath?, recordsPath?, resolve?, resolveLoader?, serve?, stats?, target?, watch?, watchOptions? }
	*/
	},
}



//
