<template>
  <section>
    <BoardComponent></BoardComponent>
  </section>
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue";
import BoardComponent from "../components/BordComponent.vue";


export default {
  name: "HomeView",

  data() {
    return {
    };
  },
  components: {
    ProgressBar,
    BoardComponent,
  },
};
</script>

<style scoped></style>
