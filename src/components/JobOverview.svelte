<script>
	// @ts-nocheck
	export let data;
	const { company, logo, logoBackground, website } = data;
</script>

<div class="container max-w-[730px]">
	<article
		class="flex flex-col items-center p-8 mb-6 -mt-10 bg-white rounded-md tablet:flex-row tablet:p-0 tablet:overflow-hidden"
	>
		<figure
			class="w-[50px] h-[50px] -mt-14 mb-6 flex items-center justify-center rounded-2xl tablet:rounded-none tablet:w-[140px] tablet:h-[140px] tablet:m-0 tablet:px-10"
			style="background-color: {logoBackground};"
		>
			<img src="logos/{logo}" alt={company} class="tablet:w-full" />
		</figure>
		<div class="flex flex-col items-center justify-between w-full tablet:flex-row tablet:px-10">
			<div class="text-center tablet:text-left">
				<h3 class="mb-3">{company}</h3>
				<p class="mb-7 text-dark-gray tablet:mb-0">{company.toLowerCase()}.com</p>
			</div>
			<a
				href={website}
				target="_blank"
				rel="noreferrer"
				class="px-5 py-4 font-bold rounded-md text-violet bg-violet bg-opacity-10 hover:bg-opacity-30"
				>Company Site</a
			>
		</div>
	</article>
</div>
