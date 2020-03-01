<template>
  <section class="section indepth">
    <div class="container">
      <div class="columns is-vcentered is-multiline">
        <figure class="column is-one-third">
          <p class="image">
            <img src="/img/diagram.png" alt="Displacement Diagram" />
          </p>
        </figure>
        <div class="column is-two-thirds">
          <h2 class="title is-3">Displacement Diagrams</h2>
          <h3 class="subtitle">
            Generate Displacement Diagrams
            <strong>faster</strong> than before
          </h3>
          <p class="has-text-justified">
            To describe the conformation in a more accessible way it is common in porphyrinoid chemistry
            to describe the three-dimensional conformation by two-dimensional displacement diagrams. These
            can be created with PorphyStruct from all supported macrocycles 
            (<nuxt-link :to="{path: '/manual/open-files'}">see also here</nuxt-link>).
          </p>
        </div>
        <div class="column is-two-thirds">
          <h2 class="title is-3">Simulation</h2>
          <h3 class="subtitle">Gain insights into the composition of the conformation</h3>
          <p class="has-text-justified">
            The conformation can be described by a linear combination of the lowest-frequency normal modes. The selected standards can be used to obtain the coefficients
            of the linear combination and thus simulate the conformation. The simulation method uses the simplex algorithm. The simulation may provides information about reactivities,
            photophysical properties, etc.
          </p>
        </div>

        <figure class="column is-one-third">
          <p class="image">
            <img src="/img/screen/sim.png" alt="Screenshot Simulation" />
          </p>
        </figure>

        <figure class="column is-one-third">
          <p class="image objectImage">
            <object data="/img/cycles.svg" type="image/svg+xml" />
          </p>
        </figure>
        <div class="column is-two-thirds">
          <h2 class="title is-3">Supported Macrocycles</h2>
          <h3 class="subtitle">5 different macrocyclic frameworks are supported by now</h3>
          <p class="has-text-justified">
            <strong>PorphyStruct</strong> supports a variety of tetrapyrrolic macrocycles, namely those derived from the following
            substructures:
            <strong>Porphyrin</strong>,
            <strong>Corrole</strong>,
            <strong>Norcorrole</strong>,
            <strong>Corrphycene</strong>
            &amp;
            <strong>Porphycene</strong>. This means that all structures derived from
            the above-mentioned macrocyclic frameworks can be analyzed with
            <strong>PorphyStruct</strong>. For example, even cycles with heteroatoms or
            tautomers of the underlying structures can be analyzed.
          </p>
          <figure class="has-text-centered resize m-t-10">
            <img src="/img/isopor.png" alt="Isoporphyrin displacement diagram" />
            <figcaption>
              <strong>Figure</strong>: Displacement diagram and analysis of a Zinc-
              <strong>Isoporphyrin</strong>
              (CCDC:
              <a
                href="https://dx.doi.org/10.5517/ccdc.csd.cc1lks20"
                rel="noreferrer"
                target="_blank"
              >ORILUY</a>).
              <br />P. Schweyen, M. Hoffmann, J. Krumsieck, B. Wolfram, X. Xie, M. Bröring,
              <em>Angew. Chem. Int. Ed.</em>,
              <strong>2016</strong>,
              <em>55</em>, 10118.
            </figcaption>
          </figure>
        </div>

        <div class="column is-two-thirds">
          <h2 class="title is-3">Existing methods</h2>
          <h3 class="subtitle">Excellent Agreement with Shelnutt's NSD Method</h3>
          <p class="has-text-justified">
            For porphyrins, simulations have already been carried out with the existing software from J.A. Shelnutt.
            Compositions of substances created with this program were verified with PorphyStruct. The result: excellent agreement.
            PorphyStruct was designed according to J.A. Shelnutt's NSD principle, simplified and transferred to further macrocycles.
            <br />You can read about Shelnutt's NSD Method
            <a
              href="https://www.sciencedirect.com/science/article/pii/S0006349598740007"
              ref="noreferrer"
              target="_blank"
            >here</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.indepth .column {
  margin-top: 2rem;
}
.objectImage {
  max-width: 350px;
  margin: auto;
}
.resize {
  max-width: 500px;
  margin: auto;
}
</style>