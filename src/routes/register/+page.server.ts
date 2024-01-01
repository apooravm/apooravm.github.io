// +page.server.ts is the server code of the route
// All the code here will run server side

import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();

		const credentials = {
			name: data.get('name'),
			password: data.get('password')
		};

		console.log(credentials);
	}
};
