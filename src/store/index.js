import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('addTask', task)
    }
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter(task => task.board === 'Pending')
    },
    processingTasks() {
      return this.tasks.filter(task => task.board === 'Processing')
    },
    doneTasks() {
      return this.tasks.filter(task => task.board === 'Done')
    }
  }
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
})
