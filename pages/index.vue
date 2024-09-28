<template>
  <div class="w-full h-fit items-center justify-center flex flex-col">
    <Section />
    <div class="w-[90%] flex flex-col gap-4 py-6">
      <ProjectCard
        v-for="(card, idx) in ProjectCardDatas.slice(0, 2)"
        :key="idx"
        :sm_title="card.sm_title"
        :title="card.title"
        :text="card.text"
        :images="card.images"
        :link="card.link"
      />

      <div class="w-full flex items-center justify-center mt-4">
        <NuxtLink to="/project" class="primary-button py-2"
          >Browse all projects</NuxtLink
        >
      </div>
    </div>
    <Skills />
    <div class="w-[90%] flex flex-col gap-4 py-6">
      <TestimonialCard
        v-for="card in TestimonailDatas.slice(0, 2)"
        :name="card.name"
        :text="card.text"
        :sm_title="card.sm_title"
        :img="card.img"
      />
    </div>

    <div class="w-[90%]">
      <h3 class="fs-1 font-bold">My Skills</h3>
      <div
        class="w-full grid lg:grid-cols-3 gap-10 mt-4 py-4 grid-cols-1 md:grid-cols-2"
      >
        <BlogCard
          v-for="(card, idx) in BlogCardDatas.slice(0, 3)"
          :key="idx"
          :img="card.img"
          :text="card.text"
          :date="card.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getCardDataFunc,
  getBlogCardDataFunc,
  getTestimonialsDataFunc,
} from "~/services/fetchDataService";
import ProjectCard from "~/components/card/ProjectCard .vue";
import Section from "~/components/Section.vue";
import Skills from "~/components/Skills.vue";
import BlogCard from "~/components/card/BlogCard.vue";
import TestimonialCard from "~/components/card/TestimonialCard.vue";

const config = useRuntimeConfig();
const ProjectCardDatas = ref([]);
const BlogCardDatas = ref([]);
const TestimonailDatas = ref([]);
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
  loadData(getBlogCardDataFunc, BlogCardDatas);
  loadData(getTestimonialsDataFunc, TestimonailDatas);
});
</script>

<style lang="scss" scoped></style>
