<template>
  <div class="w-full flex items-center justify-center bg-black">
    <div class="w-[90%] h-fit py-10 grid grid-cols-1 lg:grid-cols-2">
      <div class="w-full flex flex-col gap-10 justify-between">
        <h3 class="text-white fs-1 font-bold">
          Say hello and let's <br />
          work together !
        </h3>
        <div class="">
          <div class="flex gap-8">
            <a
              v-for="(icon, index) in mediaIcons"
              :key="index"
              :href="icon.link"
              target="_blank"
              class="hover:scale-125 transition"
            >
              <img :src="icon.name" alt="Social Media Icon" class="w-[30px]" />
            </a>
          </div>
          <p class="text-white text-[.9rem] mt-2">
            © 2022 Brand, Inc. • Privacy • Terms • Sitemap
          </p>
        </div>
      </div>
      <form class="w-full mt-10 flex flex-col gap-4">
        <div class="w-full relative">
          <label
            for=""
            class="text-white absolute -top-3.5 left-2 bg-black px-2"
            >Email</label
          >
          <input
            type="text"
            class="primary-border w-full bg-black py-3 px-4 text-white outline-none"
            placeholder="Your email here..."
          />
        </div>
        <div class="w-full relative">
          <label
            for=""
            class="text-white absolute -top-3.5 left-2 bg-black px-2"
            >Input your message</label
          >
          <textarea
            type="text"
            class="primary-border w-full bg-black py-3 px-4 h-[100px] text-white outline-none"
            placeholder="Describe your project..."
          />
        </div>
        <button
          class="py-2 w-[150px] rounded-md bg-[#E34D73] text-[.9rem] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const mediaIcons = [
  {
    name: "../icons/images-icon/instagram.png",
    link: "https://www.youtube.com/",
  },
  {
    name: "../icons/images-icon/Dribbble.png",
    link: "https://www.youtube.com/",
  },
  {
    name: "../icons/images-icon/LinkedIn.png",
    link: "https://www.youtube.com/",
  },
  {
    name: "../icons/images-icon/Envelope.png",
    link: "https://www.youtube.com/",
  },
];
</script>

<style lang="scss" scoped></style>
