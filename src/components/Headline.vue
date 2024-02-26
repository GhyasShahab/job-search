<template>
  <section>
    <h1 class="font-bold tracking-tighter text-7xl mb-14">
      <span :class="actionClass">{{ action }} </span>
      <br />
      for every one
    </h1>
    <h2 class="text-3xl font-light">Find your next job at NAGS Corp</h2>
  </section>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return {
        // build: this.action === "Build",
        // create: this.action === "Create",
        // design: this.action === "Design",
        // code: this.action === "Code",
        [this.action.toLocaleLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
