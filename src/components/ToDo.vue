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
        <div class="hideSelect">
          <span>Hide completed</span>
          <input type="checkbox" v-model="hideCompleted" />
        </div>
        <div class="hideSelect">
          <span>select all</span>
          <input type="checkbox" @change="store.completeAll" />
        </div>
        <div id="buttonContainer">
          <button class="removeButtons" @click="store.reset()">Delete All</button>
          <button class="removeButtons" id="deleteAll" v-if="store.todos.some(e => e.completed)" @click="store.removeCompleted()">Delete Completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin : 20px auto
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
input[type=checkbox] {
  margin-right: 10px;
  accent-color:  #ba71e4;
  width: 15px;
  height: 15px;

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
  font-size: 14px;
  margin-bottom : 10px
}
.removeButtons {
  margin-top: 20px;
  cursor: pointer;
  border-radius:  50px;
  padding: 10px 20px;
  border: none;
  background-color : #fdbc73;
  color : white;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 1px 4px;
}
.removeButtons:hover{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

#buttonContainer{
  display: flex;
    align-items: center;
    justify-content: space-around;
}

#deleteAll{
  background-color: rgb(243, 134, 160);
}

.hideSelect{
  text-align: end;
}
.hideSelect span{
  margin-right: 10px;
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
    width: 450px;
  }
}
</style>

