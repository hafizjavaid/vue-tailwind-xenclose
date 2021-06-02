<template>
  <div class="relative mx-auto">
    <div class="overflow-hidden">
        <Navbar></Navbar>
        <Banner></Banner>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/page5/Navbar.vue';
import Banner from '@/components/page5/Banner.vue';
export default {
  components: {
    Navbar,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
</style>
