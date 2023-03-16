
<script>
import List from "./List.vue"
import Form from "./Form.vue"
let todoId = 0;

export default {
  components: {
    List, Form
  },
  data() {
    return {
      clicked: 0,
      newTodo: "",
      todos: [
        {
          id: todoId++,
          task: "Try this todo",
          completed: false,
        },
      ],
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({
        id: todoId++,
        task: newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeToDo(todo) {
      console.log(todo);
      this.todos = this.todos.filter((t) => {
        return t !== todo;
      });
    },
    reset() {
      this.todos = [];
    },
  }
}
</script>

<template>
  <div id="main">
    <h1>Todo</h1>
    <Form @add="addTodo" :newTodo="this.newTodo"></Form>
    <div> Completed : {{ this.todos.filter(e => e.completed).length }} / {{ this.todos.length }} </div>
    <List :todos="this.todos" @remove="removeToDo" />
    <button @click="reset()">Clear All</button>
  </div>
</template>

<style>
h1 {
  text-align: center;
}

#main {
  display: flex;
  flex-direction: column;
}

input {
  text-align: center;
}
</style>
