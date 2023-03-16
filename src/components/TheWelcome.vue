<script>
let todoId = 0
export default {
  data() {
    return {
      clicked: 0,
      newTodo: "",
      todos: [{
        id: todoId++,
        task:' Try this todo'
      }]
    }
  }, 
  methods : {
    addTodo(){
      this.todos.push({id : todoId++, task : this.newTodo})
      this.newTodo = ""
    },
    removeToDo(todo){
      console.log(todo)
      this.todos = this.todos.filter((t) => {
        return t !== todo
      })
    },
    reset(){
      this.todos = []
    }
  }
}
</script>

<template>
  <div id="main">
    <h1>Todo</h1>
    <form @submit.prevent = "addTodo">
      <input type="text" placeholder="Add Task" v-model="newTodo" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type = "checkbox">
        <label>
          {{ todo.task }}
        </label>
        <button @click="removeToDo(todo)">x</button>
      </li>
    </ul>
    <button @click="reset()">reset</button>
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
