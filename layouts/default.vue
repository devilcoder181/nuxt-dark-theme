<template>
  <div>
    <div class="container"><HeaderMain></HeaderMain></div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.getters.lang,
        dir:  this.$store.getters.dir,
        "data-theme":  this.$store.getters.getTheme
      }
    }
  },

}
</script>

<style>

</style>
