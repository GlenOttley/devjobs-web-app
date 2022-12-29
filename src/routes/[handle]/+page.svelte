<script>
	// @ts-nocheck

	import JobOverview from '../../components/JobOverview.svelte';
	import JobDetail from '../../components/JobDetail.svelte';
	export let data;
</script>

<JobOverview {data} />
<JobDetail {data} />
