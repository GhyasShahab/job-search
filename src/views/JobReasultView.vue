<template>
  <JobFiltersSidebar />
  <job-listing />
</template>
<script>
import JobFiltersSidebar from "@/components/JobReasults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListing from "@/components/JobReasults/JobListing.vue";
export default {
  name: "JobReasultView",
  components: {
    JobFiltersSidebar,
    JobListing,
  },
};
</script>
