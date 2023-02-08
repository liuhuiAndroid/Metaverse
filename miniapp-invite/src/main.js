import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import '@/assets/style/base.scss';
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
