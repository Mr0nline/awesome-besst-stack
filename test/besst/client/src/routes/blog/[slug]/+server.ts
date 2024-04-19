import { treaty } from '@elysiajs/eden';
import type { appType } from '@server/index';

const eden = treaty<appType>(
	typeof window === 'undefined' ? `http://localhost:8080` : window.location.origin
);

const { data } = await eden.products.nendoroid.skadi.get({
	query: {
		username: ''
	}
});
console.log('😊 -> a:', data);
