<template>
  <header :class="['w-full', 'text-sm', headerHieghtClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      {{ console.log(headerHieghtClass) }}
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLogeddIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <sub-nav v-if="isLogeddIn" />
    </div>
  </header>
</template>
<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "SGAN Careers",
      url: "www.google.com",
      menuItems: ["Teams", "Locations", "Jobs", "Students", "Developers"],
      isLogeddIn: false,
    };
  },
  computed: {
    headerHieghtClass() {
      return {
        "h-16": !this.isLogeddIn,
        "h-32": this.isLogeddIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLogeddIn = true;
    },
  },
};
</script>
