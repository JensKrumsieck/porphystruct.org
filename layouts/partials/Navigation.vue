<template>
  <b-navbar fixed-top spaced type="is-primary" wrapperClass="container">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{path: '/'}">
        <img src="/img/logo.svg" alt="logo" class="logo" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{path: '/'}">Home</b-navbar-item>
      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link :to="{path: '/support'}" class="navbar-link">Support</nuxt-link>
        <div class="navbar-dropdown">
          <b-navbar-item tag="nuxt-link" :to="{path: '/manual'}">User Manual</b-navbar-item>
          <b-navbar-item
            tag="a"
            href="https://github.com/JensKrumsieck/PorphyStruct/issues"
            rel="noreferrer"
          >GitHub Issues</b-navbar-item>
        </div>
      </div>
      <b-navbar-item
        tag="a"
        href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/"
        rel="noreferrer"
        class="button is-danger"
      >Download</b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "Navigation",
  components: {}
};
</script>
<style lang="scss" scoped>
.logo {
  height: 34px;
}
.navbar-brand > a.navbar-item.is-active {
  background: none !important;
}
nav.navbar.is-primary {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  background: transparent;
  a.navbar-item,
  a.navbar-link {
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  &.sticky {
    background: #ffffff !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    > .container > .navbar-menu > .navbar-end {
      .navbar-item,
      .navbar-link {
        &:after {
          border-color: $primary;
        }
        &:not(.is-active):not(:hover):not(.button):not(:focus) {
          color: $primary;
        }
        &:hover > .navbar-link {
          color: #fff !important;
        }
      }
    }
    .burger {
      color: $primary !important;
    }
  }
}
</style>