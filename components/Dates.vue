<template>
  <!--conference badge-->
    <div class="media badge-conference">      
      <div class="media-body has-text-justified">        
        <div class="content">
          <h3 class="title is-5">ICPP-11</h3>
          <div class="columns is-mobile">
            <div class="media-date has-text-centered column is-one-third">
            <strong class="is-size-3">28</strong><br/>
            JUNE<br/>
            <strong class="is-size-5">2020</strong>
          </div>
          <p class="is-size-7 column">
            June 28 - July 3 2020<br/>
            11th International Conference on
            Porphyrins and Phtalocyanines (ICPP-11)<br/>
            in Buffalo, NY, USA
          </p>
        </div>
          </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.badge-conference {
  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f073";
    position: absolute;
    font-size: 10rem;
    z-index: -1;
    color: rgba($primary, 0.05);
    width: 100%;
    height: 100%;
    left:calc(50% - 5rem);
    top: 0;
  }
}
.media-date{
  border-right: 3px solid $secondary;
  padding: 1rem;
  margin-right: 10px;
}
</style>