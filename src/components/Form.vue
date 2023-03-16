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
        <button type="submit">Add</button>
    </form>
</template>

<style></style>