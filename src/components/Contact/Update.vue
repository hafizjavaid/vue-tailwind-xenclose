/* eslint-disable global-require */
<template>
  <section class="relative pb-5 md:pb-10">
    <div class="absolute hidden top-6 -left-6 md:block">
      <img src="@/assets/images/Oval.svg" alt="" />
    </div>

    <div
      class="container relative z-10 px-5 pt-5 mx-auto lg:flex lg:pt-24 lg:px-20"
    >
      <!-- Image Section -->
      <div class="relative w-full xl:p-12 lg:w-3/5">
        <div
          class="absolute -z-10 w-60 top-40 xl:top-60 xl:left-28 md:left-8 lg:-left-4"
        >
          <img src="@/assets/images/cube88.png" class="w-32 lg:w-full" alt="" />
        </div>

        <img
          src="@/assets/images/bg-left_banner.svg"
          class="w-full lg:ml-16"
          alt=""
        />
      </div>
      <!-- Image Section -->

      <!-- Update Text -->
      <div class="flex items-center w-full text-left lg:w-2/5">
        <div>
          <h3
            class="relative z-0 text-xl font-bold leading-tight
             text-gray-400 capitalize -bottom-4 opacity-10 lg:text-6xl"
          >
          {{title}}
          </h3>

          <h3
            class="text-xl font-bold leading-tight capitalize text-seofoam-100 md:mb-10 lg:text-6xl"
          >
           {{title}}
          </h3>

          <div class="mt-5 text-sm text-white-dark md:text-2xl">
            <p>
              {{subText}}
            </p>
          </div>

          <div class="mt-10">
            <ul class="font-semibold text-white-dark capitalize">
              <li
                class="flex items-center mb-3 text-sm md:text-xl"
                v-for="(list, i) in lists"
                :key="i"
              >
                <span class="inline-flex mr-5">
                  <img :src="list.img" alt="" class="w-8" />
                </span>
                {{ list.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Update Text -->
    </div>

    <div class="absolute z-10 hidden w-12 top-8 right-16 md:block">
      <img src="@/assets/images/Oval-green.svg" alt="" />
    </div>
    <div class="absolute -z-10 hidden w-96 bottom-0 right-0 md:block">
      <img src="@/assets/images/Oval_light.svg" class="object-cover" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'real time updates on your deals',
      subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              nostrum. Asperiores obcaecati et provident, iusto veritatis modi
              blanditiis est quos, nulla quas minima dolorum quibusdam magni
              possimus cum maxime nostrum!`,
      lists: [
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/clarity_computer-line.svg'),
          text: 'all digital closing',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/la_medal.svg'),
          text: 'servicers bid on your deals',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/codicon_calendar.svg'),
          text: 'real time closing calendar',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/clock_1.svg'),
          text: 'we close faster than anyone else',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
