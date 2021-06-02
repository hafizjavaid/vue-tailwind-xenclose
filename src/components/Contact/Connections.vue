/* eslint-disable global-require */
<template>
  <section class="relative py-5 md:py-20">
    <div class="container relative z-10 px-5 mx-auto lg:px-20">
      <div class="justify-center text-center">
        <h3
          class="mb-5 text-xl font-bold leading-tight capitalize md:mb-10 lg:text-4xl"
        >
          Closing has never felt <br />
          more modern
        </h3>
        <p class="px-10 text-sm text-gray-600 md:text-base">
          {{subText}}
        </p>
      </div>
      <!-- Connections Cards -->
      <div class="grid flex-wrap grid-cols-3 gap-4 mt-20 capitalize">
        <!-- Card-1 -->
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="col-span-3 p-5 bg-white shadow-lg rounded-3xl md:col-span-1"
        >
          <div
            class="relative flex items-center h-full overflow-hidden text-center rounded-lg"
          >
            <div class="flex items-center">
              <span class="inline-flex w-24 mr-8">
                <img :src="card.img" class="w-full" alt=""
              /></span>
              <h3
                class="inline-flex font-bold text-left text-gray-900 text-md lg:text-xl title-font"
              >
                {{ card.text }}
              </h3>
            </div>
          </div>
          <div
            class="relative mx-auto bg-white bg-opacity-50 rounded-full h-2/4 w-76 -z-10 bottom-10"
          ></div>
        </div>
        <!-- Card-1 -->
      </div>
        <!-- Connections Cards -->
    </div>
    <div class="absolute left-0 w-full mx-auto -bottom-1">
      <img src="@/assets/images/Wave.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/instant-messaging_1.svg'),
          text: 'Instant marketplace bids and quotes',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/instant-messaging_2.svg'),
          text: 'Online access anytime',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/instant-messaging_3.svg'),
          text: 'Save $800 per deal',
        },
      ],
      subText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    };
  },
};
</script>

<style scoped>
</style>
