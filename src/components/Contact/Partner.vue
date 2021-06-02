<template>
  <div class="w-full mx-auto md:w-5/6">
    <div
      class="relative flex flex-wrap items-center justify-center
      w-full h-auto p-5 py-10 text-center text-white bg-no-repeat
      bg-cover md:py-20 -bottom-24 lg:-bottom-44 gradient-2 rounded-3xl"
    >
      <div class="w-full">
        <h3
          class="mb-2 text-xl text-white-light font-bold
          leading-tight capitalize md:mb-8 lg:text-4xl"
        >
          a partner you can count on
        </h3>
      </div>

      <div class="w-full mb-8 text-white-light text-sm md:text-base">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          voluptas soluta natus neque sint inventore praesentium iure a. Nihil
          ipsa quo recusandae eligendi nulla. Obcaecati sunt ad laborum
          consequatur harum.
        </p>
      </div>
      <div class="w-full">
        <div class="w-full my-10">
          <ul>
            <li
              v-for="(list, i) in lists"
              :key="i"
              class="inline-flex w-full p-5 mb-5 mx-2 text-black
               bg-white-light lg:p-10 lg:mb-0 lg:w-1/3 rounded-2xl"
            >
              <div class="flex items-center justify-center w-full mx-auto">
                <span
                  class="inline-flex w-12 h-12 p-3 mr-3 border border-gray-400 rounded-full"
                >
                  <img :src="list.img" alt="" />
                </span>
                <span class="font-semibold">{{ list.text }}</span>
              </div>

              <div
                class="relative mx-auto bg-white-light bg-opacity-50
                rounded-full h-2/4 w-76 -z-10 bottom-10"
              ></div>
            </li>
          </ul>
        </div>

        <a
          href="#"
          class="inline-flex p-2 capitalize transition-all
          duration-100 border border-black rounded-full border-opacity-5
           text-seofoam-light-50 hover:text-white-light"
        >
          <span
            class="p-2 transition-all border border-black rounded-full border-opacity-20"
          >
            <span
              class="flex items-center p-3 px-6
              text-xs rounded-full xl:text-sm xl:px-16 md:p-5 gradient"
            >
              <span class="inline-flex mr-2 font-bold"> take our survey </span>
            </span>
          </span>
        </a>
      </div>

      <div class="absolute hidden -z-10 -bottom-8 w-36 -left-20 md:block">
        <img src="@/assets/images/dot.svg" alt="" />
      </div>

      <div class="absolute z-10 hidden bottom-36 w-36 -right-20 md:block">
        <img src="@/assets/images/Vector3.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/carbon_phone.svg'),
          text: '999-888-555',
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/carbon_mail-all.svg'),
          text: 'zenlosed@lorem.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
.gradient-2 {
    background-image: linear-gradient(250.74deg, #0fa5a3cc 7.54%,
     #57e6a0e6 85.68%), url(../../assets/images/getstart-BG.png);
}
.gradient {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, #232323, #232323), #51ebaa;
}
</style>
