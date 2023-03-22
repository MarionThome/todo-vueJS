
<script>
import List from "./List.vue"
import Form from "./Form.vue"
import { watch } from "vue";
let todoId = 0;

export default {
  components: {
    List, Form
  },
  data() {
    return {
      clicked: 0,
      hideCompleted: false,
      completeAllTasks: false,
      todos: [
        {
          id: todoId++,
          priority: 1,
          task: "Try this todo",
          completed: false,
        },
      ],
      priorities: ["low", "medium", "high"]
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
    changePriority({ id, prio }) {
      todos[id].priority = prio
    },
    removeToDo(todo) {
      console.log(todo);
      this.todos = this.todos.filter((t) => {
        return t !== todo;
      });
    },
    removeCompleted() {
      this.todos = this.todos.filter(e => !e.completed)
    },
    reset() {
      this.todos = [];
    },
    completeAll(e) {
      this.completeAllTasks = !this.completeAllTasks
      this.todos.forEach((todo) => (todo.completed = e.target.checked))
    },
    checkCompletion() {
      if (this.todos.every(e => e.completed)) {
        this.completeAllTasks = true
      }
    },
  },
  computed: {
    filtered() {
      return this.hideCompleted ? this.todos.filter(e => !e.completed) : this.todos
    }, 
    isAllTaskCompleted(){
      return this.todos.every(e => e.completed)
    }
  },
}
</script>

<template>
  <div id="main">
    <h1>My ToDo List</h1>
    <div id="todoContainer">
      <div>
        <Form :priorities="this.priorities" @add="addTodo" :newTodo="this.newTodo"></Form>
        <div id="completion"> Completed : {{ this.todos.filter(e => e.completed).length }} / {{ this.todos.length }} </div>
      </div>
      
        <List :todos="this.filtered.sort((a, b) => b.priority - a.priority)" :priorities="this.priorities"
          @remove="removeToDo" />

      
        <div>
        <div>
          <input type="checkbox" v-model="hideCompleted" />
          <span>Hide completed</span>
        </div>
        <div>
          <input type="checkbox" @change="completeAll" />
          <span v-if="isAllTaskCompleted">Unselect all</span>
          <span v-else> Select all</span>
        </div>
        <div>
          <button v-if="todos.some(e => e.completed)" @click="removeCompleted()">Delete Completed</button>
          <button @click="reset()">Delete All</button>
        </div>
      </div>
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
  color: black;
  height: 100vh;
}
input {
  text-align: center;
}
#todoContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin: auto;
  height: 90vh;
  width:90vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
    border-radius: 10px;
}
#completion{
  font-size: 14px
}
@media (min-width: 481px) {
  #main{
    width : 600px;
    align-items: center;
    height: 500px;
    font-size: 16px;
  }
  #todoContainer{
    min-height: 500px;
    width: 400px;
  }
}
</style>

