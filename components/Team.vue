<template>
  <section class="section team">
    <div class="container">
      <h2 class="title has-text-centered has-text-weight-light hl-border">Team</h2>
      <div class="columns">
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <img src="img/jens.svg" alt class="is-rounded" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h4 class="title is-4">Jens Krumsieck, M.Sc.</h4>
                <p>Chemistry - Programming</p>
                <p>
                  <a href="http://jenskrumsieck.de" rel="noreferrer">                    
                    <b-icon pack="fa" icon="home" />
                  </a>
                  <a href="https://orcid.org/0000-0001-6242-5846" rel="noreferrer">
                    <b-icon pack="fab" icon="orcid" />
                  </a>
                  <a href="https://www.researchgate.net/profile/Jens_Krumsieck" rel="noreferrer">
                    <b-icon pack="fab" icon="researchgate" />
                  </a>
                  <a href="https://scholar.google.de/citations?user=_hJ9h1YAAAAJ" rel="noreferrer">
                    <b-icon pack="fab" icon="google" />
                  </a>
                  <a href="https://github.com/JensKrumsieck" rel="noreferrer">
                    <b-icon pack="fab" icon="github" />
                  </a>
                  <a href="https://www.xing.com/profile/Jens_Krumsieck/" rel="noreferrer">
                    <b-icon pack="fab" icon="xing" />
                  </a>
                  <a href="https://twitter.com/jens_ation" rel="noreferrer">
                    <b-icon pack="fab" icon="twitter" />
                  </a>
                  <a href="https://instagram.com/jens.ation" rel="noreferrer">
                    <b-icon pack="fab" icon="instagram" />
                  </a>
                  <a href="https://www.facebook.com/jens.krumsieck" rel="noreferrer">
                    <b-icon pack="fab" icon="facebook" />
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="column">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128 has-text-centered">
                <b-icon
                  pack="fas"
                  icon="user-astronaut"
                  custom-size="fa-7x"
                  class="is-rounded image is-128x128"
                />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <h4 class="title is-4">Prof. Dr. Martin Bröring</h4>
                <p>Chemistry</p>
                <p>
                  <a href="https://www.tu-braunschweig.de/iaac/personal/prof-dr-m-broering" rel="noreferrer">                    
                    <b-icon pack="fa" icon="home" />
                  </a>
                  <a href="https://orcid.org/0000-0001-6807-6579" rel="noreferrer">
                    <b-icon pack="fab" icon="orcid" />
                  </a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
  components: {}
};
</script>

<style lang="scss" scoped>
.team {
  background: lighten(desaturate($primary, 5%), 70%);
}
.team .icon{
  width: 2rem;
  height: 2rem;
  > i {font-size: 1.5rem;}
}
</style>