<script>
	import logo from '$lib/assets/desktop/logo.svg';
	import bgMobile from '$lib/assets/mobile/bg-pattern-header.svg';
	import bgTablet from '$lib/assets/tablet/bg-pattern-header.svg';
	import bgDesktop from '$lib/assets/desktop/bg-pattern-header.svg';
</script>

<header
	class="min-h-[136px] bg-cover tablet:bg-auto tablet:min-h-[160px] desktop:bg-cover desktop:bg-bottom bg-po bg-no-repeat bg-[url('src/lib/assets/mobile/bg-pattern-header.svg')] mobile:bg-[url('src/lib/assets/tablet/bg-pattern-header.svg')] tablet:bg-[url('src/lib/assets/desktop/bg-pattern-header.svg')]"
>
	<div class="container pt-8">
		<a href="/">
			<img src={logo} alt="devjobs" />
		</a>
	</div>
</header>
