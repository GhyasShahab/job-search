<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-brand-gray-2 border border-solid border-brand-gray-2 roundedy hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid bg-brand-gray-2">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul
              v-for="location in job.loaction"
              :key="location"
              class="inline-block mr-5"
            >
              <li>{{ location }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications :</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobPageLink" class="text-brand-blue-1">
            Expand
          </router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>
