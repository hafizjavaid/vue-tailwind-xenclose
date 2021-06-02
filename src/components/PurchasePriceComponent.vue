<template>
<div class="text-left w-full">
      <div style="height: fit-content; max-width: 500px;">
  <p class="Question">What's the purchase price?</p>
  <div class="w-full input-border flex items-center ">
    <img style="width: 35px; height: 35px" src="@/assets/icons/dollar.svg" alt="currency">
  <input type="number" class="w-full bg-black input-outline"
         v-model.trim="purchasePrice"
         @input="checkForValidation"
         style="height: 50px">
  </div>
  <p>
    You may be actively bidding on this property, but an estimated purchase
    price will still be sufficient to get a quote on title insurance
  </p>
</div>
      <div class="parent-question" >
    <p class="Question">What's your loan amount?</p>
    <div class="w-full input-border flex items-center">
      <img style="width: 35px; height: 35px" src="@/assets/icons/dollar.svg" alt="currency">
      <input type="number" class="w-full bg-black input-outline"
             v-model.trim="loanAmount"
             @input="checkForValidation"
             style="height: 50px">
    </div>
    <p>
      Even if the loan amount changes,
      an estimate will be sufficient to get a quote on title insurance
    </p>
  </div>
      <div style="height: fit-content; max-width: 500px">
    <p class="Question">What's your close date?</p>
    <div class="w-full input-border">
      <input type="date" class="w-full bg-black input-outline"
             v-model.trim="date"
             @input="checkForValidation"
             style="height: 50px">
    </div>
    <p>
      Even if the loan amount changes,
      an estimate will be sufficient to get a quote on title insurance
    </p>
  </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import isEmpty from 'validator/es/lib/isEmpty';
import isLength from 'validator/es/lib/isLength';
import { parsify } from '@/wrapper/general';

export default {
  name: 'PurchasePriceComponent',
  data() {
    return {
      purchasePrice: '',
      loanAmount: '',
      date: '',
    };
  },
  setup() {
    const parse = parsify;
    const checkEmpty = isEmpty;
    const checkLength = isLength;
    return {
      parse,
      checkLength,
      checkEmpty,
    };
  },
  computed: {
    ...mapGetters({
      purchaseQuestion: 'buyHome/getPurchasePriceOptions',
    }),
  },
  /*
  retreive the previous added values
   */
  mounted() {
    this.purchasePrice = this.parse(this.purchaseQuestion[0]);
    this.loanAmount = this.parse(this.purchaseQuestion[1]);
    this.date = this.parse(this.purchaseQuestion[2]);
    this.checkForValidation();
  },
  methods: {
    ...mapMutations({
      addPurchaseLoanDate: 'buyHome/ADD_PURCHASE_LOAN_DATE',
    }),
    prepareResponse() {
      return [
        this.purchasePrice,
        this.loanAmount,
        this.date,
      ];
    },
    checkForValidation() {
      let counter = 0;
      if (!this.checkEmpty(this.purchasePrice)
        && this.checkLength(this.purchasePrice, { min: 3, max: 10 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.loanAmount)
        && this.checkLength(this.loanAmount, { min: 3, max: 10 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.date)
        && this.checkLength(this.date, { min: 2, max: 20 })) {
        counter += 1;
      }
      if (counter === 3) {
        this.addPurchaseLoanDate(this.prepareResponse());
      }
    },
  },
};
</script>
<style src="../components/SharedComponentsCss/main.css" scoped></style>
<style scoped lang="css">
.input-outline {
  outline: none;
}
.parent-question {
  height: fit-content;
  max-width: 500px;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.input-border{
 outline-color: #2a1843;
  outline-style: solid;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

</style>
