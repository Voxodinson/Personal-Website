<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="w-[90%]">
      <SecondarySection
        head="My Project"
        text=" A project is a planned undertaking with a defined beginning and end,
        conducted by people to meet specific goals and objectives within certain
        constraints like time, budget, and quality. It is a temporary endeavor
        designed to produce a unique product, service, or result."
      />
      <div class="w-full flex flex-col gap-4 py-6">
        <ProjectCard
          v-for="(card, idx) in ProjectCardDatas"
          :key="idx"
          :sm_title="card.sm_title"
          :title="card.title"
          :text="card.text"
          :images="card.images"
          :link="card.link"
        />

        <div class="w-full flex items-center justify-center mt-4">
          <NuxtLink to="/project" class="primary-button py-2"
            >View more</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCardDataFunc } from "~/services/fetchDataService";
import ProjectCard from "~/components/card/ProjectCard .vue";
import SecondarySection from "~/components/SecondarySection.vue";
const ProjectCardDatas = ref([]);
const config = useRuntimeConfig();
async function loadData(fetchFunc, dataRef) {
  try {
    const data = await fetchFunc(config);
    dataRef.value = data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
onMounted(() => {
  loadData(getCardDataFunc, ProjectCardDatas);
});
</script>

<style lang="scss" scoped></style>
