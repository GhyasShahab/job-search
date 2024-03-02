<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/reasult/1"
          class="block mx-auto bg-brand-gray-2 border border-solid border-brand-gray-2 roundedy hover:shadow-gray"
        >
          <div class="pt-5 pb-2 mx-8 border-b border-solid bg-brand-gray-2">
            <h2 class="mb-2 text-2xl">
              Technical Program Manager , Perception,Augumented Reality
            </h2>
            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <span>NAGS</span>
              </div>
              <div>
                <span>Shina Village, Kabul, AFG</span>
              </div>
            </div>
          </div>
          <div class="px-8 py-4">
            <div>
              <h3 class="mt-1 mb-2">Qualifications :</h3>
              <div>
                <ul class="pl-8 list-disc">
                  <li>Bachelor;s degree or equivlent practices experiance</li>
                  <li>5 years of experiance in progerm managment.</li>
                  <li>
                    Experiance analyzing data through querying database (e.g
                    SQL) using laravel and vue in develpment
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-2 text-center">
              <router-link to="/jobs/reasult/3" class="text-brand-blue-1">
                Expand
              </router-link>
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>
<script>
export default {
  name: "JobListings",
};
</script>
