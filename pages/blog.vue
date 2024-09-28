<template>
  <div class="w-full flex items-center justify-center flex-col">
    <div class="w-[90%] py-6">
      <SecondarySection
        head="My blogs"
        text="A blog, short for weblog, is a regularly updated website or online platform 
        where individuals or groups, known as bloggers, share their thoughts, opinions, 
        expertise, experiences, or information on various topics. Blogs can cover personal interests,
        hobbies, professional insights, news commentary,
        travel experiences, product reviews, and more. They are 
        often interactive, allowing readers to leave comments and engage with the content.
        Blogs have evolved from simple online diaries to powerful tools in digital marketing, 
        offering a platform for creativity, knowledge sharing, and building online communities."
      />
    </div>

    <div
      class="w-[90%] grid grid-cols-1 md:grid-cols-3 bg-gray-200 rounded-lg overflow-hidden my-6"
    >
      <div class="w-full col-span-2">
        <img
          src="../assets/img/blog-img.png"
          alt="image"
          class="w-full h-full"
        />
      </div>
      <div class="w-full p-2 md:p-6">
        <h3 class="fs-1 md:fs-2 font-bold">
          Minim anim pariatur magna duis sit et dolor inci
        </h3>
        <p class="p-fs">Oct 16, 2022</p>
      </div>
    </div>
    <div class="w-[90%]">
      <div
        class="w-full grid lg:grid-cols-3 gap-4 mt-4 py-4 grid-cols-1 md:grid-cols-2"
      >
        <BlogCard
          v-for="(card, idx) in BlogCardDatas"
          :key="idx"
          :img="card.img"
          :text="card.text"
          :date="card.date"
        />
      </div>
      <div class="py-4 flex items-center justify-center">
        <NuxtLink
          class="flex w-fit gap-4 items-center justify-center group primary-button text-black hover:text-white transition"
          >Next
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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SecondarySection from "~/components/SecondarySection.vue";
import { getBlogCardDataFunc } from "~/services/fetchDataService";
import BlogCard from "~/components/card/BlogCard.vue";
const config = useRuntimeConfig();
const BlogCardDatas = ref([]);
async function loadData(fetchFunc, dataRef) {
  try {
    const data = await fetchFunc(config);
    dataRef.value = data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
onMounted(() => {
  loadData(getBlogCardDataFunc, BlogCardDatas);
});
</script>

<style lang="scss" scoped></style>
