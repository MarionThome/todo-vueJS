
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
      hideCompleted : false, 
      todos: [
        {
          id: todoId++,
          priority : 1,
          task: "Try this todo",
          completed: false,
        },
      ],
      priorities : ["low", "medium", "high"]
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({
        id: todoId++,
        task: newTodo.name,
        priority: newTodo.priority,
        completed: false,
      });
      this.newTodo = "";
    },
    changePriority({id, prio}){
      todos[id].priority = prio
    }, 
    removeToDo(todo) {
      console.log(todo);
      this.todos = this.todos.filter((t) => {
        return t !== todo;
      });
    },
    removeCompleted(){
      this.todos = this.todos.filter(e => !e.completed)
    }, 
    reset() {
      this.todos = [];
    },
  },
  computed : {
    filtered(){
      return this.hideCompleted ? this.todos.filter(e => !e.completed) : this.todos 
    }
  }
}
</script>

<template>
  <div id="main">
    <h1>My ToDo List</h1>
    <Form :priorities="this.priorities" @add="addTodo" :newTodo="this.newTodo"></Form>
    <div> Completed : {{ this.todos.filter(e => e.completed).length }} / {{ this.todos.length }} </div>
    <List :todos="this.filtered.sort((a,b) => b.priority - a.priority)" :priorities="this.priorities" @remove="removeToDo" />
    <div>
    <input type="checkbox" v-model="hideCompleted"/>
    <span>Hide completed</span>
    </div>
    <button v-if = "todos.some(e => e.completed)" @click="removeChideompleted()">Delete Completed</button>
    <button @click="reset()">Delete All</button>
    <div>

    </div>
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
