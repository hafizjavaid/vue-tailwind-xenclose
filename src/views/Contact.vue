<template>
  <div class="relative mx-auto">
    <div class="overflow-hidden">
      <Header></Header>
      <Banner></Banner>
      <Update></Update>
      <Review :reviews="reviews"></Review>
      <Connections></Connections>
      <Resources></Resources>
      <Footer></Footer>

    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import Header from '@/components/Contact/Header.vue';
import Banner from '@/components/Contact/Banner.vue';
import Update from '@/components/Contact/Update.vue';
import Connections from '@/components/Contact/Connections.vue';
import Resources from '@/components/Contact/Resources.vue';
import Footer from '@/components/Contact/Footer.vue';
import Review from '@/components/Contact/Review.vue';

export default {
  components: {
    Header,
    Banner,
    Update,
    Connections,
    Resources,
    Footer,
    Review,
  },
  data() {
    return {
      responsive: {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      reviews: [
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/client-1.png'),
          heading: 'Holden Caulfield',
          subtitle: 'vp manager lizlle company',
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur quas x.`,
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/client-2.png'),
          heading: 'Holden Caulfield',
          subtitle: 'vp manager lizlle company',
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur quas x.`,
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/client-1.png'),
          heading: 'Holden Caulfield',
          subtitle: 'vp manager lizlle company',
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur quas x.`,
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/client-2.png'),
          heading: 'Holden Caulfield',
          subtitle: 'vp manager lizlle company',
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur quas x.`,
        },
        {
          // eslint-disable-next-line global-require
          img: require('@/assets/images/client-1.png'),
          heading: 'Holden Caulfield',
          subtitle: 'vp manager lizlle company',
          detail: `Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur quas x.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">

</style>
