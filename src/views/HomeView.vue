<template>
  <section>
    <!-- <PopUp></PopUp> -->
    <BoardComponent></BoardComponent>
    <!--<Board></Board> -->
    <!-- <Store></Store> -->
  </section>
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue";
import BoardComponent from "../components/BordComponent.vue";
// import Button from '../components/Button.vue'
// import Board from '../components/Board.vue'
import PopUp from "../components/PopUp.vue";
export default {
  name: "HomeView",

  data() {
    return {
      names: new Array(5).fill(1),
    };
  },
  components: {
    ProgressBar,
    BoardComponent,
    // Button
    // Board,
    PopUp,
  },
};
</script>

<style scoped></style>
