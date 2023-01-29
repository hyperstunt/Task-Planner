<template>
    <div>
      <button v-on:click="showForm = true" class="open-form-button">Open Form</button>
  
      <div v-if="showForm" class="overlay">
        <div class="form-container">
          <div class="width-form" @submit.prevent="submitForm">
            <form @submit.prevent="createTask">
            <input
              v-model="newTaskTitle"
              type="text"
              placeholder="Enter task title"
            />
            <input
              v-model="newTaskDescription"
              type="text"
              placeholder="Enter task Description"
            />
            <v-btn color="primary" type="submit">Create Task</v-btn>
          </form>
            <button v-on:click="showForm = false" class="close-button">Close</button>
          </div>
        </div>
      </div>
  
      <div class="background-content">
        <!-- Your other content here -->
      </div>
    </div>
  </template>


    <script>
import { ref } from "vue";
  export default {
    name: 'PopUp',
    setup() {
    const items = ref([]);
    const newTaskTitle = ref("");
    const newTaskDescription = ref("");
    const showForm = ref(false)

    const createTask = () => {
      // check if the task title is not empty
      if (newTaskTitle.value !== "") {
        items.value.push({
          id: items.value.length,
          title: newTaskTitle.value,
          description: newTaskDescription.value,
          list: 1,
        });
        newTaskTitle.value = "";
        newTaskDescription.value = "";
      }
    };

    return {
      newTaskDescription,
      newTaskTitle,
      createTask,
      showForm
    };
  },
  };
  </script>
  
  <style>
  .open-form-button {
    background-color: blue;
    color: white;
    padding: 8px;
    border-radius: 4px;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .form-container {
    background-color: lightgray;
    width: 90%;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .width-form {
    width: 100%;
  }
  
  .form-label {
    font-size: 18px;
  }
  
  .form-input {
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
  }
  
  .submit-button {
    background-color: green;
    color: white;
    padding: 8px;
    margin-right: 8px;
    border-radius: 4px;
  }
  
  .close-button {
    background-color: red;
    color: white;
    padding: 8px;
    border-radius: 4px;
  }
  

  </style>
  
