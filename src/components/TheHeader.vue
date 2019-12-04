<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="newTodo">
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo: function() {
      let value = this.newTodo;
      if(!value) {
        return
      }
      value = value.trim();
      this.$store.commit('addTodo', {
        title: this.newTodo,
        completed: false
      })
      this.newTodo = '';
    }
  }
}
</script>