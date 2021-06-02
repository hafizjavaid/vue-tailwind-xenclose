<template>
  <div  class="w-full h-full flex flex-col">
    <div id="parent" class=" flex flex-row" style="height: 80%">
      <!--  Company Info  -->
      <div id="company" class=" h-full flex flex-col ">
        <div class="w-full flex">
      <span class="company-caption text-sm" style="color: #6d82b4">
        Better Mortgage Corporation is a direct lender dedicated to providing a fast,
        transparent digital mortgage experience backed by superior customer support.
      </span>
        </div>
      </div>
      <!--  Contacts  -->
      <div id="contacts" class=" h-full flex flex-col" >
      <span  class="flex-col flex justify-end contacts-title text-2xl font-semibold" >
      Contact
      </span>
        <div class="w-full flex flex-col contacts-details text-sm" style="color: #6d82b4">
          <a class="">hello@better.com</a>
          <p>415-523-8837</p>
          <p>FAQ</p>
          <p>Resources</p>
        </div>
      </div>
      <!--  Legal-->
      <div id="legal" class="w-1/3 h-full flex flex-col" >
      <span  class="flex-col flex justify-end contacts-title text-2xl font-semibold">
      Legal
      </span>
        <div class="w-full  flex flex-col contacts-details text-sm" style="color: #6d82b4">
          <a class="">hello@better.com</a>
          <p>415-523-8837</p>
          <p>FAQ</p>
          <p>Resources</p>
        </div>
      </div>
    </div>
    <div class=" border-gray-600 w-full mt-6 mb-6" style="color: #6d82b4;border-width: 1px"></div>
    <div class="mb-2">
      <p class="text-xs" style="color: #6d82b4">Better Mortgage Corporation is a direct lender.
        All rights reserved. NMLS #330511 © Better Mortgage Corporation | 3 World Trade Center,
        175 Greenwich Street, 59th Floor, New York, NY 10007 |
        Loans made or arranged pursuant to a California Finance Lenders Law License.
        Not available in all states.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLayout',
};
</script>
<style scoped>
.contacts-details {
  margin-top: 40px
}
.company-caption {
  margin-top: 40px;
  max-width: 450px;
  flex-grow: 0
}
#company, #contacts {
  width: 40%;
}
#legal {
  width: 20%;
}
.contacts-title {
  width: 100%;
  height: 100px
}
@media screen and (max-width: 1100px){
  #parent{
    flex-direction: column !important;
    width: 100%;
  }
  #company,#contacts,#legal {
    width: 100%;
  }
  .contacts-title {
    width: 100%;
    height: fit-content;
    @apply py-2;
  }
  .contacts-details{
    margin-top: 0;
  }
  .company-caption {
    width: 100%;
    margin-top: 0;
    flex-grow: 1;
    max-width: 100%;
  }
}
</style>
