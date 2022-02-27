<script>
	// @ts-ignore
	import screenshot_hero from '../../static/screenshot_hero.png?w=100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset';
	// @ts-ignore
	import cover from '../../static/ps_cover.jpg?w=100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset';

	import Ruler from 'svelte-material-icons/Ruler.svelte';
	import Molecule from 'svelte-material-icons/Molecule.svelte';
	import CSharp from 'svelte-material-icons/LanguageCsharp.svelte';
	import Save from 'svelte-material-icons/ContentSave.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';

	import Button from '../lib/components/Button.svelte';
	import Badge from '../lib/components/Badge.svelte';
	import Wrapper from '../lib/components/Wrapper.svelte';
	import H3 from '../lib/components/H3.svelte';
	import Circles from '../lib/components/circles.svelte';
	import SEO from '$lib/components/SEO/index.svelte'

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
<section class="hero bg-off-white md:-mt-16">
	<Wrapper>
		<div class="left w-full md:w-1/4 self-center  z-20">
			<p class="uppercase font-semibold text-blue text-xs">PorphyStruct</p>
			<h1 class="md:text-4xl lg:text-5xl text-2xl mt-0 lg:w-[80vw] md:w-[85vw] w-[90vw]">
				Analyze your
				<span class="font-bold">
					{#each macrocycles as item, i}
						<span class:hidden={i != active}>
							{item}
							<span class="font-normal bg-dark rounded-lg text-white px-2 md:inline hidden"
								>with one click.</span
							>
						</span>
					{/each}
				</span>
			</h1>
			<h2 class="md:text-2xl text-xl font-semibold mt-1 mb-10">
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
			<Circles />
		</div>
	</Wrapper>
</section>
<section class="bg-dark">
	<Wrapper>
		<div class="left w-full md:w-1/2 self-center bg-white rounded md:p-5 md:mt-0 mt-12">
			<img src="analysis.svg" alt="analysis" />
		</div>
		<div class="right w-full md:w-1/2 justify-center md:mt-0 mt-12 relative">
			<div class="z-10 justify-center text-white p-5">
				<H3>Automated Conformational Analysis</H3>
				<p>
					The conformation of tetrapyrrolic macrocycles significantly influences the reactivity and
					the (photo)physical properties. To analyse the conformation by creating displacement
					diagrams manually is possible, but costs a lot of time. Furthermore, a quantitative
					analysis is not easily possible. PorphyStruct offers <span class="font-bold"
						>automated creation of displacement diagrams</span
					>
					and <span class="font-bold">quantitative conformational Analysis</span> using the NSD-technique.
				</p>
				<div class="bg-white rounded p-5 mt-12 text-dark md:flex">
					<figure class="md:w-36">
						<a href="https://doi.org/10.1002/chem.202101243">
							<img srcset={cover} type="image/webp" alt="cover" loading="lazy" />
						</a>
					</figure>
					<div class="ml-3">
						<h3 class="text-lg font-semibold">
							<a href="https://doi.org/10.1002/chem.202101243">
								PorphyStruct – A Digital Tool for the Quantitative Assignment of Non-Planar
								Distortion Modes in Four-Membered Porphyrinoids
							</a>
						</h3>
						<p>
							J. Krumsieck, M. Bröring, <span class="italic">Chem. Eur J.</span>,
							<span class="font-bold">2021</span>, <span class="italic">27</span>, 11580-11588, DOI:
							<a href="https://doi.org/10.1002/chem.202101243">10.1002/chem.202101243</a>.
						</p>
						<p>
							<strong>VIP Paper</strong> -
							<a href="http://doi.org/10.1002/chem.202101992">Front Cover</a>
							- <a href="http://doi.org/10.1002/chem.202101993">Cover Profile</a>
						</p>
						Featured in:
						<ul class="indent-4">
							<li>
								<a
									href="https://www.chemistryviews.org/details/ezine/11308216/PorphyStruct_Conformational_Analysis_of_Porphyrinoids.html"
									>Chemistry Views</a
								>
							</li>
							<li>
								<a
									href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/"
									>TU Braunschweig Magazine</a
								>
								(<a
									href="https://magazin.tu-braunschweig.de/en/pi-post/digital-tools-for-observing-molecular-gymnastics/"
									>EN</a
								>
								|
								<a
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
</section>

<section class="bg-off-white overflow-hidden">
	<Wrapper>
		<div class="left w-full md:w-1/2 self-center md:pr-16 z-20">
			<H3>Batch Processing</H3>
			<p>
				The automated Analysis of <span class="font-bold">hundreds</span> of structures is possible
				due to the implemented Batch processing feature. The Output will be merged into a csv file
				for further Analysis in Excel or as a Pandas DataFrame in Python scripts. Did you know? Some
				python scripts to Play with are available
				<a href="https://github.com/JensKrumsieck/porphystruct-scripts">here</a>.
			</p>
			<div class="mt-10">
				<H3>Supported Macrocyclic Frameworks:</H3>
				<ul class="list-disc">
					<li>Porphyrin (Isoporphyrins, Phtalocyanines, N-confused Porphyrins, Porphyrazines)</li>
					<li>
						Corrole (Isocorroles, Heterocorroles, N-confused Corroles, Corrolazines, Corrins¹)
					</li>
					<li>Norcorrole</li>
					<li>Corrphycene</li>
					<li>Porphycene</li>
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
						<image width="1000" height="437" xlink:href="screenshot_batch.png" />
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
</section>

<section class="py-24">
	<Wrapper notFullHeight>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 content-around text-center ">
			<div class="col flex flex-col items-center">
				<Molecule color="#7FCD91" {size} />
				<H3>Automatic Recognition</H3>
				<p>
					Macrocycles can be detected automatically - Isolation of structures is also available.
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<Save color="#7971EA" {size} />
				<H3>Import/Export</H3>
				<p>
					Structures can be loaded from .cif, .mol, .mol2, .xyz and .pdb. Data can be exported to
					Markdown (.md), .json, .csv and as Pictures (.png/.svg)
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<Ruler color="#DA0037" {size} />
				<H3>Additional Parameters</H3>
				<p>
					Important Bond Distances, Angles, Dihedrals, the Cavity size and more are calculated
					automatically.
				</p>
			</div>
			<div class="col flex flex-col items-center">
				<CSharp color="#0092CA" {size} />
				<H3>What else?</H3>
				<p>
					PorphyStruct uses modern Technologies (.NET 6 and C# 10) and is Open Source. See
					Sourcecode on GitHub.
				</p>
			</div>
		</div>
	</Wrapper>
</section>

<section>
	<svg
		class="absolute right-0"
		xmlns="http://www.w3.org/2000/svg"
		width="1363.724"
		height="483.796"
		viewBox="0 0 1363.724 483.796"
	>
		<path
			d="M668,4105.938c15.531-4.751,509.621-313.558,509.621-313.558L930.576,4105.938l247.045-147.277-49.884,180.533,118.772-73.638h767.265"
			transform="translate(-650.051 -3754.22)"
			fill="none"
			stroke="#0088bc"
			stroke-width="90"
		/>
	</svg>
	<Wrapper notFullHeight>
		<div class="md:w-1/3 w-full">
			<H3>Interested? Download now! It's Free!</H3>
			<Button _class="w-72" href="https://github.com/jenskrumsieck/porphystruct/releases/latest">
				<Windows size="1.5rem" />
				<span> <span class="font-bold ml-2">Download </span> for Windows</span>
			</Button>

			<a href="https://app.porphystruct.org" class="block mt-5 hover:text-dark-blue">
				Try Webversion <Badge>Beta</Badge>
			</a>
		</div>
		<div class="logo-footer md:w-2/3 w-full md:mt-0 mt-10">
			<div class="flex md:place-content-end">
				<img src="ps_logo.svg" alt="Logo" width="42px" />
				<span class="font-bold text-[1.75rem] ml-2 self-center">PorphyStruct</span>
			</div>
		</div>
	</Wrapper>
</section>

<style lang="scss">
	.hero {
		h1 {
			position: relative;
			display: block;
			> span > span {
				position: absolute;
				opacity: 1;
				visibility: visible;
				padding-left: 0.3em;
				transition: all 0.5s ease-in-out;
				&.hidden {
					opacity: 0;
					visibility: collapse;
				}
			}
		}
	}
	.shadow-svg {
		filter: drop-shadow(0 20px 25px rgb(0 0 0 / 0.1));
	}
</style>
