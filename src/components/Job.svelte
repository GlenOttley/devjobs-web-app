<script>
	// @ts-nocheck
	import slugify from '@sindresorhus/slugify';

	export let data;

	const { company, logo, logoBackground, position, postedAt, contract, location } = data;
</script>

<a href={slugify(company + position)}>
	<article class="h-full p-8 bg-white rounded-md group">
		<figure
			class="w-[50px] h-[50px] -mt-14 mb-6 flex items-center justify-center rounded-2xl"
			style="background-color: {logoBackground};"
		>
			<img src="/logos/{logo}" alt={company} />
		</figure>
		<div class="flex mb-4 gap-3 text-dark-gray">
			<p>{postedAt}</p>
			<p>•</p>
			<p>{contract}</p>
		</div>
		<h3 class="mb-4 group-hover:text-dark-gray">{position}</h3>
		<p class="text-dark-gray mb-11">{company}</p>
		<h4 class="font-bold text-violet">{location}</h4>
	</article>
</a>
