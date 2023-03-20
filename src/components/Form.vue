<script>
export default {
    data(){
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("add", this.newTodo);
      this.newTodo = "";
    },
  }
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input type="text" placeholder="Add Task" v-model="newTodo" />
        <button type="submit" :disabled="!newTodo">Add</button>
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
button{
  cursor:pointer
}
</style>