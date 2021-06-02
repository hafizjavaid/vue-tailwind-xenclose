<template>
    <section class="relative py-5 md:py-20 review">
        <div class="container relative z-10 px-5 mx-auto lg:px-20">
          <div class="justify-center text-center felx">
            <span class="font-semibold uppercase text-seofoam-100">
              reviews</span
            >
            <h3
              class="mb-2 text-xl font-bold leading-tight capitalize md:mb-10 lg:text-4xl"
            >
              drives review
            </h3>
          </div>

          <div class="relative z-10 w-5/6 mx-auto">
            <div class="project-slider">
              <carousel :items-to-show="2" :wrapAround="true">
                <slide v-for="(slide,i) in reviews" :key="i">
                  <div class="p-2 slide-item">
                    <div class="p-5 bg-white shadow lg:p-16 rounded-xl">
                      <div class="flex items-center h-full py-5 rounded-lg">
                        <img
                          alt="team"
                          class="flex-shrink-0 object-cover object-center
                           w-12 h-12 mr-4 bg-gray-100 rounded-full"
                          :src="slide.img"
                        />
                        <div class="capitalize">
                          <h2 class="font-bold text-gray-900">
                           {{slide.heading}}
                          </h2>
                          <p class="text-xs text-seofoam-100">
                           {{slide.subtitle}}
                          </p>
                        </div>
                      </div>
                      <div class="text-sm text-left text-gray-600">
                        <p>
                          {{slide.detail}}
                        </p>
                      </div>
                    </div>
                  </div>
                </slide>

                <template #addons>
                  <pagination />
                </template>
              </carousel>
            </div>
          </div>
        </div>

        <div class="absolute left-0 w-full mx-auto -bottom-1">
          <img src="@/assets/images/Wave.svg" alt="" />
        </div>
      </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },

  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },

};
</script>

<style lang="scss">
.carousel__slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(50% - 10px);
  width: 100%;
  margin-right: 10px;
  @media (max-width: 560px) {
    max-width: 100% !important;
    width: 100% !important;
  }
}
.slide-item {
  width: 100%;
}
.project-slider {
  max-width: 800px;
  width: 100%;
  margin: 20px auto;
}
ol.carousel__pagination {
  margin-top: 30px;
}

ol.carousel__pagination
  li.carousel__pagination-item
  .carousel__pagination-button {
  width: 12px;
  height: 12px;
  background-color: #1b8382;
  border-radius: 100px;
  // margin-right: 5px;
}
ol.carousel__pagination li.carousel__pagination-item {
  width: 22px;
  height: 22px;
  margin-right: 0px;
}

ol > li:has(button.carousel__pagination-button--active) {
  z-index: 9;
}
</style>
