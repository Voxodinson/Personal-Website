<template>
  <div class="w-full flex-col flex items-center justify-center">
    <Section />
    <div class="w-[90%] flex flex-col lg:flex-row py-6">
      <div class="">
        <h3 class="fs-2 font-semibold">My work</h3>
        <p class="p-fs">
          Duis nisi do exercitation in irure aliqua commodo nisi eu id
          reprehenderit dolore fugiat consectetur irure
        </p>
      </div>
      <div class="flex flex-col gap-2 mt-6">
        <div
          class="flex border-b-[2px] py-2 flex-col lg:flex-row border-gray-300 gap-2 md:gap-4"
          v-for="(work, idx) in myWorksDatas"
          :key="idx"
        >
          <div
            class="rounded-full overflow-hidden w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
          >
            <img :src="work.logo" alt="" class="w-full h-full" />
          </div>
          <div class="">
            <span class="p-fs">{{ work.workTime }}</span>
            <h3 class="fs-3 font-semibold">{{ work.position }}</h3>
            <p class="p-fs">{{ work.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[90%] pb-6">
      <div
        class="w-full flex gap-2 md:items-center justify-between py-2 flex-col md:flex-row"
      >
        <h3 class="fs-2 font-semibold">Hobby projects</h3>
        <div class="w-full md:w-1/2 md:p-2">
          <p class="p-fs">
            Duis nisi do exercitation in irure aliqua commodo nisi eu id
            reprehenderit dolore fugiat consectetur irure labore est ea.
          </p>
        </div>
      </div>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <div class="w-full gap-2 md:gap-4 grid grid-cols-2">
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              src="../assets/img/hobby-images/hobby-images (1).png"
              alt=""
              class="w-full h-full"
            />
          </div>
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              src="../assets/img/hobby-images/hobby-images (2).png"
              alt=""
              class="w-full h-full"
            />
          </div>
        </div>
        <div class="grid grid-rows-1 md:grid-rows-2 gap-2 md:gap-4">
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              src="../assets/img/hobby-images/hobby-images (3).png"
              alt=""
              class="w-full h-full"
            />
          </div>
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              src="../assets/img/hobby-images/hobby-images (4).png"
              alt=""
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Section from "~/components/Section.vue";

import { workImg1, workImg2, workImg3 } from "../content/index.ts";
const myWorksDatas = [
  {
    workTime: "Consectetur - (2016 - 2017)",
    position: "Graphic design",
    text: "Nostrud tempor cillum sunt excepteur do ut proident deserunt enim consequat exercitatio",
    logo: workImg1,
  },
  {
    workTime: "Bibendum - (2017 - 2020)",
    position: "Photographer",
    logo: workImg2,
    text: "Ad do dolore cillum dolor et ex non dolor qui. Dolor amet tempor pariatur officia pariatur et",
  },
  {
    workTime: "Adipiscing - (2020 - 2022)",
    position: "Photographer’s Assistant",
    text: "Ad do dolore cillum dolor et ex non dolor qui. Dolor amet tempor pariatur officia pariatur et",
    logo: workImg3,
  },
];
</script>

<style lang="scss" scoped></style>
