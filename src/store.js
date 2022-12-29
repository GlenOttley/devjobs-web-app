import { data } from './lib/assets/data';
import { readable, writable, derived } from 'svelte/store';

export const jobs = readable(data);
export const filters = writable({
	position: '',
	location: '',
	fullTimeOnly: false
});

// export const filteredJobs = derived([jobs, filters], ([$jobs, $filters]) => {
// 	return Object.values($jobs)
// 		.filter((job) =>
// 			$filters.position ? job.position.toLowerCase().includes($filters.position.toLowerCase()) : job
// 		)
// 		.filter((job) =>
// 			$filters.location ? job.location.toLowerCase().includes($filters.location.toLowerCase()) : job
// 		)
// 		.filter((job) => ($filters.fullTimeOnly ? job.contract == 'Full Time' : job));
// });

export const maxJobs = writable(12);
