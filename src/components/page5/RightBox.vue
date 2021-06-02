<template>
  <div class="col-span-12 xl:col-span-3">
    <div
      class="p-5 bg-white-light outer min-h-140 radius_48 lg:p-8 lg:py-16 rounded-2xl"
    >
     <div class="mt-3">
        <h4 class="mb-3 text-xl font-bold">{{title}}</h4>
       <ul class="mt-5">
          <li
            v-for="(list, i) in lists"
            :key="i"
            class="flex flex-col w-full px-4 py-8 mb-5 text-black
             bg-white-light rounded-2xl shadow_medium"
          >
            <div class="flex items-center w-full mx-auto">
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
      <div class="mt-3">
        <h4 class="mb-3 text-xl font-bold">{{title2}}</h4>

        <ul class="font-bold">
          <li
            class="py-3 border-gray-light border-dashed"
            v-for="(link, i) in propertyList"
            :key="i"
            :class="[link.border ? 'border-b-4' : '']"
          >
            <a href="#" class="text-seofoam-100"> {{ link.price }}</a>
            {{ link.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Want to speak with us ?',
      title2: 'Your Property',
      propertyList: [
        {
          price: '$ 100',
          text: 'montclaire dr',
          border: true,
        },
        {
          price: '$ 800,00',
          text: ' - loan amount',
          border: true,
        },
        {
          price: '$ 1,000,000',
          text: '- purchase',
          border: false,
        },
      ],
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

<style lang="scss" scoped>
.shadow_medium {
    box-shadow: 1px 1px 23px 4px #eee;
}
.radius_48 {
    border-radius: 48px;
    box-shadow: 3px 5px 1px rgba(229, 229, 229, 0.34);
}
@media screen and (max-width: 1439px) {
    .radius_48 {
        border-radius: 48px;
    }
}
</style>