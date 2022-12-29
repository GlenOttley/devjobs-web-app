<script>
	import SearchBar from '../components/SearchBar.svelte';
	import Job from '../components/Job.svelte';
	import { filters, jobs, maxJobs } from '../store.js';

	$: filteredJobs = Object.values($jobs)
		.filter((job) =>
			$filters.position ? job.position.toLowerCase().includes($filters.position.toLowerCase()) : job
		)
		.filter((job) =>
			$filters.location ? job.location.toLowerCase().includes($filters.location.toLowerCase()) : job
		)
		.filter((job) => ($filters.fullTimeOnly ? job.contract == 'Full Time' : job));
</script>

<div class="container mb-16 laptop:mb-28">
	<SearchBar />
	<main
		class="grid grid-cols-1 mt-12 mb-8 tablet:mb-14 gap-y-12 tablet:grid-cols-2 tablet:gap-x-3 tablet:gap-y-16 laptop:grid-cols-3 laptop:gap-x-7"
	>
		{#each filteredJobs.slice(0, $maxJobs) as job (job.id)}
			<Job data={job} />
		{/each}
	</main>
	<form action="?/loadMore" method="post">
		<input type="hidden" name="maxJobs" value={$maxJobs} />
		<button
			class="block px-5 py-4 mx-auto text-white rounded-md bg-violet hover:bg-light-violet disabled:bg-light-violet"
			disabled={filteredJobs.length <= $maxJobs ? true : false}
			type="submit"
			on:click|preventDefault={() => ($maxJobs += 12)}
		>
			Load More
		</button>
	</form>
</div>
