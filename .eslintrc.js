/*
// https://eslint.org/docs/user-guide/configuring
	// required to lint *.vue files
	plugins: [
		'vue'
	],
}
*/

module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		// https://vuejs.github.io/eslint-plugin-vue/rules/
		// 'plugin:vue/essential', 'plugin:vue/strongly-recommended', 'plugin:vue/recommended'
		'plugin:vue/recommended',
		'@vue/standard',

	],
	rules: {
		// override if necessary
		"html-indent": 0
	},
	parserOptions: {
		parser: 'babel-eslint',
	},

	rules: {
		// TODO: learn wtf these mean
		// ORIG:
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// Finn ux.engineer on StackOverflow:
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// allow debugger during development
		// allow async-await
		'generator-star-spacing': 'off',
		"no-tabs": "off",
		"indent": "off",
		"no-multiple-empty-lines": "off",
		"semi": "off",
		"space-before-function-paren": "off",
		"quotes": "off",
		"space-before-blocks": "off",
		"comma-dangle": "off",
		"no-mixed-spaces-and-tabs": "off",
		// block-spacing should be one of: 0 = off, 1 = warn, 2 = error
		"block-spacing": 1,
		// brace-style should be one of: 0 = off, 1 = warn, 2 = error
		"brace-style": 1,
		// "allowTernary": 1,
		// "allowShortCircuit": 1,
		"no-unused-expressions": 0,
		"max-len": 0,
		"array-bracket-spacing": 1,
		"brace-style": 1,
		//
// "vue/html-indent": ["error", type, { ...
// type (number | "tab") ... The type of indentation. Default is 2. If this is a number, it's the number of spaces for one indent. If this is "tab", it uses one tab for one indent.
// attribute (integer) ... The multiplier of indentation for attributes. Default is 1.
// baseIndent (integer) ... The multiplier of indentation for top-level statements. Default is 1.
// closeBracket (integer) ... The multiplier of indentation for right brackets. Default is 0.
// alignAttributesVertically (boolean) ... Condition for whether attributes should be vertically aligned to the first attribute in multiline case or not. Default is true
// ignores (string[]) ... The selector to ignore nodes. The AST spec is here. You can use esquery to select nodes. Default is an empty array.
		"vue/html-indent": [ "warn", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"vue/multiline-html-element-content-newline": [ "warn", {
			"ignoreWhenEmpty": true,
			"ignores": [ "pre", "textarea" ],
			"allowEmptyLines": true
		}],
		//
		"prefer-const": 0
	},
};
