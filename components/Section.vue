<template>
  <div
    class="w-[90%] flex flex-col-reverse lg:flex-row h-fit lg:h-[90vh] justify-between items-centen"
  >
    <div
      class="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-start justify-center flex-col gap-4"
    >
      <h1 class="fs-1 font-bold">
        Hello! I’m Nelson, a <br />
        photographer
      </h1>

      <p class="p-fs">
        A photographer is a person who captures and creates images using a
        camera. Photography is both a science and an art, requiring technical
        skill and artistic vision. Photographers use their knowledge of light,
        composition, and perspective to create images that convey emotions, tell
        stories, or simply capture moments in time.
      </p>
      <NuxtLink
        to=""
        class="text-[#FF9900] flex items-center justify-center gap-2 group text-[0.9rem] md:text-[20px]"
        >More About Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FF9900"
          class="group-hover:translate-x-2 transition mt-1"
        >
          <path
            d="m320.23-107.69-42.54-42.54L607.46-480 277.69-809.77l42.54-42.54L692.54-480 320.23-107.69Z"
          />
        </svg>
      </NuxtLink>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <div class="relative w-full md:w-[80%] lg:w-fit">
        <img
          src="../assets/img/profile.png"
          alt="profile"
          class="w-full lg:w-[380px]"
        />

        <div class="w-full flex items-center justify-center bg-slate-200">
          <img
            src="../assets/img/circle-text.png"
            alt="text circle"
            class="absolute bottom-40 lg:top-[40%] lg:left-[-96px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
