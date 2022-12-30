<script>
	import { filters } from '../store';
	import Modal from './Modal.svelte';
	import ActiveFilter from './ActiveFilter.svelte';
	import iconSearchViolet from '$lib/assets/icons/icon-search-violet.svg';
	import iconLocation from '$lib/assets/icons/icon-location.svg';
	import iconFilter from '$lib/assets/icons/icon-filter.svg';
	import iconSearch from '$lib/assets/icons/icon-search.svg';
	import iconClose from '$lib/assets/icons/icon-close.svg';

	$: localFilters = {
		position: '',
		location: '',
		fullTimeOnly: false
	};
	let showFilters = false;

	function handleSearch() {
		filters.set(localFilters);
		showFilters = false;
	}
</script>

<form
	method="post"
	action="?/search"
	class="flex items-center grid-cols-12 mb-6 -mt-10 overflow-hidden bg-white rounded-md tablet:grid"
>
	<div
		class="flex items-center w-full gap-4 px-4 overflow-hidden tablet:col-span-4 laptop:col-span-5 border-opacity-30 py-4"
	>
		<img src={iconSearchViolet} alt="search" class="hidden tablet:block" />
		<label for="position" class="sr-only" />
		<input
			bind:value={localFilters.position}
			type="text"
			name="position"
			id="position"
			placeholder="Filter by title..."
			class="w-full placeholder:text-gray--placeholder py-3"
		/>
	</div>
	<div
		class="items-center hidden col-span-4 gap-4 px-4 overflow-hidden laptop:col-span-3 tablet:border-x border-dark-gray border-opacity-30 tablet:flex py-4"
	>
		<img src={iconLocation} alt="location" />
		<label for="location" class="sr-only" />
		<input
			bind:value={localFilters.location}
			type="text"
			name="location"
			id="location"
			placeholder="Filter by location..."
			class="w-full placeholder:text-gray--placeholder border-light-gray py-3"
		/>
	</div>
	<div
		class="items-center justify-between hidden col-span-4 gap-4 px-4 tablet:flex laptop:col-span-4"
	>
		<div class="flex w-full gap-4">
			<input
				type="checkbox"
				name="fullTimeOnly"
				id="full-time"
				bind:checked={localFilters.fullTimeOnly}
				class="w-6 h-6 cursor-pointer accent-violet"
			/>
			<label for="full-time" class="font-bold whitespace-nowrap"
				>Full Time<span class="hidden laptop:inline">{' '}Only</span></label
			>
		</div>

		<button
			on:click|preventDefault={handleSearch}
			type="submit"
			class="inline px-4 py-3 font-bold text-center text-white rounded-md bg-violet hover:bg-light-violet"
			>Search</button
		>
	</div>
	<div class="flex items-center min-w-[100px] mr-4 tablet:hidden">
		<button
			class="p-[14px]"
			data-modal-toggle="filters-modal"
			on:click|preventDefault={() => (showFilters = true)}
		>
			<img src={iconFilter} alt="view all filters" />
			<span class="sr-only">View all filters</span>
		</button>
		<button
			class="bg-violet p-[14px] rounded-md hover:bg-light-violet"
			on:click|preventDefault={handleSearch}
			type="submit"
		>
			<img src={iconSearch} alt="search" class="w-5" />
			<span class="sr-only">Search</span>
		</button>
	</div>
</form>

<div class="flex gap-2">
	{#each Object.entries($filters) as [filter, value]}
		{#if filter == 'fullTimeOnly' && value}
			<ActiveFilter {filter}>full time</ActiveFilter>
		{:else if value}
			<ActiveFilter {filter}>{value}</ActiveFilter>
		{/if}
	{/each}
</div>

{#if showFilters}
	<!-- <div id="filters" class="absolute top-0 left-0 right-0 hidden h-screen target:block"> -->
	<Modal on:close={() => (showFilters = false)}>
		<fieldset>
			<div class="flex items-center gap-4 px-6 overflow-hidden">
				<img src={iconLocation} alt="location" />
				<label for="location" class="sr-only" />
				<input
					bind:value={localFilters.location}
					type="text"
					id="location"
					placeholder="Filter by location..."
					class="w-full border-b placeholder:text-gray--placeholder border-light-gray py-7"
				/>
				<!-- <a href="#" aria-label="close filters menu">
					<img src={iconClose} alt="" class="w-6" />
				</a> -->
			</div>
			<div class="flex items-center gap-4 p-6">
				<input
					type="checkbox"
					id="full-time"
					bind:checked={localFilters.fullTimeOnly}
					class="w-6 h-6 cursor-pointer"
				/>
				<label for="full-time" class="font-bold">Full Time Only</label>
			</div>
			<div class="p-6 pt-0">
				<button
					on:click={handleSearch}
					class="block w-full px-5 py-4 font-bold text-center text-white rounded-md bg-violet hover:bg-light-violet"
					>Search</button
				>
			</div>
		</fieldset>
	</Modal>
	<!-- </div> -->
{/if}
