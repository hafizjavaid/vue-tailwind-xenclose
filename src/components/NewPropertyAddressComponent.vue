<template>
  <div class="text-left mt-5 w-full" style="height: fit-content">
    <p class="Question">Great! What is the address of the new property?</p>
    <div id="address" class="flex flex-row flex-wrap justify-between mr-3">
      <!--  Addressinput   -->
      <div class="flex flex-col justify-start">
        <p class="p-3">Address</p>
        <input v-model.trim="address" ref="autoCompleteAddress"
               @input="checkForValidation"
               id="autoCompleteAddress"
               class="inputAddress"
               type="text">
      </div>
      <!--     -->
      <div class="flex flex-col justify-start">
        <p class="p-3">Apt/Unit</p>
        <input
          v-model.trim="unit"
          class="inputApt"
          type="text"
          @input="checkForValidation"
        >
      </div>

    </div>
    <div id="location" class="flex flex-wrap mr-3 justify-between  mt-3 ">
      <!--  City   -->
      <div class="h-20 ">
        <p class="p-3">City</p>
        <input
          v-model.trim="city"
          class="inputAddress"
          @input="checkForValidation"
          style="width: 90%"
          type="text">
      </div>
      <!--  State   -->
      <div class="flex flex-col justify-start ">
        <p class="p-3">State</p>
        <select name="" v-model.trim="state" id="" @input="checkForValidation">
          <option value=""></option>
          <option value="Lorem ipsum.">Lorem ipsum.</option>
          <option value="Lorem ipsum.">Lorem ipsum.</option>
          <option value="Lorem ipsum.">Lorem ipsum.</option>
        </select>
      </div>
      <!--  Zip Code    -->
      <div class="flex flex-col justify-start">
        <p class="p-3">Zipcode</p>
        <input v-model.trim="zipcode"
               class="inputApt"
               @input="checkForValidation"
               type="text">
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { parsify } from '@/wrapper/general';
import isEmpty from 'validator/es/lib/isEmpty';
import isLength from 'validator/es/lib/isLength';
import isInt from 'validator/es/lib/isInt';

export default {
  name: 'NewPropertyAddressComponent',
  props: {
    questionsWithOptions: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      address: null,
      city: null,
      state: null,
      zipcode: null,
      unit: null,
      googleAutoComplete: null,
      allFieldValidation: [],
    };
  },
  setup() {
    const parse = parsify;
    const checkEmpty = isEmpty;
    const checkLength = isLength;
    const checkInteger = isInt;
    return {
      parse,
      checkEmpty,
      checkLength,
      checkInteger,
    };
  },
  mounted() {
    this.initAutoComplete();
    this.initPrevValues();
  },
  computed: {
    ...mapGetters({
      prevValues: 'buyHome/getNewAdressValues',
    }),
  },
  methods: {
    ...mapMutations({
      addToOptionBags: 'buyHome/UPDATE_DISPLAY_CURRENT',
      removeFromOptionBags: 'buyHome/REMOVE_OPTION_FROM_BAG',
      addToAddressOption: 'buyHome/ADD_NEW_PROPERTY_ADDRESS',
    }),
    initPrevValues() {
      this.address = this.parse(this.prevValues[0]);
      this.unit = this.parse(this.prevValues[1]);
      this.city = this.parse(this.prevValues[2]);
      this.state = this.parse(this.prevValues[3]);
      this.zipcode = this.parse(this.prevValues[4]);
      this.checkForValidation();
    },
    checkForValidation() {
      let counter = 0;
      if (!this.checkEmpty(this.address)
        && this.checkLength(this.address, { min: 4, max: 50 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.city)
        && this.checkLength(this.city, { min: 4, max: 10 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.unit)
        && this.checkInteger(this.unit, { gt: 1, lt: 10000 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.zipcode)
        && this.checkLength(this.zipcode, { min: 2, max: 10 })) {
        counter += 1;
      }
      if (!this.checkEmpty(this.state)) {
        counter += 1;
      }
      if (counter === 5) {
        this.addToAddressOption(this.prepareResponse());
      }
    },
    prepareResponse() {
      return [
        this.address,
        this.unit,
        this.city,
        this.state,
        this.zipcode,
      ];
    },
    addToAllFieldValidationIfNotExist(value) {
      if (!this.allFieldValidation.includes(value)) {
        this.allFieldValidation.push(value);
      }
    },
    removeFomAllFieldValidationIfExist(value) {
      if (this.allFieldValidation.includes(value)) {
        this.allFieldValidation.splice(this.allFieldValidation.indexOf(value), 1);
      }
    },
    initAutoComplete() {
      // eslint-disable-next-line no-undef, new-cap
      this.googleAutoComplete = new google.maps.places.Autocomplete(
        document.getElementById('autoCompleteAddress'),
        { types: ['geocode'] },
      );
      this.googleAutoComplete.setFields(['address_component']);
      this.googleAutoComplete.addListener('place_changed', this.fillInAddress);
    },
    fillInAddress() {
      console.log(this.googleAutoComplete.getPlace());
    },
  },
};
</script>
<style scoped>
select {
  width: 200px;
  height: 50px;
  background-color: white;
  border-color: black;
  border-style: solid;
  border-width: 3px;
}
.inputAddress {
  width: 600px;
  height: 50px;
  border-color: black;
  border-style: solid;
  border-width: 3px;
}
.inputApt {
  width: 200px;
  height: 50px;
  border-color: black;
  border-style: solid;
  border-width: 3px;
}
@media screen and (max-width: 1200px){
  #address {
    flex-direction: column !important;
  }
  input {
    width: 100% !important;

  }
  #location {
    flex-direction: column !important;
  }
}
</style>
<style src="../components/SharedComponentsCss/main.css" scoped></style>
