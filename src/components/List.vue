<script>
import Task from "./Task.vue"
import { store } from "../store";
console.log(store.todos)
export default {
  components: {
    Task
  },
  data() {
    return {
      store
    }
},
props: {
    todos: {
      type: Array,
      required: true,
    }
  }
};
</script>

<template>
    <ul class="todo-list">
     <Task v-for="todo in todos" :todo = "todo" :priorities = "store.priorities" @remove="store.remove(todo)" :key="todo.id"/>
    </ul>
</template>

<style>

li.completed label{
  text-decoration: line-through;
  color: red;
}

ul {
    list-style-type: none;
    padding: 0px;
    height: 200px;
}
</style>