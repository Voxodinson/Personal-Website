<template>
  <div
    class="w-full flex items-center flex-col lg:flex-row justify-between lg:py-4"
  >
    <div class="w-full lg:w-1/2">
      <h3 class="fs-2 font-bold">{{ head }}</h3>
      <p class="p-fs">
        {{ text }}
      </p>
    </div>
    <div class="mt-8 lg:mt-0">
      <img src="../assets/img/circle-text.png" class="w-[200px]" alt="" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  head: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
