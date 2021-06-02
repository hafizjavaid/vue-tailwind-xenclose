<template>
    <header class="absolute z-50 w-full mx-auto text-gray-600 body-font">
    <div
      class="flex flex-col flex-wrap items-center hidden
      p-5 px-5 py-10 mx-auto lg:px-20 md:flex 2xl:container md:flex-row"
    >
      <a
        class="flex items-center mb-4 font-medium text-gray-dark title-font md:mb-0"
      >
        <img src="@/assets/images/Zenlosed.svg" class="w-24 xl:w-full" alt="" />
      </a>
      <nav
        class="flex flex-wrap items-center
         justify-center text-sm font-bold xl:text-base md:ml-auto md:mr-10"
      >
        <router-link v-for="(link,i) in links" :key="i"
         :to="link.link" class="mr-5 text-white-light cursor-pointer hover:text-gray-dark"
          >{{link.text}}</router-link
        >

      </nav>
      <button
        class="inline-flex items-center px-10 py-2
         mt-4 mr-2 text-sm text-white-light capitalize
          transition-all duration-100 border-0 rounded-full
           bg-seofoam-100 focus:outline-none hover:bg-white md:mt-0 hover:text-black"
      >
        sign in
      </button>

      <button
        class="inline-flex items-center px-10 py-2
         mt-4 text-sm font-semibold capitalize transition-all
          duration-100 bg-white border-0 rounded-full focus:outline-none
           bg-white-light hover:bg-seofoam-100 hover:text-white-light md:mt-0"
      >
        get started
      </button>
    </div>

    <!-- mobile menu -->

    <div class="flex-col w-full md:hidden md:flex md:flex-row md:min-h-screen">
      <div

        class="flex flex-col flex-shrink-0 w-full
         text-gray-700 md:w-64 dark-mode:text-gray-200 dark-mode:bg-gray-800"
        x-data="{ open: false }"
      >
        <div
          class="flex flex-row items-center justify-between flex-shrink-0 px-8 py-4"
        >
          <a
            href="#"
            class="text-lg font-semibold
             tracking-widest text-gray-dark uppercase
              rounded-lg dark-mode:text-white-light focus:outline-none focus:shadow-outline"
          >
            <img src="@/assets/images/Zenlosed.svg" class="w-32" alt="" />
          </a>
          <button
            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="#fff" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3
                 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1
                  0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1
                 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                  1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586
                   10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ block: open, hidden: !open }"
          class="flex-grow px-4 py-4 bg-seofoam-100
           bg-opacity-90 md:block md:pb-0 md:overflow-y-auto"
        >
         <router-link v-for="(link,i) in links" :key="i"
          :to="link.link" class="block px-4 py-2 mt-2 text-sm
           font-semibold rounded-lg   mr-5 text-white-light cursor-pointer hover:text-gray-dark"
          >{{link.text}}</router-link
        >
         <button
        class="flex items-center px-10 py-2 mt-4 text-sm
         font-semibold capitalize transition-all duration-100
          bg-white border-0 rounded-full focus:outline-none
           bg-white-light hover:bg-seofoam-100 hover:text-white-light md:mt-0"
      >
        sign in
      </button>

      <button
        class="flex items-center px-10 py-2 mt-4 text-sm font-semibold
         capitalize transition-all duration-100 bg-white border-0
          rounded-full focus:outline-none bg-white-light hover:bg-seofoam-100
           hover:text-white-light md:mt-0"
      >
        get started
      </button>

          <!-- <div
            @click.away="open = false"
            class="relative"
            x-data="{ open: false }"
          > -->
           <div

            class="relative"
            x-data="{ open: false }"
          >

          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Title insurance',
          link: '/',
        },
        {
          text: 'Contact Us',
          link: '/',
        },
        {
          text: 'Resources',
          link: '/',
        },
      ],
      open: false,
    };
  },
};
</script>

<style scoped>
</style>