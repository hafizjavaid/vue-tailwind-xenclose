<template>
  <div
    class="col-span-6 2xl:col-span-2 md:col-span-3"
    v-for="(box, i) in boxes"
    :key="i"
  >
    <div class="p-5 text-center bg-white rounded-lg shadow_medium">
      <div class="flex items-center justify-center w-16 h-16 mx-auto">
        <img :src="box.imgTop" class="mx-auto" alt="" />
      </div>
      <h4 class="mt-3"><b>{{box.name}} </b></h4>
      <p class="mt-3">{{box.info}}</p>
      <div class="mt-3">
        <a href="#">
          <img :src="box.downArrow" class="mx-auto" alt=""
        /></a>
      </div>
      <div class="w-full mt-3">
        <a
          href="#"
          class="inline-flex items-center p-2 mx-auto transition-all
           duration-100 border border-black-main rounded-full text-seofoam-700
            border-opacity-5 hover:text-white-light"
        >
          <span
            class="p-2 font-bold border border-black-main rounded-full border-opacity-20"
          >
            <span
              class="relative flex items-center justify-center w-32 h-12 px-8
               text-xs rounded-full xl:text-sm gradient"
            >
              <span class="inline-flex mr-2 left-7 top-4"> </span>
             {{box.price}}
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxes: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%),
        linear-gradient(0deg, #232323, #232323), #51ebaa;
}
.shadow_medium {
    box-shadow: 1px 1px 23px 4px #eee;
}
</style>
