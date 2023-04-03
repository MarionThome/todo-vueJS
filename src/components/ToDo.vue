<script>
import { store } from '../store'
import List from "./List.vue"
import Form from "./Form.vue"

export default {
  components: {
    List, Form
  },
  data() {
    return {
      store,
      hideCompleted: false,
      completeAllTasks: false,
    }
  },
  computed: {
    filtered() {
      console.log(this.hideCompleted)
      return this.hideCompleted ? store.todos.filter(e => !e.completed) : store.todos
    }, 
    isAllTaskCompleted(){
      return store.todos.every(e => e.completed)
    }
  },
}
</script>

<template>
  <div id="main">
    <h1>My ToDo List</h1>
    <div id="todoContainer">
      <div>
        <Form :priorities="store.priorities" @add="addTodo" :newTodo="store.newTodo"></Form>
        <div id="completion"> Completed : {{ store.todos.filter(e => e.completed).length }} / {{ store.todos.length }} </div>
      </div>
      
        <List :todos="this.filtered.sort((a, b) => b.priority - a.priority)" :priorities="store.priorities"
          @remove="removeToDo" />

      
        <div>
        <div>
          <input type="checkbox" v-model="hideCompleted" />
          <span>Hide completed</span>
        </div>
        <div>
          <input type="checkbox" @change="store.completeAll" />
          <span>select all</span>
        </div>
        <div>
          <button v-if="store.todos.some(e => e.completed)" @click="store.removeCompleted()">Delete Completed</button>
          <button @click="store.reset()">Delete All</button>
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

