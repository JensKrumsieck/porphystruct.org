<script context="module" lang="ts">
	import { base } from '$app/paths';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const res = await fetch(`${base}/docs.json`);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { post: data.post, posts: data.posts }
			};
		}
		return {
			status: res.status,
			error: new Error(`${res.status} - ${await res.statusText} - URL was ${url}`)
		};
	}
</script>

<script lang="ts">
	// @ts-ignore
	import screenshot_hero from '../../static/screenshot_hero.png?w=100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset';
	// @ts-ignore
	import cover from '../../static/ps_cover.jpg?w=50;100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset';

	import { gdprSettings } from '../store.js';
	let currentSettings = $gdprSettings;
	$: if ($gdprSettings) {
		currentSettings = $gdprSettings;
	}

	import Ruler from 'svelte-material-icons/Ruler.svelte';
	import Molecule from 'svelte-material-icons/Molecule.svelte';
	import CSharp from 'svelte-material-icons/LanguageCsharp.svelte';
	import Save from 'svelte-material-icons/ContentSave.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';
	import Book from 'svelte-material-icons/BookOpenVariant.svelte';

	import Button from '$lib/components/common/Button.svelte';
	import Badge from '$lib/components/common/Badge.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Circles from '../lib/components/circles.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import Container from '$lib/components/common/Container.svelte';

	export let posts;
	let size = '5em';
	let macrocycles = [
		'Corroles',
		'Porphyrins',
		'Norcorroles',
		'Isocorroles',
		'Isoporphyrins',
		'Corrphycenes',
		'Porphycenes'
	];
	let active = 0;
	setInterval(() => {
		active = Math.floor(Math.random() * macrocycles.length);
	}, 1500);
</script>

