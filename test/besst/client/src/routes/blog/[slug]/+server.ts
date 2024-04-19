import { treaty } from '@elysiajs/eden';
import type { appType } from '../../../../../server/src/index';

const eden = treaty<appType>(
	typeof window === 'undefined' ? `http://localhost:8080` : window.location.origin
);

const { data } = await eden.products.nendoroid.skadi.get({
	query: {
		username: 'a'
	}
});
console.log('😊 -> a:', data);

// console.log(a)

// console.log(await eden.array.post('hi'));
