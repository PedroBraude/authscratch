import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			floc: process.env.NODE_ENV === "development"
		})
	}
};