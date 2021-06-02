<template>
  <router-view/>
</template>
<script>
export default {
  mounted() {
    this.addGoogleApiLink();
  },
  methods: {
    addGoogleApiLink() {
      const script = document.createElement('script');
      script.src = process.env.VUE_APP_GOOGLE_PLACES_API_LINK;
      script.type = 'text/javascript';
      document.head.append(script);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url(./assets/fonts/stylesheet.css);

*{
  font-family: 'Panton', sans-serif !important;
}

</style>
