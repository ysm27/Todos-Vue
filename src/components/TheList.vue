<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCompleted">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="['todo', {completed: todo.completed}, {editing: todo === editTodo}]" v-for="(todo, index) in showTodos" :key="index">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed">
          <label @dblclick="handleEditTodo(todo)">{{todo.title}}</label>
          <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <input class="edit" type="text" v-model="todo.title" v-todo-focus="todo === editTodo" @keyup.enter="handleEditDone(todo)" @keyup.esc="handleEditCancel(todo)">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TheList',
  data() {
    return {
      editTodo: null,
      beforeTodo: null,
    }
  },
  methods: {
    handleEditTodo(todo) {
      this.editTodo = todo;
      this.beforeTodo = todo.title;
    },
    handleEditDone(todo) {
      if(todo.title.trim()) {
        this.editTodo = null;
        this.beforeTodo = null;
      }
    },
    handleEditCancel(todo) {
      todo.title = this.beforeTodo;
      this.editTodo = null;
      this.beforeTodo = null;
    },
    removeTodo(todo) {
      return this.$store.commit('removeTodo', todo);
    }
  },
  directives: {
    'todo-focus': function(el, binding) {
      if(binding.value){
        el.focus();
      }
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    showTodos() {
      return this.$store.getters.showTodos;
    },
    allCompleted: {
      get: function() {
        return this.$store.getters.allCompleted;
      },
      set: function(value) {
        return this.$store.commit('setAllCompleted', value)
      }
    }
  }
}
</script>