<template>
  <section
    class="relative min-h-screen pb-20 bg-no-repeat bg-cover xl:bg-contain hero"
    v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="w-full">
      <div class="container px-5 pt-20 mx-auto md:pt-32 lg:px-20">
        <div
          class="grid grid-cols-12 gap-4 mt-5 text-gray-700 capitalize lg:mt-12"
        >
        <!-- Left Box Component -->
        <left-box></left-box>
        <!-- Center Box Component -->
        <center-box></center-box>
        <!-- Right Box Component -->
        <right-box></right-box>
        </div>
      </div>
    </div>

    <div class="absolute hidden w-48 -bottom-28 -left-6 md:block">
      <img src="@/assets/images/cube_3.png" alt="" />
    </div>
  </section>
</template>

<script>
import LeftBox from './LeftBox.vue';
import CenterBox from './CenterBox.vue';
import RightBox from './RightBox.vue';
export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      image: require('@/assets/images/bg-top4.jpg'),
    };
  },
  components: {
    LeftBox,
    CenterBox,
    RightBox,
  },
};
</script>

<style lang="scss" scoped>
</style>
