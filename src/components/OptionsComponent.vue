<template>
  <div class="flex xl:p-2  2xl:p-2 txt-xl:p-3 flex-row ">
    <p v-bind:class="{'Options':true, 'selected':getMarkStatus}" ref="option" @click="markTheTick">
      {{getQuestionOption.option}}
      <transition name="fade">
      <span class="absolute  tick" v-if="getMarkStatus">
      <svg class="icon icon-check" width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" focusable="false"><g stroke="none" stroke-width="1" fill="var(--crate-theme-color-checked)" fill-rule="evenodd"><path d="M22.4291961,5 L22.4291961,5 C23.2184365,5.77276989 23.2317885,7.03902946 22.4590186,7.8282699 L10.1504064,20.3992237 C9.37763651,21.1884641 8.11137695,21.2018161 7.3221365,20.4290462 C7.31204009,20.4191605 7.30204873,20.4091681 7.2921641,20.3990706 L1.39907062,14.3790843 C0.626385253,13.5897611 0.639872874,12.323503 1.42919607,11.5508176 L1.42919607,11.5508176 C2.21851926,10.7781322 3.48477739,10.7916199 4.25746275,11.580943 L8.72151324,16.1411156 L19.6009262,5.02982257 C20.3736961,4.24058213 21.6399556,4.22723011 22.4291961,5 Z" fill="#00bf92"></path></g></svg>
    </span>
      </transition>
    </p>

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('buyHome');

export default {
  name: 'OptionsComponent',
  props: {
    questionOption: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getQuestionOption() {
      return this.questionOption;
    },
    getMarkStatus() {
      return this.questionOption.isSelected;
    },
  },
  methods: {
    ...mapMutations({
      residencyType: 'UPDATE_RESIDENCE_TYPE',
      residenceUnits: 'UPDATE_RESIDENCE_UNITS',
    }),
    markTheTick() {
      this.$emit('tickMark', this.getQuestionOption.id);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all ease 0.2s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.Options {
  border-color: #a3b4c2;
  color: #a3b4c2;
  font-weight: 600;
  gap: normal;
  letter-spacing: -0.640725px;
  line-height: 29.4734px;
  @apply cursor-pointer;
  @apply relative;
  @apply 2xl:text-xl;
  @apply txt-xl:text-2xl;
  @apply xl:text-2xl;
  @apply xl-mid:text-xl;
}
.Options:hover {
  border-color: #291843;
  color: #291843;
}

.selected {
  border-color: #291843;
  color: #291843;
}

.tick {
  @apply top-0;
  left: -30px;
}
@media screen and (max-width: 1169px){
  .tick {
    @apply top-0;
    left: 103%;

  }
}
</style>
