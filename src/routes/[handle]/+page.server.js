// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import slugify from '@sindresorhus/slugify';
import { jobs } from '../../store';
import { get } from 'svelte/store';

export function load({ params }) {
	const job = get(jobs).find((job) => slugify(job.company + job.position) == params.handle);
	return job;
}
