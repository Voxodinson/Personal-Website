<template>
  <div class="w-full flex items-center flex-col justify-center">
    <div
      class="w-[90%] flex flex-col-reverse lg:flex-row h-fit lg:h-[85vh] justify-between items-centen"
    >
      <div
        class="w-full lg:w-1/2 mt-6 lg:mt-0 flex items-start justify-center flex-col"
      >
        <h3 class="fs-1 font-bold">
          Say hello and let's work <br />
          together!
        </h3>
        <form class="w-full mt-10 flex flex-col gap-4 shadow-md p-4 rounded-lg">
          <div class="w-full relative">
            <label for="" class="absolute -top-3.5 left-2 bg-white px-2"
              >Email</label
            >
            <input
              type="text"
              class="primary-border w-full py-3 px-4 outline-none"
              placeholder="Your email here..."
            />
          </div>
          <div class="w-full relative">
            <label for="" class="absolute bg-white -top-3.5 left-2 px-2"
              >Input your message</label
            >
            <textarea
              type="text"
              class="primary-border w-full py-3 px-4 h-[100px] outline-none"
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
      <div class="w-full h-full lg:w-1/2 flex justify-center lg:justify-end">
        <div class="relative w-full md:w-[80%] lg:w-fit">
          <div class="rounded-t-full overflow-hidden h-full flex justify-end">
            <img
              src="../assets/img/3e28c775-2ce3-4197-9a43-d676f2792898 1.png"
              alt="profile"
              class="w-full lg:w-[380px]"
            />
          </div>

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
    <div
      class="bg-black w-full flex items-center justify-center flex-col py-10 gap-4"
    >
      <div
        class="w-[90%] flex flex-col md:items-center justify-center md:flex-row"
      >
        <ul
          class="grid grid-cols-2 gap-10 *:text-white *:flex *:items-center *:gap-2 md:pr-16"
        >
          <li>
            <img src="../public/icons/images-icon/instagram.png" alt="" /><span
              >Instagram</span
            >
          </li>
          <li>
            <img src="../public/icons/images-icon/LinkedIn.png" alt="" /><span
              class=""
              >Linkedin
            </span>
          </li>
          <li>
            <img src="../public/icons/images-icon/Dribbble.png" alt="" /><span
              >Dribbble</span
            >
          </li>
          <li>
            <img src="../public/icons/images-icon/Envelope.png" alt="" /><span
              >My email</span
            >
          </li>
        </ul>
        <div
          class="*:text-white w-[90%] md:w-fit md:pl-16 md:border-l-[1px] border-gray-200"
        >
          <div class="mt-4">
            <span class="p-fs">Email</span>
            <h3 class="fs-2">yourmail@email.com</h3>
          </div>
          <div class="mt-4">
            <span class="p-fs">Skype</span>
            <h3 class="fs-2">live:yourname.com</h3>
          </div>
        </div>
      </div>
      <div class="w-[90%] flex items-center md:justify-center">
        <p class="text-white text-center p-fs">
          •© 2022 Brand, Inc.PrivacyTermsSitemap••
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
