<template>
    <section>
      <form @submit.prevent="createTask">
        <input v-model="newTaskTitle" type="text" placeholder="Enter task title">
        <button type="submit">Create Task</button>
      </form>
      <v-row>
        ...
      </v-row>
    </section>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "Button",
    setup() {
      const items = ref([]);
      const newTaskTitle = ref('');
  
      const createTask = () => {
        // check if the task title is not empty
        if(newTaskTitle.value !== '') {
          items.value.push({
            id: items.value.length,
            title: newTaskTitle.value,
            list: 1
          });
          newTaskTitle.value = '';
        }
      };
  
      return {
        newTaskTitle,
        createTask,
      };
    },
  };
  </script>
  