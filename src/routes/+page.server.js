// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// export const csr = false;
import { filters, maxJobs } from '../store';

export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		filters.set({
			position: data.get('position'),
			location: data.get('location'),
			fullTimeOnly: data.get('fullTimeOnly') === 'on' ? true : false
		});
	},
	removeFilter: async ({ request }) => {
		const data = await request.formData();
		filters.update((currentFilters) => {
			let filterToRemove = data.get('filter');
			let updatedFilters = {};
			filterToRemove === 'position'
				? (updatedFilters.position = '')
				: (updatedFilters.position = currentFilters.position);
			filterToRemove === 'location'
				? (updatedFilters.location = '')
				: (updatedFilters.location = currentFilters.location);
			filterToRemove === 'fullTimeOnly'
				? (updatedFilters.fullTimeOnly = false)
				: (updatedFilters.fullTimeOnly = currentFilters.fullTimeOnly);
			return updatedFilters;
		});
	},
	loadMore: async ({ request }) => {
		const data = await request.formData();
		maxJobs.set(data.get('maxJobs') + 12);
	}
};
