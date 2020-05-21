// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App.vue';

import './scss/app.scss';

// GLOBAL NON-COMPONENTS
import Store from './store/index.js';
import Routes from './router/routes.js';
import VueResource from 'vue-resource';

// GLOBAL COMPONENTS
import theHeader from '@/components/TheHeader.vue';
import theNav from '@/components/TheNav.vue';
import theFooter from '@/components/TheFooter.vue';

// import firebase from 'firebase/app';
// import 'firebase/auth';


// REGISTER GLOBAL COMPONENTS
Vue.use(VueResource);
Vue.component('app-header', theHeader);
Vue.component('app-nav', theNav);
Vue.component('app-footer', theFooter);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store: Store,
	router: Routes,
	components: { App },
	template: '<App/>'
})
