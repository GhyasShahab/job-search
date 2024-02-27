<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-800">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-800">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-800">
          5 column
        </div>
        <div class="col-start-12 col-span-1 border border-blue-800">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import Headline from "@/components/Headline.vue";
import JobSearchForm from "@/components/JobSearchForm.vue";
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
