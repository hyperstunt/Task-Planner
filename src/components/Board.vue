<template>
  <section>
    <v-row>
      <v-col cols="4" sm="12" md="4">
        <v-card>
          <v-card-title class="headline">Pending</v-card-title>
            <v-card-text v-for="task in pendingTasks" :key="task.id">
              {{ task.title }}
              <br />
              {{ task.description }}
              <br />
              {{ task.file }}
              <br />
              {{ task.date }}

            </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card>
          <v-card-title class="headline">Processing</v-card-title>
            <v-card-text v-for="task in processingTasks" :key="task.id">
              <div class="task-style">
                {{ task.title }}
              <br />
              {{ task.description }}
              <br />
              {{ task.file }}
              <br />
              {{ task.date }}

              </div>
            </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card>
          <v-card-title class="headline">Done</v-card-title>
            <v-card-text v-for="task in doneTasks" :key="task.id">
              {{ task.title }}
              <br />
              {{ task.description }}
              <br />
              {{ task.file }}
              <br />
              {{ task.date }}

            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Board',
    components: {
    },
    computed: {
        ...mapState(['tasks']),
        pendingTasks() {
            return this.tasks.filter(task => task.board === 'Pending')
        },
        processingTasks() {
            return this.tasks.filter(task => task.board === 'Processing')
        },
        doneTasks() {
            return this.tasks.filter(task => task.board === 'Done')
        }
    },
    methods: {
        updateTaskStatus(event) {
            //dispatch an action to update task board status in the store
            this.$store.dispatch('updateTaskStatus', { task: event.item, board: event.to.dataset.board })
        }
    }
}
</script>

<style scoped>
.v-card-text{
    margin: 5px;
    border: 1px solid #ccc!important;
   
}
</style>
