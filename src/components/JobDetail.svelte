<script>
	// @ts-nocheck
	export let data;
	const {
		position,
		postedAt,
		contract,
		location,
		apply,
		description,
		requirements,
		role,
		company
	} = data;
</script>

<div class="container max-w-[730px]">
	<article class="p-8 mb-16 bg-white rounded-md tablet:p-12">
		<div class="items-center justify-between tablet:flex">
			<div>
				<div class="flex gap-3 mb-4 text-dark-gray">
					<p>{postedAt}</p>
					<p>•</p>
					<p>{contract}</p>
				</div>
				<h3 class="mb-4">{position}</h3>
				<h4 class="font-bold text-violet mb-14">{location}</h4>
			</div>
			<a
				href={apply}
				target="_blank"
				rel="noreferrer"
				class="block w-full px-5 py-4 mb-8 font-bold text-center text-white rounded-md tablet:w-auto bg-violet hover:bg-light-violet"
				>Apply Now</a
			>
		</div>

		<p class="mb-10 text-dark-gray">{description}</p>

		<h3 class="mb-7">Requirements</h3>
		<p class="text-dark-gray mb-7">{requirements.content}</p>
		<ul class="mb-10 list-disc text-dark-gray">
			{#each requirements.items as requirement}
				<li class="flex mb-2 gap-7">
					<span class="font-bold text-xl text-violet min-w-[16px]">•</span>
					<span>{requirement}</span>
				</li>
			{/each}
		</ul>

		<h3 class="mb-7">What You Will Do</h3>
		<p class="text-dark-gray mb-7">{role.content}</p>
		<ol class="mb-10 list-none text-dark-gray">
			{#each role.items as role, index}
				<li class="flex mb-2 gap-7">
					<span class="font-bold text-violet min-w-[16px]">{index + 1}</span>
					<span>{role}</span>
				</li>
			{/each}
		</ol>
	</article>
</div>

<footer class="py-6 bg-white">
	<div class="container items-center justify-between tablet:flex max-w-[730px]">
		<div class="hidden tablet:inline">
			<h3 class="pb-3">{position}</h3>
			<p class="text-dark-gray">{company}</p>
		</div>
		<a
			href={apply}
			target="_blank"
			rel="noreferrer"
			class="block w-full px-5 py-4 font-bold text-center text-white rounded-md tablet:w-auto bg-violet hover:bg-light-violet "
			>Apply Now</a
		>
	</div>
</footer>
