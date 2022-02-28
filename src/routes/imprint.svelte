<script>
	import Container from '$lib/components/common/Container.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
</script>

<SEO slug="imprint" title="Legal Notice" />
<Container _class=" md:-mt-16">
	<Wrapper>
		<div>
			<h1 class="font-bold text-4xl">Impressum nach §5 TMG | Legal Notice</h1>
			<H3>Verantwortlich für Inhalte</H3>
			<address>
				Jens Krumsieck
				<br />
				Celler Str. 108
				<br />
				D-38114 Braunschweig
				<br />
				Germany
				<br />
				[+49]17630629281
				<br />
				mail@jenskrumsieck.de
			</address>
			<p class="mt-10">
				PorphyStruct is made by Jens Krumsieck and Prof. Dr. Martin Bröring from TU Braunschweig. It
				uses ideas from <br />
				W. Jentzen, J.-G. Ma, J. A. Shelnutt, <span class="italic">Biophys. J.</span>
				<span class="font-bold">1998</span>, <span class="italic">74</span>, 753–763; W. Jentzen,
				X.-Z. Song, J. A. Shelnutt, <span class="italic">J. Phys. Chem. B</span>
				<span class="font-bold">1997</span>, <span class="italic">101</span>, 1684–1699.
			</p>
		</div>
	</Wrapper>
</Container>
