<template>
     <div class="w-full px-4 lg:w-1/5 md:w-1/2">
          <h2
            class="mb-5 text-lg font-bold tracking-widest text-white-light capitalize title-font"
          >
            {{title}}
          </h2>
          <nav class="mb-10 text-sm list-none">
           <li class="py-1" v-for="(link, i) in links" :key="i">
              <router-link :to="link.link"
                class="text-white-light capitalize cursor-pointer hover:text-seofoam-100"
                >{{link.text}}</router-link
              >
            </li>
          </nav>
        </div>
</template>

<script>
export default {
  props: ['title', 'links'],
};
</script>

<style lang="scss" scoped>

</style>
