<template>
  <div class="progress">
    <h3>Progress</h3>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: computedProgress }"> </div>
      <p> {{ computedProgress }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  data() {
    return {
      tasks: 4,
      completed: 1,
    }
  },
  computed: {
    computedProgress() {
      return `${(this.completed / this.tasks) * 100}%`
    }
  }
}
</script>

<style scoped>
.progress {
  padding: 30px 0px;
}

.progress h3 {
  padding: 0px 0px 10px 0px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #ddd;
  position: relative;
  border-radius: 15px;
}

.progress-bar p {
  text-align: center;
  position: absolute;
  width: 100%;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4caf50;
  position: absolute;
  border-radius: 15px;
}
</style>

