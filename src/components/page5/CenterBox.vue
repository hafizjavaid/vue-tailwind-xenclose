<template>
  <div class="col-span-12 xl:col-span-7 md:col-span-9">
    <div class="p-5 bg-white-light outer radius_33 min-h-140 2xl:p-8 rounded-2xl">
      <div class="mb-3">
        <h2 class="mb-3 text-2xl font-bold leading-tight">
          Your quotes from top companies!
        </h2>
        <div class="grid grid-cols-6 gap-4 mt-5 text-gray-700">
          <center-item :boxes="boxes"></center-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterItem from './common/CenterItem.vue';
export default {
  components: {
    CenterItem,
  },
  data() {
    return {
      boxes: [
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-133.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-162.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-148.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-141.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-159.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-181.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-133.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-162.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
        {
          // eslint-disable-next-line global-require
          imgTop: require('@/assets/images/Group-148.png'),
          name: 'Company Name',
          info: 'Provider info',
          // eslint-disable-next-line global-require
          downArrow: require('@/assets/images/arrow-down.png'),
          price: '2,000$',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
