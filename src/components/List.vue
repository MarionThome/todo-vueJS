<script>
    export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type = "checkbox" v-model="todo.completed">
        <label>
          {{ todo.task }}
        </label>
        <button @click="$emit('remove', todo)">x</button>
      </li>
    </ul>
</template>

<style>

li.completed label{
  text-decoration: line-through;
  color: red;
}

ul {
    list-style-type: none;
}
</style>