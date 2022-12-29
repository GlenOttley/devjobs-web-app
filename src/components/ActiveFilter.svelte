<script>
	// @ts-nocheck

	import { filters } from '../store';

	export let filter;

	async function handleRemoveFilter() {
		$filters[filter] = '';
	}
</script>

<form method="post" action="?/removeFilter">
	<input type="hidden" name="filter" value={filter} />
	<button
		on:click|preventDefault={handleRemoveFilter}
		type="submit"
		class="block px-3 py-2 text-sm font-bold text-center text-white rounded-md bg-violet"
	>
		<slot />
		&nbsp;&nbsp;&times;
	</button>
</form>
