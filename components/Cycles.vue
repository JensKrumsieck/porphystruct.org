<template>
    <section class="section">
        <div class="container">
            <h2 class="title is-2 has-text-centered has-text-weight-light hl-border">Supported Macrocycles</h2>
            <div class="columns m-t-10">
                <div class="column is-3">
                    <object data="img/cycles.svg" type="image/svg+xml" />
                </div>            
                <div class="column">
                    <p><strong>PorphyStruct</strong> supports a variety of tetrapyrrolic macrocycles, namely those derived from the following 
                    substructures: <strong>Porphyrin</strong>, <strong>Corrole</strong>, <strong>Norcorrole</strong>, <strong>Corrphycene</strong> 
                    &amp; <strong>Porphycene</strong>.</p> 
                    <p>This means that all structures derived from 
                    the above-mentioned macrocyclic frameworks can be analyzed with <strong>PorphyStruct</strong>. For example, even cycles with heteroatoms or 
                    tautomers of the underlying structures can be analyzed.</p>
                    <figure class="has-text-centered">
                        <img src="@/assets/isopor.png" alt="" />
                        <figcaption>
                            <strong>Figure</strong>: Displacement diagram and analysis of a Zinc-<strong>Isoporphyrin</strong> 
                            (CCDC: <a href="https://dx.doi.org/10.5517/ccdc.csd.cc1lks20" rel="noreferrer" target="_blank">ORILUY</a>).<br/>
                            P. Schweyen, M. Hoffmann, J. Krumsieck, B. Wolfram, X. Xie, M. Bröring,
                            <em>Angew. Chem. Int. Ed.</em>, <strong>2016</strong>, <em>55</em>, 10118.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'Cycles',
  components: {
  }
}
</script>