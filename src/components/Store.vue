<template>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">Create New Task</v-card-title>
          <v-form ref="form">
            <v-textarea label="Description" v-model="$store.state.description" required />
            <v-file-input label="Upload a File" v-model="$store.state.file" :show-size="d" required />
            <v-img v-if="file" :src="file" :alt="file.name" width="100" height="100" />
            <v-date-picker label="Estimated Time" v-model="$store.state.date" required />
            <v-select label="Select Board" v-model="board" :items="boards" required />
            <v-combobox label="Tags" v-model="tags" :items="tagItems" multiple chips required />
          </v-form>
          <v-card-actions>
            <v-btn color="primary" @click="submit">Create Task</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>
  
<script>
import store from '../store/index'

export default {
    name: 'Store',
    data() {
        return {
            
           
            board: '',
            boards: ['Pending', 'Processing', 'Done'],
            tags: [],
            tagItems: ['Important', 'Urgent', 'Personal', 'Work']
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // Submit the task
                const task = {
                    title: this.title,
                    description: this.description,
                    file: this.file,
                    date: this.date,
                    board: this.board,
                    tags: this.tags
                }
                store.dispatch('createTask', task)
            }
        }
    }
}
</script>
  