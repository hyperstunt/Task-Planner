<template>
  <div class="progress">
    <h3>Progress</h3>
    <div class="progress-bar">
      <div
        class="progress-bar-fill"
        :style="{ width: progressValue + '%', backgroundColor: colorBar }"
      ></div>
      <p>{{ progressValue }}</p>
      <!-- // 0 - 100 -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ProgressBar",
  props: {
    progress: {
      default: null,
    },
  },
  setup(props) {
    const store = useStore();
    const progressValue = computed(() => {
      if (props.progress === null) return store.getters.progressValue;
      return props.progress;
    });

    const colorBar = computed(() => {
      return progressValue > 0 && progressValue <= 50 ? "yellow" : "green";
    });
    console.log('colorBar',colorBar)
    console.log('progressValues',progressValue)
    console.log('progressValues>0',progressValue._value>0)

    return {
      colorBar,
      progressValue,
    };
  },
};
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
