<template>
  <div class="w-[90%] flex flex-col gap-4">
    <h3 class="fs-1 font-bold">My Skills</h3>
    <div
      class="w-full grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-10 py-2"
    >
      <div
        v-for="(skill, idx) in skillsData"
        :key="idx"
        class="py-4 w-full border-b-[2px] border-gray-400"
      >
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSkillsDataFunc } from "~/services/fetchDataService";
const config = useRuntimeConfig();
const skillsData = ref([]);

async function loadSkillDatas() {
  try {
    const data = await getSkillsDataFunc(config);
    skillsData.value = data;
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

onMounted(() => {
  loadSkillDatas();
});
</script>

<style lang="scss" scoped></style>
