<script>
import Task from "./Task.vue"

export default {
  components: {
    Task
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    priorities : {
      type : Array,
      required : true
    }
  },
  methods: {
  remove(todo) {
    this.$emit('remove', todo);
  }, 
}
};
</script>

<template>
    <ul class="todo-list">
     <Task v-for="todo in todos" :todo = "todo" :priorities = "priorities" @remove="remove(todo)" :key="todo.id"/>
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