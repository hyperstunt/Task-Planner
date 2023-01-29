<template>
  <div class="progress">
    <progress-bar></progress-bar>
  </div>
  <div>
    <v-text-field v-model="search" placeholder="Search tasks"></v-text-field>
    <v-btn class="submit-button" color="primary" @click="onSearch"
      >Search</v-btn
    >
    <button v-on:click="showForm = true" class="open-form-button">
      Create Task
    </button>

    <div v-if="showForm" class="overlay">
      <div class="form-container">
        <div class="width-form" @submit.prevent="submitForm">
          <form @submit.prevent="createTask">
            <v-text-field
              v-model="newTaskTitle"
              type="text"
              placeholder="Enter task title"
              required
            />
            <v-text-field
              v-model="newTaskDescription"
              type="text"
              placeholder="Enter task Description"
              required
            />
            <v-select
              v-model="newTaskList"
              :items="location"
              label="Status"
              required
            />
            <v-combobox
              v-model="priortyList"
              :items="priority"
              label="I use chips"
              multiple
              chips
            ></v-combobox>
            <v-menu>
                <v-text-field :value="pickers" slot="activator" label="Estiamted Date" prepend-icon="date-range"></v-text-field>
                <v-date-picker v-model="pickers"></v-date-picker>
            </v-menu>
            <v-file-input label="Upload a File" v-model="file" :show-size="d" />
            <v-img
              v-if="file"
              :src="file"
              :alt="file.name"
              width="100"
              height="100"
            />
        </form>
            <v-btn
              class="submit-button"
              color="primary"
              type="submit"
              v-on:click.prevent="
                createTask();
                showForm = false;
              "
              >Create Task</v-btn
            >
          
          <button
            color="primary"
            v-on:click="showForm = false"
            class="close-button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <namesection>
    <v-row style="margin-inline: 3%">
      <v-col cols="4" sm="12" md="4">
        <v-card style="background-color: indianred">
          <v-card-title class="headline">Pending</v-card-title>
          <div
            class="drop-zone"
            @drop="onDrop($event, 1)"
            @dragenter.prevent
            @dragover.prevent
          >
            <div
              v-for="item in getlist(1)"
              :key="item.id"
              :class="item.isSearched ? 'drag-el-search' : 'drag-el'"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              <button style="float: right" v-on:click="deleteTask(item)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <button
                style="float: right; margin-right: 5px"
                v-if="!item.editing"
                v-on:click="item.editing = true"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                style="float: right; margin-right: 5px"
                v-if="item.editing"
                v-on:click="updateTask(item)"
                @:click="item.editing = false"
              >
                <i class="fa-solid fa-bookmark"></i>
              </button>
              <br />
              <strong>Task Title</strong> <br />
              <span v-if="!item.editing">{{ item.title }}</span>
              <v-text-field
                v-model="item.title"
                v-if="item.editing"
                type="text"
                placeholder="Enter task title"
                required
              />
              <br /><br />
              <strong>Task Description</strong> <br />
              <span v-if="!item.editing">{{ item.description }}</span>
              <v-text-field
                v-model="item.description"
                v-if="item.editing"
                type="text"
                placeholder="Enter task Description"
                required
              />
              <br /><br />
              {{ item.priortyList }}
              <span v-if="!item.priortyList">{{ item.priority }}</span>
              <v-text-field
                v-model="item.priortyList"
                v-if="item.editing"
                type="text"
                placeholder="Enter task Description"
                required
              />
              {{ item.file.name }}
            </div>
          </div>
          <!-- <v-card-text>
            </v-card-text> -->
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card style="background-color: lightgoldenrodyellow">
          <v-card-title class="headline">Processing</v-card-title>
          <div
            class="drop-zone"
            @drop="onDrop($event, 2)"
            @dragenter.prevent
            @dragover.prevent
          >
            <div
              v-for="item in getlist(2)"
              :key="item.id"
              class="drag-el"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              <button style="float: right" v-on:click="deleteTask(item)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <button
                style="float: right; margin-right: 5px"
                v-if="!item.editing"
                v-on:click="item.editing = true"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                style="float: right; margin-right: 5px"
                v-if="item.editing"
                v-on:click="updateTask(item)"
                @:click="item.editing = false"
              >
                <i class="fa-solid fa-bookmark"></i>
              </button>
              <br />
              <strong>Task Title</strong> <br />
              <span v-if="!item.editing">{{ item.title }}</span>
              <v-text-field
                v-model="item.title"
                v-if="item.editing"
                type="text"
                placeholder="Enter task title"
                required
              />
              <br /><br />
              <strong>Task Description</strong> <br />
              <span v-if="!item.editing">{{ item.description }}</span>
              <v-text-field
                v-model="item.description"
                v-if="item.editing"
                type="text"
                placeholder="Enter task Description"
                required
              />
              <br /><br />
              {{ item.file.name }}
            </div>
          </div>
          <!-- <v-card-text>
            </v-card-text> -->
        </v-card>
      </v-col>
      <v-col cols="4" sm="12" md="4">
        <v-card style="background-color: seagreen">
          <v-card-title class="headline">Done</v-card-title>
          <div
            class="drop-zone"
            @drop="onDrop($event, 3)"
            @dragenter.prevent
            @dragover.prevent
          >
            <div
              v-for="item in getlist(3)"
              :key="item.id"
              class="drag-el"
              draggable="true"
              @dragstart="startDrag($event, item)"
            >
              <button style="float: right" v-on:click="deleteTask(item)">
                <i class="fa-solid fa-minus"></i></button
              ><br />
              <strong>Task Title</strong> <br />
              {{ item.title }} <br /><br />
              <strong>Task Description</strong> <br />
              {{ item.description }}<br /><br />
            </div>
          </div>
          <!-- <v-card-text>
            </v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
  </namesection>
