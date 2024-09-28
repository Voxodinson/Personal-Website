<template>
  <div
    class="w-full grid xl:grid-cols-2 grid-cols-1 flex-col-reverse gap-4 p-6 rounded-md shadow-md odd:bg-[#DFEAD2] even:bg-[#EEDFB8] odd:text-[#81B72F] even:text-[#E34D73]"
  >
    <div class="w-full flex flex-col gap-4 justify-center">
      <span class="">{{ sm_title }}</span>
      <div class="">
        <h3 class="fs-2 font-bold text-black text-[.9rem] md:text-[20px]">
          {{ title }}
        </h3>
        <p class="text-black p-fs">{{ text }}</p>
      </div>
      <NuxtLink
        :to="link"
        class="flex w-fit gap-4 items-center justify-center group text-black hover:text-[#E34D73] transition"
        >View project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#5f6368"
          class="mt-1 group-hover:-translate-x-3 transition fill-current group-hover:text-[#E34D73]"
        >
          <path
            d="M372.31-267.69 160-480l212.31-212.31L400.62-664l-164 164H800v40H236.62l164 164-28.31 28.31Z"
          />
        </svg>
      </NuxtLink>
    </div>
    <div
      class="w-full flex flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <img
        v-for="(imageObj, index) in images"
        :key="index"
        :src="imageObj.img"
        alt="Project Image"
        class="lg:odd:mt-6 h-[300px] lg:h-[340px] rounded-md"
        :class="{
          'w-full sm:w-[80%] lg:w-1/3': images.length === 3,
          'w-full md:w-1/2': images.length === 2,
          'w-full': images.length < 2,
        }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  sm_title: {
    type: String,
    required: true,
    default: "",
  },
  title: {
    type: String,
    required: true,
    default: "",
  },
  text: {
    type: String,
    required: true,
    default: "",
  },
  images: Array,

  link: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
