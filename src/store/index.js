import { createStore } from "vuex";

export default createStore({
  state: {
    progress: 0,
    name: "",
    isSkipProgress: false,
  },
  getters: {
    progressValue: (state) => {
      return state.progress;
    },
  },
  mutations: {
    setProgress: (state, payload) => {
      state.progress = payload;
    },
  },
  actions: {},
  modules: {},
});

// state: {
//   title: '',
//   description: '',
//   file: null,
//   date: null,
//   board: '',
//   tags: [],
//   tasks: [],
//   notasks: 4,
//   completed: 3,
// },
// mutations: {
//   submit(state) {
//     if (this.$refs.form.validate()) {
//         // Submit the task
//         const task = {
//             title: state.title,
//             description: state.description,
//             file: state.file,
//             date: state.date,
//             board: state.board,
//             tags: state.tags
//         }
//         store.dispatch('createTask', task)
//     }
// },
//   addTask(state, task) {
//     state.tasks.push(task);
//   },
//   pendingTasks(state) {
//     return state.tasks.filter((task) => task.board === "Pending");
//   },
//   processingTasks(state) {
//     return state.tasks.filter((task) => task.board === "Processing");
//   },
//   doneTasks(state) {
//     return state.tasks.filter((task) => task.board === "Done");
//   },
// },
// actions: {
//   createTask({ commit }, task) {
//     commit("addTask", task);
//   },
// },

// state: {
//   tasks: {
//     'pending': [],
//     'processing': [],
//     'done': []
//   }
// },
// getters: {
// },
// mutations: {
//   addTask(state, task) {
//     state.tasks.pending.push(task)
//   }
// },
// actions: {
//   createTask({ commit }, task) {
//     commit('addTask', task)
//   }
// },
// modules: {
// }
