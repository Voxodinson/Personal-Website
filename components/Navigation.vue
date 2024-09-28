<template>
  <div class="w-full flex items-center justify-center z-20 relative">
    <div class="w-[90%] h-[10vh] flex items-center justify-between">
      <h1 class="text-[1.7rem] font-bold text-nowrap fs-1">Vox Odinson</h1>

      <!-- Navigation for large screens -->
      <div class="hidden lg:block">
        <ul class="flex gap-10 *:no-underline">
          <li>
            <NuxtLink to="/" class="hover:text-yellow-400">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/project" class="hover:text-yellow-400"
              >Project</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/work" class="hover:text-yellow-400">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/aboutMe" class="hover:text-yellow-400 text-nowrap"
              >About Me</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:text-yellow-400">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-yellow-400"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Hamburger button for small screens -->
      <button
        class="block lg:hidden w-fit hover:scale-110 transition"
        @click="toggleNav"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#5f6368"
        >
          <path
            d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"
          />
        </svg>
      </button>
    </div>

    <!-- Navigation for small screens with animation -->
    <transition name="dropdown">
      <div
        v-if="isOpen"
        class="block lg:hidden w-full absolute top-[7vh] z-10 transition bg-white"
      >
        <div class="w-full flex items-center justify-center">
          <ul
            class="w-[90%] flex flex-col items-start mt-4 pb-4 *:no-underline"
          >
            <li class="w-full">
              <NuxtLink
                to="/"
                @click="toggleNav"
                class="hover:text-yellow-400 py-1 block w-full px-4 hover:bg-yellow-50 transition rounded-full"
                >Home</NuxtLink
              >
            </li>

            <li class="w-full">
              <NuxtLink
                to="/project"
                @click="toggleNav"
                class="hover:text-yellow-400 py-1 block w-full px-4 hover:bg-yellow-50 transition rounded-full"
                >Project</NuxtLink
              >
            </li>
            <li class="w-full">
              <NuxtLink
                to="/work"
                @click="toggleNav"
                class="hover:text-yellow-400 w-full py-1 block px-4 hover:bg-yellow-50 transition rounded-full"
                >Work</NuxtLink
              >
            </li>
            <li class="w-full">
              <NuxtLink
                to="/aboutMe"
                @click="toggleNav"
                class="hover:text-yellow-400 py-1 block w-full px-4 hover:bg-yellow-50 transition rounded-full"
                >About Me</NuxtLink
              >
            </li>
            <li class="w-full">
              <NuxtLink
                to="/blog"
                @click="toggleNav"
                class="hover:text-yellow-400 py-1 block w-full px-4 hover:bg-yellow-50 transition rounded-full"
                >Blog</NuxtLink
              >
            </li>
            <li class="w-full">
              <NuxtLink
                to="/contact"
                @click="toggleNav"
                class="hover:text-yellow-400 block py-1 w-full px-4 hover:bg-yellow-50 transition rounded-full"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

function toggleNav() {
  isOpen.value = !isOpen.value; // Toggle menu
}
</script>

<style scoped>
/* Keyframes for the dropdown animation */
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

/* Transition for opening and closing the dropdown */
.dropdown-enter-active {
  animation: slideDown 0.5s ease-out forwards;
}
.dropdown-leave-active {
  animation: slideUp 0.5s ease-in forwards;
}

/* Active link styles */
.router-link-active {
  color: #f6a200;
}
</style>
