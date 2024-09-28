<template>
  <div class="w-full h-fit shadow-md rounded-lg overflow-hidden">
    <div
      class="h-[300px] w-full flex justify-center items-center overflow-hidden"
    >
      <img :src="img" class="object-fill" alt="" />
    </div>

    <div class="h-[50px] flex items-center justify-start px-4">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