</template>

<script>
import { ref, computed } from "vue";
import ProgressBar from "./ProgressBar.vue";
import { useStore } from "vuex";
export default {
  name: "BoardComponent",
  components: {
    "progress-bar": ProgressBar,
  },
  setup() {
    const items = ref([]);
    const newTaskTitle = ref("");
    const newTaskDescription = ref("");
    const newTaskList = ref("");
    const file = ref(null);
    const showForm = ref(false);
    const location = ref(["1", "2", "3"]);
    const priortyList= ref([]);
    const priority = ref(["High Priority", "Medium Priority", "low Priority"])
    const pickers = ref(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    );
    const search = ref("");
    const storeState = useStore();

    const createTask = () => {
      console.log("new task list", file);
      console.log("piorirty", priortyList);
      // check if the task title is not empty
      if (newTaskTitle.value !== "") {
        items.value.push({
          id: items.value.length,
          title: newTaskTitle.value,
          description: newTaskDescription.value,
          list: newTaskList.value,
          priortyList: priortyList._rawValue[0],
          file: file && file._rawValue ? file._rawValue[0] : { name: "" },
        });
        newTaskTitle.value = "";
        newTaskDescription.value = "";
        newTaskList.value = "";
      }
      if (items.value.length > 0 && getlist(3).length > 0)
        storeState.commit(
          "setProgress",
          (getlist(3).length / items.value.length) * 100
        );
      else storeState.commit("setProgress", 0);
    };

    const getlist = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;

      if (items.value.length > 0 && getlist(3).length > 0)
        storeState.commit(
          "setProgress",
          (getlist(3).length / items.value.length) * 100
        );
      else storeState.commit("setProgress", 0);
    };

    const deleteTask = (item) => {
      const index = items.value.indexOf(item);
      items.value.splice(index, 1);
    };

    const onSearch = () => {
      let filteredList = items.value.filter((item) => {
        return item.title == search._value || item.description == search._value;
      });
      console.log("filteredList", filteredList);
      filteredList = filteredList.map((item) => {
        item.isSearched = true;
        return item;
      });
      console.log("isSearched", filteredList);
      return filteredList;
    };
    // const progress = computed(() => {
    //   var number = 0;
    //   if (items.value.length > 0 && getlist(3).length > 0)
    //     number = (getlist(3).length / items.value.length) * 100;

    //   storeState.commit("setProgress", number);
    //   return number;
    // });

    return {
      newTaskDescription,
      newTaskTitle,
      newTaskList,
      file,
      createTask,
      deleteTask,
      getlist,
      startDrag,
      onDrop,
      showForm,
      items,
      pickers,
      priortyList,
      priority,
      onSearch,
      search,
      //   progress,
      location,
    };
  },
};
</script>

<style scoped>
.progress {
  padding: 30px 0px;
  margin-inline: 3%;
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
.open-form-button {
  margin-left: 4%;
  margin-bottom: 20px;
  background-color: #eee;
  font-weight: 700;
  color: black;
}
.submit-button {
  margin-bottom: 10px;
  background-color: #eee !important;
  color: black !important;
}
strong {
  color: black;
}
.drop-zone {
  margin: 12px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 150px;
}
.drag-el {
  background-color: slategrey;
  box-shadow: 0px 0px 25px white;
  border-radius: 20px;
  color: #fff;
  padding: 5px;
  margin-bottom: 10px;
}
.drag-el-search {
  background-color: #4caf50;
  box-shadow: 0px 0px 25px white;
  border-radius: 20px;
  color: #fff;
  padding: 5px;
  margin-bottom: 10px;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
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
  width: 65%;
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

.close-button {
  background-color: red;
  color: white;
  padding: 8px;
  border-radius: 4px;
}
</style>
