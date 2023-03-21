<script>
import DropDown from "./Dropdown.vue"

export default {
  components : {
    DropDown
  },
  props : {
    priorities : {
      type : Array, 
      required : true
    }
  },
  data() {
    return {
      newTodo: {
        name: "",
        priority: 0
      },
    };
  },
  methods: {
    addTodo() {
      this.$emit("add", this.newTodo);
      this.newTodo = {
        name: "",
        priority: 0
      };
    },
    setPriority(priority) {
      this.newTodo.priority = this.priorities.indexOf(priority);
    },
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Add Task" v-model="newTodo.name" />
    <label for="priority">Priority</label>
    <DropDown :priorities="priorities" @setPriority="setPriority" :toBeUpdated="false"/>
    <button type="submit" :disabled="!newTodo.name">Add</button>
  </form>
</template>

<style>
input {
  background-color: #181818;
  border: none;
  border-bottom: 1px solid rgba(235, 235, 235, 0.64);
  color: rgba(235, 235, 235, 0.64);
  margin-bottom: 10px;
}

input:focus {
  outline: none;
}

button {
  cursor: pointer
}
</style>