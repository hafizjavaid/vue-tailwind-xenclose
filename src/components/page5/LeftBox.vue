<template>
  <div class="hidden col-span-12 md:block xl:col-span-2 md:col-span-3">
    <div
      class="relative p-5 py-20 bg-white-light min-h-140 outer radius_48 2xl:p-8 rounded-2xl"
    >

     <left-item :boxes="boxes"></left-item>

    </div>
  </div>
</template>

<script>
import LeftItem from './common/LeftItem.vue';

export default {
  data() {
    return {
      boxes: [
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-circle.png'),
          text: 'start',
          imgBottom: {
            hasImg: true,
            // eslint-disable-next-line global-require
            img: require('@/assets/images/Line_202.png'),
          },
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-circle.png'),
          text: 'Property Info',
          imgBottom: {
            hasImg: true,
            // eslint-disable-next-line global-require
            img: require('@/assets/images/Line_202.png'),
          },
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/black-circle.png'),
          text: 'Account',
          imgBottom: {
            hasImg: true,
            // eslint-disable-next-line global-require
            img: require('@/assets/images/Line_202.png'),
          },
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-circle.png'),
          text: 'Result',
          imgBottom: {
            hasImg: false,
            // eslint-disable-next-line global-require
            img: require('@/assets/images/Line_202.png'),
          },
        },
      ],
    };
  },
  components: {
    LeftItem,
  },
};
</script>

<style lang="scss" scoped>
.radius_48 {
    border-radius: 48px;
    box-shadow: 3px 5px 1px rgba(229, 229, 229, 0.34);
}
@media screen and (max-width: 1439px) {
    .radius_48 {
        border-radius: 25px;
    }
}
</style>
