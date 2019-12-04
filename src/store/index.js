import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [{
      title: '任务一',
      completed: false
    },{
      title: '任务二',
      completed: true
    }],
    filter: 'all'
  },
  getters: {
    countTodo(state) {
      return state.todos.length;
    },
    allCompleted(state) {
      return state.todos.every(data => data.completed);
    },
    hasCompleted(state) {
      return state.todos.some(data => data.completed)
    },
    showTodos(state) {
      let filter = state.filter;
      return state.todos.filter(data => {
        if(filter === 'all') {
          return true
        }else if(filter === 'active') {
          return !data.completed
        }else if(filter === 'completed') {
          return data.completed
        }
      })
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    setAllCompleted(state, status) {
      return state.todos.forEach(data => data.completed = status)
    },
    removeAllCompletedTodo(state) {
      state.todos = state.todos.filter(data => !data.completed)
    },
    changeFilter(state, filter) {
      state.filter = filter;
    },
    removeTodo(state, todo) {
      let index = state.todos.indexOf(todo);
      state.todos.splice(index, 1)
    }
  }
})

export default store;
