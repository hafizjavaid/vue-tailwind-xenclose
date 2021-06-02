<template>
  <section class="pt-20 bg-seofoam-50">
    <div class="container relative z-10 px-5 mx-auto lg:px-20">
      <!-- Resources Cards -->
      <div class="w-full mx-auto md:w-5/6">
        <div class="justify-center text-center">
          <h3
            class="mb-5 text-xl font-bold leading-tight capitalize md:mb-10 lg:text-4xl"
          >
            Resources when you <br />
            need them
          </h3>

          <p class="px-10 text-sm text-gray-600 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-4 mt-20 capitalize">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="col-span-3 border-8 border-black shadow-lg gradient-4 rounded-3xl md:col-span-1"
          >
            <div class="relative h-full overflow-hidden text-center rounded-lg">
              <div
                class="w-full p-4 mx-auto mb-5 lg:p-8 lg:mb-10 gradient-5 rounded-3xl"
              >
                <img :src="card.img" class="w-12 mx-auto lg:w-20" alt="" />
              </div>

              <div class="lg:pb-8">
                <h3
                  class="mb-3 text-xl font-bold text-seofoam-100 title-font lg:text-2xl"
                >
                  {{ card.title }}
                </h3>
                <p
                  class="px-3 mb-3 text-sm leading-relaxed text-white-light lg:text-base"
                >
                  {{ card.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resources Cards -->

      <!-- Partner Card -->

      <Partner></Partner>

      <!-- Partner Card -->

    </div>
  </section>
</template>

<script>
import Partner from './Partner.vue';

export default {
  data() {
    return {
      cards: [
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/eva_home-outline.svg'),
          title: 'homebuying',
          subtitle: 'Budgeting and starting out',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/refin.svg'),
          title: 'Refinancing',
          subtitle: 'Exploring and comparing',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/eva_home-outline.svg'),
          title: 'News & Insights',
          subtitle: 'Staying up to date',
        },
      ],
    };
  },
  components: {
    Partner,
  },
};
</script>

<style scoped>

.gradient-4 {
  background: linear-gradient(0deg, #1c1c1c, #1c1c1c);
}
.gradient-5 {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, #232323, #232323);
}
</style>
