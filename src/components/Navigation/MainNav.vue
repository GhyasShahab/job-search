<template>
  <header :class="['w-full', 'text-sm', headerHieghtClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      {{ console.log(headerHieghtClass) }}
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center h-full text-xl"
          >NAGS Careers</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
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
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      url: "www.google.com",
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Locations", url: "/" },
        { text: "Students", url: "/" },
        { text: "About", url: "/" },
        { text: "Jobs", url: "/jobs/reasult" },
      ],
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
