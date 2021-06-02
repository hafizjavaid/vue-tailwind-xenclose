<template>
  <div class="text-left mt-5">
    <!-- Question -->
    <p class="Question ">{{questionWithOptions.question}}</p>
    <!--  Options  -->
    <OptionsComponent
      v-for="option in questionWithOptions.options"
      v-bind:key="option.id"
      v-bind:question-option = 'option'
      @tickMark = 'makeSelected' />
  </div>
</template>

<script>
import OptionsComponent from '@/components/OptionsComponent.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('buyHome');
export default {
  name: 'QuestionnaireComponent',
  props: {
    questionWithOptions: {
      type: Object,
      required: true,
    },
  },
  components: { OptionsComponent },
  computed: {
    getQuestion() {
      return this.questionWithOptions;
    },
  },
  methods: {
    ...mapMutations({
      updateParentDisplay: 'UPDATE_DISPLAY_CURRENT',
      updateQuestion: 'UPDATE_MULTIPLE_CHOICE_QUESTIONS',
      flushOptions: 'RESET_MULTIPLE_CHOICE_QUESTIONS',
    }),
    makeSelected(id) {
      console.log(this.questionWithOptions.id);
      this.updateQuestion({ questionId: this.questionWithOptions.id, optionId: id });
      this.updateParentDisplay(id);
    },
  },
  beforeUnmount() {
    this.flushOptions();
  },
};
</script>
<style src="../components/SharedComponentsCss/main.css" scoped></style>
