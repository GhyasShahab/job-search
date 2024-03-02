<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <job-listing />
  </div>
</template>
<script>
import JobFiltersSidebar from "@/components/JobReasults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListing from "@/components/JobReasults/JobListings.vue";
export default {
  name: "JobReasultView",
  components: {
    JobFiltersSidebar,
    JobListing,
  },
};
</script>
