<template>
  <div class="features">
    <h2 class="title is-3 has-text-centered has-text-weight-light hl-border">Highlights</h2>
    <nav class="columns">
      <div class="column feature has-text-centered">
        <Analysis class="feature-icon" />
        <h4 class="title is-4 is-spaced">
          <strong>Displacement</strong> Diagrams
        </h4>
        <p class="subtitle small">
          <strong>PorphyStruct</strong> offers the ability to create displacement diagrams
          of almost any tetrapyrrolic macrocycle in a flash. This opens a
          new window to gain insight into the conformation of the obtained substance.
        </p>
      </div>
      <div class="column feature has-text-centered">
        <Sim class="feature-icon" />
        <h4 class="title is-4 is-spaced">Simulation</h4>
        <p class="subtitle small">
          Using given standards for the lowest energy vibration modes the obtained
          conformation can be simulated. The simulation may provides information about
          <strong>reactivities</strong>,
          <strong>photophysical properties</strong>, etc.
        </p>
      </div>
      <div class="column feature has-text-centered">
        <b-icon pack="fas" icon="file-import" class="feature-icon" size="is-large" />
        <h4 class="title is-4 is-spaced">
          <strong>Import</strong> &amp; Export
        </h4>
        <p class="subtitle small">
          Many file formats frequently used in chemistry can be used to read data (
          <strong>CIF</strong>,
          <strong>MOL2</strong>,
          <strong>XYZ</strong>).
          Furthermore, the analysis data can be exported in many different formats.
        </p>
      </div>
      <div class="column feature has-text-centered">
        <Code class="feature-icon" />
        <h4 class="title is-4 is-spaced">
          <strong>Latest</strong> Technology
        </h4>
        <p class="subtitle small">
          With C# 8.0 and .NET Core 3.1,
          <b>PorphyStruct</b> is beeing developed on the latest technology base from Microsoft.
          The current development status and source code can be viewed on
          <a
            href="https://github.com/JensKrumsieck/PorphyStruct"
            rel="noreferrer"
            target="_blank"
          >
            <strong>GitHub</strong>
          </a>.
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
import Analysis from "@/assets/analysis_bg.svg";
import Sim from "@/assets/simulation.svg";
import Code from "@/assets/netcore.svg";
export default {
  name: "Features",
  components: {
    Analysis,
    Sim,
    Code
  }
};
</script>

<style lang="scss">
.features {
  .small{font-size: 0.9rem;}
  .column {
    p,
    h4 {
      > strong {
        font-weight: 600;
      }
      font-weight: 500;
      color: $primary;
    }
    z-index: 1;
    position: relative;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    border-radius: 5px;
    overflow: hidden;
    &:hover {
      background: #fff !important;
      p,
      h4,
      strong {
        color: $primary;
      }
      p{text-shadow: 0px 0px 1px rgba(0,0,0,0.25);}
      .feature-icon {
        color: $primary;
        path[fill="none"] {
          stroke: $primary !important;
        }
        path:not([fill="none"]),
        circle {
          fill: $primary !important;
        }
      }
    }
    .feature-icon {
      position: relative;
      color: #fff;
      width: 65px;
      height: 65px;
      > g {
        opacity: 1;
      }
      path[fill="none"] {
        stroke: #fff;
      }
      path:not([fill="none"]),
      circle {
        fill: #fff;
      }
    }
  }
}
</style>