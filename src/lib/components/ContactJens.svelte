<script>
// @ts-ignore
import jens from '../../../static/jens.jpg?w=100;200;300;400;500;&format=webp&srcset';
import ContactCard from "./common/ContactCard.svelte";

let img = `<img srcset=${jens} alt="Jens" loading="lazy" />`;
let url = 'https://jenskrumsieck.de';
let name = 'Dr. Jens Krumsieck'

let researchgate = 'Jens-Krumsieck'
let orcid = '0000-0001-6242-5846'
let instagram = 'jens.ation'
let youtube = 'JensKrumsieck'
let xing = 'Jens_Krumsieck'
let github = 'jenskrumsieck'
let linkedin = 'jenskrumsieck'
</script>
<ContactCard {img} {url} {name} {researchgate} {orcid} {instagram} {youtube} {xing} {github} {linkedin}/>
