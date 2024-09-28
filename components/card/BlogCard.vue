<template>
  <div class="overflow-hidden rounded-lg w-full shadow-md">
    <img
      :src="img"
      alt="Skill image"
      class="w-full h-64 object-cover mx-auto"
    />
    <div class="p-4">
      <p>{{ text }}</p>
      <p class="text-sm text-gray-500">{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
