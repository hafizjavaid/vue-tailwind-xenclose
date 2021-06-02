<template>
  <!--  dide navbar-->
  <div class="parent relative overflow-x-auto" >
    <!--    main page cover  -->
    <transition name="fade">
      <div class="page-overlay" v-if="sideBar">
        <div class="menu-icon-close" @click="openSideBar">
          <svg  width="32px" height="32px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Menu-Closed</title><g id="Icon/Menu-Closed" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12.5,11.0857864 L19.0857864,4.5 C19.4763107,4.10947571 20.1094757,4.10947571 20.5,4.5 C20.8905243,4.89052429 20.8905243,5.52368927 20.5,5.91421356 L13.9142136,12.5 L20.5,19.0857864 C20.8905243,19.4763107 20.8905243,20.1094757 20.5,20.5 C20.1094757,20.8905243 19.4763107,20.8905243 19.0857864,20.5 L12.5,13.9142136 L5.91421356,20.5 C5.52368927,20.8905243 4.89052429,20.8905243 4.5,20.5 C4.10947571,20.1094757 4.10947571,19.4763107 4.5,19.0857864 L11.0857864,12.5 L4.5,5.91421356 C4.10947571,5.52368927 4.10947571,4.89052429 4.5,4.5 C4.89052429,4.10947571 5.52368927,4.10947571 5.91421356,4.5 L12.5,11.0857864 Z" id="Combined-Shape" fill="currentColor" fill-rule="nonzero"></path></g></svg>
        </div>
      </div>
    </transition>
    <!--          Side bar-->
    <div class="sidebar sidebar-size flex flex-col items-center justify-start">
      <!--  sidebar item-->
      <div class="grid w-4/5 grid-cols-3 h-28 items-center justify-around">
        <!--    icon -->
        <img class="rounded-full w-12 h-12 col-span-1" src="https://media.better.com/components/menu/roof-icon.png" />
        <!--    Item name-->
        <span class="text-white flex flex-col items-start
         col-span-2 text-white-light">
      <span class="text-xs">
        New Purchase
      </span>
          <span class="text-lg font-bold">
            {{ stateResidence }}
          </span>
             <span class="text-xs">
        {{residence}}
      </span>
       <span class="text-xs">
        {{family}}
      </span>
             <span class="text-xs">
        {{address}}
      </span>
    </span>
      </div>
    </div>

    <transition name="slide" v-on:after-enter="widthPermanent" v-on:leave="widthRemove">
      <div v-if="sideBar"
           id="menuBar"
           class="menubar flex flex-col items-center justify-between fixed"
           style="z-index: 5">
        <!--  sidebar item-->
        <div class="grid w-4/5 grid-cols-3 h-28 items-center justify-around">
          <!--    icon -->
          <img class="rounded-full w-12 h-12 col-span-1" src="https://media.better.com/components/menu/roof-icon.png" />
          <!--    Item name-->
          <span class="text-white
           flex flex-col
            items-start
             col-span-2
             font-semibold text-white-light">
            <span class="text-lg font-bold">
              {{ stateResidence }}
            </span>
      <span class="text-xs">
        New Purchase
      </span>
       <span class="text-xs">
        {{residence}}
      </span>
       <span class="text-xs">
        {{family}}
      </span>
             <span class="text-xs">
        {{address}}
      </span>
    </span>
        </div>
        <!--   user authentication related stuff   -->
        <div class="w-full text-white">
          <!--   for logged in user     -->
          <div class="w-full m-2 flex items-start justify-center text-white-light flex-col text-xl">
            <p class="m-2">Change Email</p>
            <p class="m-2">Change Password</p>
            <p class="m-2">Sign out</p>
          </div>
          <!--   for non authenticated users     -->
          <div class="w-full m-2 text-xl flex items-start justify-center flex-col text-white-light">
            <p class="m-2">Sign in</p>
          </div>
        </div>
      </div>

    </transition>
    <!--  navbar  -->
    <div id="navbarCollapse"
      class="w-full nav-parent  absolute top-0 left-0 bottom-0 h-full flex flex-col">
      <nav
        class="w-full bg-white-light sticky top-0 h-16 flex flex-row items-center justify-between"
        style="z-index: 8">
        <div v-if="!sideBar" class="hamburger flex-col justify-center items-center"
             @click="openSideBar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span class="mr-2 p-2 underline cursor-pointer">Sign In</span>

      </nav>
      <slot></slot>
    </div>

  </div>
</template>

<script>

export default {
  name: 'QuestionnaireLayout',
  data() {
    return {
      sideBar: false,
    };
  },
  computed: {
    stateResidence() {
      return this.$store.state.buyHome.residenceState;
    },
    residence() {
      return this.$store.state.buyHome.residenceType;
    },
    family() {
      return this.$store.state.buyHome.residenceFaimly;
    },
    address() {
      return this.$store.state.buyHome.residenceAddress;
    },
  },
  methods: {
    openSideBar() {
      document.getElementById('navbarCollapse').style.marginLeft = '0px';
      this.sideBar = !this.sideBar;
      if (this.sideBar) document.getElementById('navbarCollapse').style.marginLeft = '250px';
    },
    widthPermanent() {
      document.getElementById('menuBar').style.width = '250px';
    },
    widthRemove() {
      document.getElementById('menuBar').style.width = '0px';
    },
  },
};
</script>

<style scoped>

.slide-enter-active, .slide-leave-active {
  transition: all ease 0.5s;
}
.slide-enter {
  opacity: 0;
  width: 0;
}
.slide-leave {
  opacity: 1;
  width: 250px;
}
.slide-leave-to {
  opacity: 0;
  width: 0;
}
.slide-enter-to {
  opacity: 1;
  width: 250px;
}
.nav-parent {
  transition: all ease 0.3s;
}
.hamburger {
  width: 60px;
  height: 60px;
}
.hamburger > div {
  @apply mt-3;
  @apply w-full;
  height: 5px;
  background-color: black;
}
.sidebar {
  background-color: #291843;
  position: fixed;
  transition: ease all .5s;
  z-index: 10;
}
.sidebar-size {
  width: 300px;
  height: 100vh;
}
.sidebar > div {
  grid-gap: 10px;
  box-sizing: border-box;
}
.parent {
  width: 100%;
  height: 100vh;
}
.menubar {
  display: none;
}

@media screen and (max-width: 1100px) {
  .sidebar-size {
    width: 0px;
    display: none;
  }
  .page-overlay {
    display: flex;
    position: fixed;
    background-color: #291843;
    opacity: 0.8;
    margin-left: 250px;
    width: 100%;
    height: 100vh;
    z-index: 11;
  }
  .menubar {
    background-color: #291843;
    display: flex;
    height: 100vh;
  }
  .menu-icon-close {
    background-color: #291843;
    margin-left: 15px;
    margin-top:15px;
    width: 80px;
    height: 80px;
  }
  .menu-icon-close > svg {
    color: white;
  }
  .icon-path {
    clip-path: polygon(
      20% 0%, 0% 20%, 30% 50%,
      0% 80%, 20% 100%,
      50% 70%, 80% 100%,
      100% 80%, 70% 50%,
      100% 20%, 80% 0%,
      50% 30%
    );
  }
}

</style>

<style src="../components/SharedComponentsCss/main.css" scoped></style>
