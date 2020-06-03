import Vue from 'vue';
import App from '@/App.vue';

import '@/assets/css/app.css';

// GLOBAL NON-COMPONENTS
import Store from './store/index.js';
import Routes from './router/routes.js';
import VueResource from 'vue-resource';

// GLOBAL COMPONENTS
import theHeader from '@/components/TheHeader.vue';
import theNav from '@/components/TheNav.vue';
import theFooter from '@/components/TheFooter.vue';


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
