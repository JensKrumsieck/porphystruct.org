<script>
// @ts-ignore
import jens from '../../../static/jens.jpg?w=100;200;300;400;500;&format=webp&srcset';
import ContactCard from "./ContactCard.svelte";

let img = `<img srcset=${jens} alt="Jens" loading="lazy" />`;
let url = 'https://jenskrumsieck.de';
let name = 'Jens Krumsieck, M. Sc.'

let researchgate = 'Jens-Krumsieck'
let orcid = '0000-0001-6242-5846'
let twitter = 'jens_ation'
let instagram = 'jens.ation'
let youtube = 'JensKrumsieck'
let xing = 'Jens_Krumsieck'
let github = 'jenskrumsieck'
let linkedin = 'jens-krumsieck-849445211'
</script>
<ContactCard {img} {url} {name} {researchgate} {orcid} {twitter} {instagram} {youtube} {xing} {github} {linkedin}/>