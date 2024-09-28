<template>
  <div
    class="w-full flex h-fit flex-col md:flex-row md:h-[367px] bg-[#EDFFD8] rounded-lg"
  >
    <div class="w-full md:w-[50%] flex items-center justify-center">
      <img :src="img" alt="people image" class="w-[280px]" />
    </div>
    <div
      class="w-full p-4 md:p-0 md:w-[50%] h-fit md:h-full flex items-center md:items-start flex-col gap-4 md:justify-center"
    >
      <span class="text-[#FF003D]">{{ sm_title }}</span>
      <p class="text-center p-fs md:text-start">{{ text }}</p>
      <span>{{ name }}</span>
      <NuxtLink
        class="flex w-fit gap-4 items-center justify-center group text-black primary-button py-1"
        >View project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#5f6368"
          class="mt-1 group-hover:-translate-x-3 transition fill-current group-hover:text-white"
        >
          <path
            d="M372.31-267.69 160-480l212.31-212.31L400.62-664l-164 164H800v40H236.62l164 164-28.31 28.31Z"
          />
        </svg>
      </NuxtLink>
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
  name: {
    type: String,
    required: true,
    default: "",
  },
  text: {
    type: String,
    required: true,
    default: "",
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
