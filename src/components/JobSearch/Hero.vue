<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 object-contain"
            src="https://img.freepik.com/premium-psd/virus-bug-website-creative-development-3d_66255-2002.jpg?size=626&ext=jpg&ga=GA1.1.1849480107.1709022028&semt=ais"
            alt=""
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
<style></style>
