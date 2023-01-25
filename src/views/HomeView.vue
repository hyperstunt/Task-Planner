<template>
  <section>
      <ProgressBar></ProgressBar>
      <Board></Board>
      <Store></Store>
  </section>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue'
import Board from '../components/Board.vue'
import Store from '../components/Store.vue'
export default {
  name: 'HomeView',
  components: {
    ProgressBar,
    Board,
    Store,
  }
}
</script>

<style scoped>


</style>
