<template>
    <section
        class="relative pb-10 bg-no-repeat bg-cover hero"
        v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
      >
        <div class="w-full">
          <div class="container px-5 pt-20 mx-auto md:pt-32 lg:px-20">
            <p
              class="px-5 py-3 text-sm text-center text-white-light
              rounded-full md:p-5 bg-seofoam-500 bg-opacity-20 lg:text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            </p>

            <div class="flex mt-5 lg:mt-12">
              <div class="flex items-center">
                <div
                  class="text-center text-white-light capitalize md:text-left"
                >
                  <h3 class="mb-2 text-sm md:text-2xl lg:mb-5">
                    real estate agent resources
                  </h3>
                  <h2
                    class="mb-2 text-2xl font-bold leading-tight lg:text-4xl
                    md:text-2xl lg:mb-5 xl:text-6xl"
                  >
                    we know you want to<br />
                    close smoothly, we're<br />
                    experts.
                  </h2>

                  <div class="w-full font-light md:w-2/3">
                    <p
                      class="p-5 py-2 mb-2 text-sm md:py-5 lg:mb-5 md:text-base md:p-1"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, expedita unde, placeat sed cum officiis reiciendis a
                      magnam officia id fugit quas molestias tenetur nam eius
                      quis alias odit. Nesciunt!
                    </p>

                    <a
                      href="#"
                      class="inline-flex items-center p-2 transition-all
                      duration-100 border border-black rounded-full
                       border-opacity-5 hover:text-white-light text-seofoam-light-50"
                    >
                      <span
                        class="p-2 font-bold border border-black rounded-full border-opacity-20"
                      >
                        <span
                          class="flex items-center p-3 px-6 text-xs
                          rounded-full xl:text-sm xl:px-16 md:p-5 gradient"
                        >
                          <span class="inline-flex mr-2">
                            <img
                              src="@/assets/images/eva_phone-call.svg"
                              class="w-6 xl:w-full"
                              alt=""
                          /></span>
                          schedule a call
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div class="relative hidden w-full -bottom-24 md:block">
                <div>
                  <img src="@/assets/images/banner-img.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute hidden w-48 -bottom-28 -left-6 md:block">
          <img src="@/assets/images/cube_3.png" alt="" />
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      // eslint-disable-next-line global-require
      image: require('@/assets/images/hero-bg.png'),
    };
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, #232323, #232323), #51ebaa;
}
</style>
