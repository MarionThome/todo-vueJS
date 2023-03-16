<script>
let todoId = 0
export default {
  data() {
    return {
      clicked: 0,
      newTodo: "",
      todos: [{
        id: todoId++,
        task:' Try this todo', 
        completed: false
      }]
    }
  }, 
  methods : {
    addTodo(){
      this.todos.push({id : todoId++, task : this.newTodo, completed : false})
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
    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type = "checkbox" v-model="todo.completed">
        <label>
          {{ todo.task }}
        </label>
        <button @click="removeToDo(todo)">x</button>
      </li>
    </ul>
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

li.completed label{
  text-decoration: line-through;
  color: red;
}
</style>
