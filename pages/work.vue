<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="w-[90%]">
      <div
        class="w-full flex items-center flex-col md:flex-row justify-between py-6"
      >
        <div class="w-full md:w-[70%] lg:w-1/2 flex flex-col gap-2 md:gap-4">
          <span class="text-[#E34D73]">Portrait</span>
          <h3 class="fs-2 font-bold">Oceanic feeling</h3>
          <p class="p-fs">
            Non dolore magna ut nisi duis magna minim nulla anim laborum cillum
            incididunt. Minim excepteur sit dolore elit labore magna aute
            consectetur dolor cillum non aliqua sint labore laboris tempor
            occaecat laboris aliqua. Irure non ullamco sit amet aliquip officia
            duis e
          </p>
        </div>
        <div class="h-full w-full md:w-[30%] flex flex-col gap-2 md:gap-4 py-4">
          <div class="w-fit">
            <p class="font-semibold fs-2 leading-3">Date</p>
            <span class="text-[.8rem]">12 May 2024</span>
          </div>
          <div class="w-fit">
            <p class="font-semibold leading-3 fs-2">Client Name</p>
            <span class="text-[.8rem]">Stephen Jonh</span>
          </div>
        </div>
      </div>
      <div class="w-full lg:h-[100vh] my-6">
        <img
          src="../assets/img/section-work-img.png"
          class="w-full h-full"
          alt=""
        />
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full lg:w-[50%] flex flex-col items-center justify-center"
        >
          <h3 class="fs-2 font-bold">Commodo occaecat</h3>
          <p class="text-center p-fs lg:text-start">
            Non dolore magna ut nisi duis magna minim nulla anim laborum cillum
            incididunt. Minim excepteur sit dolore elit labore magna aute
            consectetur dolor cillum non aliqua sint labore laboris tempor
            occaecat laboris aliqua. Irure non ullamco sit amet aliquip officia
            duis e
          </p>
        </div>
      </div>
      <div class="w-full flex gap-2 lg:gap-6 lg:h-[100vh] py-6">
        <div class="w-[70%] rounded-lg overflow-hidden">
          <img src="../assets/img/img-1 (1).png" alt="" class="w-full h-full" />
        </div>
        <div class="w-[30%] rounded-lg overflow-hidden">
          <img src="../assets/img/img-1 (2).png" class="w-full h-full" alt="" />
        </div>
      </div>
      <div class="w-full flex items-center justify-center">
        <div
          class="w-full lg:w-[50%] p-fs flex flex-col items-center justify-center"
        >
          <p class="text-center lg:text-start">
            Non dolore magna ut nisi duis magna minim nulla anim laborum cillum
            incididunt. Minim excepteur sit dolore elit labore magna aute
            consectetur dolor cillum non aliqua sint labore laboris tempor
            occaecat laboris aliqua. Irure non ullamco sit amet aliquip officia
            duis e
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col gap-4 py-6">
        <TestimonialCard
          v-for="card in TestimonailDatas.slice(1, 2)"
          :name="card.name"
          :text="card.text"
          :sm_title="card.sm_title"
          :img="card.img"
        />
      </div>
      <div class="w-full flex flex-col py-6">
        <div class="">
          <h3 class="fs-1">Other projects</h3>
        </div>
        <div
          class="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-6 py-6"
        >
          <OtherCard
            v-for="(card, idx) in OtherCardDatas"
            :key="idx"
            :img="card.img"
            :name="card.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getTestimonialsDataFunc,
  getOtherProjectCardFunc,
} from "~/services/fetchDataService";

import TestimonialCard from "~/components/card/TestimonialCard.vue";
import OtherCard from "~/components/card/OtherCard.vue";
const config = useRuntimeConfig();
const TestimonailDatas = ref([]);
const OtherCardDatas = ref([]);
async function loadData(fetchFunc, dataRef) {
  try {
    const data = await fetchFunc(config);
    dataRef.value = data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

onMounted(() => {
  loadData(getTestimonialsDataFunc, TestimonailDatas);
  loadData(getOtherProjectCardFunc, OtherCardDatas);
});
</script>
