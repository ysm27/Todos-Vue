<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{countTodo}}</strong> todo
    </span>
    <ul class="filters">
      <li><router-link to="/all" :class="{selected: filter === 'all'}">All</router-link></li>
      <li><router-link to="/active" :class="{selected: filter === 'active'}">Active</router-link></li>
      <li><router-link to="/completed" :class="{selected: filter === 'completed'}">Completed</router-link></li>
    </ul>
    <button class="clear-completed" @click="removeAllCompletedTodo" v-show="hasCompleted">Clear completed</button>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  created() {
    this.fetchFilter();
  },
  watch: {
    '$route': 'fetchFilter'
  },
  methods: {
    removeTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index,1)
    },
    removeAllCompletedTodo() {
      return this.$store.commit('removeAllCompletedTodo');
    },
    fetchFilter() {
      let filter = this.$route.params.filter;
      this.$store.commit('changeFilter', filter);
    }
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    hasCompleted() {
      return this.$store.getters.hasCompleted;
    },
    countTodo() {
      return this.$store.getters.countTodo;
    }
  }
}
</script>