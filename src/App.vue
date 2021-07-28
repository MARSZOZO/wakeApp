<template>
  <div id="app">
      <div class="container pt-4">
        <router-view/>
      </div>
  </div>
</template>

<script>

  export default {
    mounted () {
      this.$store.dispatch('GET_PUBLISH_API_LIST');
    }
  }
</script>

<style lang="scss">
.font-weight-bold {
  font-weight: bold;
}

</style>