<SEO />
<Container _class="hero md:-mt-16">
	<Wrapper>
		<div class="left w-full md:w-1/4 self-center z-20">
			<p class="uppercase font-semibold text-blue text-sm">PorphyStruct</p>
			<H1 _class="lg:w-[80vw] md:w-[85vw] w-[90vw]">
				Analyze your
				<span class="font-bold changing">
					{#each macrocycles as item, i}
						<span class:hidden={i != active}>
							{item}
							<span class="font-normal bg-dark rounded-lg text-white px-2 md:inline hidden"
								>with one click.</span
							>
						</span>
					{/each}
				</span>
			</H1>
			<h2 class="md:text-2xl text-xl font-semibold mt-4 mb-10">
				Structural Analysis of Porphyrinoids
			</h2>
			<p class="italic text-base my-3">Fast. Free. Open Source.</p>
			<Button _class="w-72" href="https://github.com/jenskrumsieck/porphystruct/releases/latest">
				<Windows size="1.5rem" />
				<span> <span class="font-bold ml-2">Download </span> for Windows</span>
			</Button>

			<a href="https://app.porphystruct.org" class="block mt-5 hover:text-dark-blue">
				Try Webversion <Badge>Beta</Badge>
			</a>
		</div>
		<div class="right w-full md:w-3/4 self-center flex justify-center relative md:mt-0 mt-12">
			<img
				srcset={screenshot_hero}
				class="rounded shadow-2xl lg:w-5/6 w-3/4 md-w-1/2 z-10"
				type="image/webp"
				alt="Screenshot"
			/>
			<Circles _class="max-h-[90vh]" />
		</div>
	</Wrapper>
</Container>
<Container _class="bg-dark">
	<Wrapper>
		<div class="left w-full md:w-1/2 self-center bg-white rounded md:p-5 md:mt-0 mt-12">
			<img src="/analysis.svg" alt="analysis" />
		</div>
		<div class="right w-full md:w-1/2 justify-center md:mt-0 mt-12 relative">
			<div class="z-10 justify-center text-white p-5">
				<H3>Automated Conformational Analysis</H3>
				<p>
					The <strong>conformation of tetrapyrrolic macrocycles</strong> significantly influences
					the reactivity and the (photo)physical properties. To analyse the conformation by creating
					displacement diagrams manually is possible, but costs a lot of time. Furthermore, a
					quantitative analysis is not easily possible. <strong>PorphyStruct</strong> offers
					<strong>automated creation of displacement diagrams</strong>
					and <strong>quantitative conformational Analysis</strong> using the NSD-technique.
				</p>
				<div class="bg-white rounded p-5 mt-4 text-dark md:flex">
					<figure class="md:w-36">
						<a href="https://doi.org/10.1002/chem.202101243">
							<img srcset={cover} type="image/webp" alt="cover" />
						</a>
					</figure>
					<div class="ml-3">
						<h3 class="text-lg font-semibold">
							<a class="hover:underline" href="https://doi.org/10.1002/chem.202101243">
								PorphyStruct – A Digital Tool for the Quantitative Assignment of Non-Planar
								Distortion Modes in Four-Membered Porphyrinoids
							</a>
						</h3>
						<p>
							J. Krumsieck, M. Bröring, <span class="italic">Chem. Eur J.</span>,
							<span class="font-bold">2021</span>, <span class="italic">27</span>, 11580-11588, DOI:
							<a class="hover:underline" href="https://doi.org/10.1002/chem.202101243"
								>10.1002/chem.202101243</a
							>.
						</p>
						<p>
							<strong>VIP Paper</strong> -
							<a class="hover:underline" href="http://doi.org/10.1002/chem.202101992">Front Cover</a
							>
							-
							<a class="hover:underline" href="http://doi.org/10.1002/chem.202101993"
								>Cover Profile</a
							>
						</p>
						Featured in:
						<ul class="indent-4">
							<li>
								<a
									class="hover:underline"
									href="https://www.chemistryviews.org/details/ezine/11308216/PorphyStruct_Conformational_Analysis_of_Porphyrinoids.html"
									>Chemistry Views</a
								>
							</li>
							<li>
								<a
									class="hover:underline"
									href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/"
									>TU Braunschweig Magazine</a
								>
								(<a
									class="hover:underline"
									href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/"
									>EN</a
								>
								|
								<a
									class="hover:underline"
									href="https://magazin.tu-braunschweig.de/pi-post/digitale-helfer-zur-beobachtung-von-molekuel-gymnastik/"
									>DE</a
								>)
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Wrapper>
</Container>

<Container _class="overflow-hidden">
	<Wrapper>
		<div class="left w-full md:w-1/2 self-center md:pr-16 z-20">
			<H3>Batch Processing</H3>
			<p>
				The <strong>automated Analysis</strong> of <span class="font-bold">hundreds</span> of
				structures is possible due to the implemented Batch processing feature. The Output will be
				merged into a csv file for further Analysis in Excel or as a Pandas DataFrame in Python
				scripts. Did you know? Some python scripts to Play with are available here:
				<a class="hover:underline" href="https://github.com/JensKrumsieck/porphystruct-scripts"
					>porphystruct-scripts</a
				>.
			</p>
			<div class="mt-10">
				<H3>Supported Macrocyclic Frameworks:</H3>
				<ul>
					<li>
						<strong>Porphyrin</strong> (Isoporphyrins, Phtalocyanines, N-confused Porphyrins, Porphyrazines)
					</li>
					<li>
						<strong>Corrole</strong> (Isocorroles, Heterocorroles, N-confused Corroles, Corrolazines,
						Corrins¹)
					</li>
					<li><strong>Norcorrole</strong></li>
					<li><strong>Corrphycene</strong></li>
					<li><strong>Porphycene</strong></li>
				</ul>
			</div>
			<p class="text-sm">
				¹ NSD-type analysis not useful for Corrins, but diagrams are still possible.
			</p>
		</div>
		<div class="right w-full md:w-1/2 md:mt-0 mt-12 md:pl-16 relative">
			<svg
				class="z-10 relative"
				style="overflow: visible;"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 1060 645"
			>
				<defs>
					<pattern
						id="pattern"
						preserveAspectRatio="none"
						width="100%"
						height="100%"
						viewBox="0 0 1000 437"
					>
						<image width="1000" height="437" xlink:href="/screenshot_batch.png" />
					</pattern>
				</defs>
				<rect
					width="1000"
					height="437"
					rx="10"
					transform="translate(60 60)"
					fill="#fff"
					class="shadow-svg"
				/>
				<rect
					width="1000"
					height="437"
					rx="10"
					transform="translate(30 30)"
					fill="#fff"
					class="shadow-svg"
				/>
				<rect
					width="1000"
					height="437"
					rx="10"
					transform="translate(0 0)"
					fill="url(#pattern)"
					class="shadow-svg"
				/>
			</svg>
			<Circles _class="z-0 circle_shift -top-1/4" />
		</div>
	</Wrapper>
</Container>

<Container _class="py-24">
	<Wrapper notFullHeight>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 content-around text-center ">
			<div class="col flex flex-col items-center">
				<Molecule color="#7FCD91" {size} />
				<H3>Automatic Recognition</H3>
				<p>
					Macrocycles can be detected automatically via a graph theory based algorithm - A wizard
					for manual Isolation of structures is also available.
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<Save color="#7971EA" {size} />
				<H3>Import/Export</H3>
				<p>
					Structures can be loaded from the industry standard filetypes .cif, .mol, .mol2, .xyz and
					.pdb. Data can be exported to Markdown (.md), .json, .csv and as Pictures (.png/.svg). <a
						href="/docs/export-plots-and-data"
						class="underline"
						title="Export Plots and Data">Visit our docs for more info on data exports.</a
					>
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<Ruler color="#DA0037" {size} />
				<H3>Additional Parameters</H3>
				<p>
					Other important parameters like e.g. bond lengths, angles, dihedrals, helicity,
					interplanar angle and the N4-cavity are calculated automatically.
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<CSharp color="#0092CA" {size} />
				<H3>What else?</H3>
				<p>
					PorphyStruct uses modern Technologies (.NET 6 and C# 10) and is Open Source. You can see
					the Sourcecode on <a
						href="https://github.com/JensKrumsieck/PorphyStruct"
						title="GitHub"
						class="underline">GitHub</a
					>.
				</p>
			</div>
		</div>
	</Wrapper>
</Container>
<Container _class="mt-16 bg-dark text-white py-16">
	<div class="md:w-1/2">
		<h2 class="font-bold text-4xl">
			<span class="flex gap-4 items-center"><Book size="2.5rem" /> Documentation</span>
		</h2>
		<p class="mt-3">
			Documentation of the main features and concepts is available on our site. This will always be
			extended with new features or updated with changes. If you still have questions, please use
			our
			<a
				class="underline"
				href="https://github.com/JensKrumsieck/PorphyStruct/discussions"
				title="GitHub Discussion"
			>
				discussion function (GitHub)
			</a>.
		</p>
	</div>
	<div
		class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8 content-around mt-12"
	>
		{#each Object.keys(posts) as cat}
			<div>
				<h4 class="text-lg font-semibold">{cat}</h4>
				<ul>
					{#each posts[cat] as post}
						<li>
							<h6>
								<a class="underline" href={'docs/' + post.slug} title={post.title}>
									{post.title}
								</a>
							</h6>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Container>

<Container _class="bg-green py-16 mb-16">
	<p class="text-4xl md:text-6xl font-black">Free and Open Source</p>
	<p class="mt-6 text-xl">
		PorphyStruct is a public project, licensed under
		<a class="underline" href="https://github.com/JensKrumsieck/PorphyStruct/blob/master/LICENSE"
			>MIT License</a
		>.
	</p>
	<p class="mt-6  text-xl">
		PorphyStruct is free and <a
			class="underline"
			href="https://github.com/JensKrumsieck/PorphyStruct">open source</a
		> and always will be!
	</p>
</Container>

{#if currentSettings.youtube}
	<Container _class="my-16">
		<Wrapper notFullHeight>
			<div class="flex flex-wrap gap-12 place-items-center mx-auto">
				<iframe
					class="w-80 md:w-96 h-44 md:h-56"
					src="https://www.youtube-nocookie.com/embed/YCA3ZIYyLQw"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
				<iframe
					class="w-80 md:w-96 h-44 md:h-56"
					src="https://www.youtube-nocookie.com/embed/WdEJJrrPYKg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</Wrapper>
	</Container>
{/if}

<style lang="scss">
	.shadow-svg {
		filter: drop-shadow(0 20px 25px rgb(0 0 0 / 0.1));
	}
</style>
