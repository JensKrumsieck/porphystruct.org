<template>
  <section class="section hero is-primary story">
    <div class="container">
      <h2 class="title is-3 has-text-weight-light">The Story</h2>
      <div class="columns">
        <div class="column has-text-justified">
          <p>
            While the conformational features of porphyrins have been extensively
            investigated in recent years using
            <em>J.A. Shelnutt</em>'s NSD method
            <sup>[1]</sup>,
            the limitations of this method have left other macrocycles such as Corrole far behind.
            Studies have shown correlations of conformation with photophysical and chemical
            properties such as reactivity.
            <sup>[2]</sup> For example, the metallation rates of porphyrins
            with large amounts of saddling are several orders of magnitude higher than for their
            planar counterparts.
            <sup>[2b]</sup>
          </p>
          <p class="m-t-20">
            Due to the large number of correlations found for porphyrins, a transfer of this method
            to other tetrapyrrolic systems is required as there a little to none correlations reported for
            e.g. corroles. This is the idea behind "<strong>PorphyStruct</strong>". PorphyStruct implements a variation of
            the NSD method on corroles, norcorroles, porphycenes, corrphycenes (and porphyrins).
          </p>
        </div>
        <div class="column is-5">
          <figure class="has-text-centered image bordered-image">
            <img src="/img/abstract_img.png" alt style="margin: auto;" />
            <figcaption class>
              <strong>Figure</strong>: Analysis with simulation of a chromyl corrole
              <sup>[3]</sup>.
            </figcaption>
          </figure>
        </div>
      </div>
      <h6 class="references title is-6 is-marginless has-text-grey-light">References</h6>
      <ol class="ref-list mt-5 has-text-grey-light">
        <li>
          W. Jentzen, J.-G. Ma, J. A. Shelnutt,
          <em>Biophys. J.</em>
          <strong>1998</strong>,
          <em>74</em>, 753–763; W. Jentzen,
          X.-Z. Song, J. A. Shelnutt,
          <em>J. Phys. Chem. B</em>,
          <strong>1997</strong>,
          <em>101</em>, 1684–1699.
        </li>
        <li>
          a) M. O. Senge, S. A. MacGowan, J. M. O'Brien,
          <em>Chem. Commun.</em>
          <strong>2015</strong>,
          <em>51</em>,
          17031–17063; M. O. Senge,
          <em>Chem. Commun.</em>
          <strong>2006</strong>, 243–256
          b) J. Takeda, T. Ohya, M. Sato,
          <em>Inorg. Chem,</em>,
          <strong>1992</strong>,
          <em>31</em>, 2877–2880.
        </li>
        <li>
          P. Schweyen, Ch. Kleeberg, D. Körner, A. Thüsing, R. Wicht, M.-K. Zaretzke, M. Bröring,
          <em>J. Porphyrins Phtalocyanines</em>,
          <strong>2019</strong>,
          <em>23</em>, 1-11.
        </li>
      </ol>
    </div>
  </section>
</template>
<script>
export default {
  name: "Story",
  components: {}
};
</script>
<style scoped lang="scss">
.has-text-justified strong{color: #fff;}
ol.ref-list {
  counter-reset: list;
  > li {
    font-size: 0.75rem;
    list-style: none;
    &:before {
      content: "[" counter(list) "] ";
      counter-increment: list;
    }
  }
}
.bordered-image {
  padding: 15px;
  border-radius: 5px;
  background: #ffffff;
}
figcaption {
  color: #000000;
  font-weight: 700 !important;
}
.ref-list strong {
  color: #ccc;
  font-weight: 700 !important;
}
</style>