<template>
  <div class="mb-3" v-for="(box, i) in boxes" :key="i">
    <div class="flex items-center justify-center">
      <img :src="box.imgTop" alt="" />
    </div>
    <div class="flex items-center justify-center font-bold">{{ box.text }}</div>
    <div class="flex items-center justify-center" v-if="box.imgBottom.hasImg">
      <img :src="box.imgBottom.img" alt="" />
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
</style>