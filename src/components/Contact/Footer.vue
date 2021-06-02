<template>
  <footer
    class="pt-40 md:pb-40 pb-10 bg-cover bg-seofoam-50"
    v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="container relative z-10 px-5 mx-auto mt-4 lg:px-20 lg:mt-44">
      <div
        class="flex flex-wrap flex-grow order-first
        -mb-10 text-center text-white-light md:text-left"
      >
        <div class="w-full px-4 lg:w-2/5 md:w-1/2">
          <div class="mb-5 text-center md:text-left">
            <img
              src="@/assets/images/footer-Logo.svg"
              class="mx-auto w-44 md:ml-0"
              alt=""
            />
          </div>
          <div class="mb-5">
            <p class="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              iste quis alias corrupti recusandae hic odio numquam molestiae.
              Alias neque saepe eum omnis. Sit, recusandae illo voluptate
              asperiores iste dolore.
            </p>
          </div>

          <div>
            <ul class="flex justify-center md:justify-start">
              <li class="inline-flex" v-for="(link, i) in socialLinks" :key="i">
                <router-link to="/" class="p-3 text-white-light">
                  <i :class="['fab', link]"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>

        <Footeritem :title="title1" :links="contactLinks"></Footeritem>
        <Footeritem :title="title2" :links="companyLinks"></Footeritem>
        <Footeritem :title="title3" :links="legalLinks"></Footeritem>
      </div>

      <div class="mt-5 lg:mt-20">
        <div class="flex items-center justify-center">
          <span
            class="flex items-center justify-center
            w-12 h-12 p-2 text-xl bg-white-light rounded-full"
          >
            <i class="heart fas fa-heart text-seofoam-100"></i>
          </span>
        </div>
        <div class="mt-5">
          <p class="text-center text-white-light capitalize">
            copyright © 2021
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    </div>
  </footer>
</template>

<script>

import Footeritem from '../Common/Footeritem.vue';

export default {
  data() {
    return {

      // eslint-disable-next-line global-require
      image: require('@/assets/images/footer-bg.svg'),
      companyLinks: [
        {
          text: 'about us',
          link: '/',
        },
        {
          text: 'media',
          link: '/',
        },
        {
          text: 'careers',
          link: '/',
        },
        {
          text: 'partner with us',
          link: '/',
        },
      ],
      contactLinks: [
        {
          text: 'zenlosed@lorem.com',
          link: '/',
        },
        {
          text: '999-888-555',
          link: '/',
        },
        {
          text: 'learn',
          link: '/',
        },
        {
          text: 'glossary',
          link: '/',
        },
      ],
      legalLinks: [
        {
          text: 'Privacy Policy',
          link: '/',
        },
        {
          text: 'Terms Of Use',
          link: '/',
        },
        {
          text: 'Disclosures & Licensin',
          link: '/',
        },
        {
          text: 'Affiliated Business',
          link: '/',
        },
      ],
      title1: 'Contact Us',
      title2: 'Company',
      title3: 'Legal',
      socialLinks: [
        'fa-google',
        'fa-twitter',
        'fa-instagram',
        'fa-linkedin',
        'fa-youtube',
      ],
    };
  },
  components: {
    Footeritem,
  },
};
</script>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
    width: 0rem;
  }
  to {
    transform: rotate(360deg);
    width: 9rem;
  }
}

.heart {
  animation: beat 0.7s infinite alternate;
  transform-origin: center;
}

/* Heart beat animation */

@keyframes beat {
  to {
    transform: scale(0.6);
  }
}

</style>
