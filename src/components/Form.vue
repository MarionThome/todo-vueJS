<script>
import DropDown from "./Dropdown.vue"
import { store } from "../store";

export default {
  components : {
    DropDown
  },
  data() {
    return {
      store,
      newTodo: {
        name: "",
        priority: 0
      },
    };
  },
  methods: {
    addTodo(task) {
      store.addTodo(task)
      this.newTodo = {
        name: "",
        priority: 0
      }
    },
    setPriority(priority) {
      this.newTodo.priority = store.priorities.indexOf(priority);
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo(newTodo)">
    <input type="text" id="taskField" placeholder="Add Task" v-model="newTodo.name" />
    <div>
      <DropDown :priorities="store.priorities" @setPriority="setPriority" :toBeUpdated="false"/>
    </div>
    <button type="submit" :disabled="!newTodo.name" id="submitButton">+</button>
  </form>
</template>

<style>
#taskField {
  border: none;
  border-bottom: 1px solid rgba(235, 235, 235, 1);
  color: black;
  margin-bottom: 10px;
  width : 100%;
  font-size: 16px;

}
form {
  display: flex;
    flex-direction: column;
    align-items: center;
}
input:focus {
  outline: none;
}

#submitButton {
  margin-top: 20px;
  cursor: pointer;
  border-radius:  50%;
  height: 50px;
  width: 50px;
  border: none;
  background-color : #fdbc73;
  color : white;
  font-size : 30px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.46) 0px 1px 4px;
}
#submitButton:hover{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

#submitButton:disabled{
  opacity: 50%;
  box-shadow: none;
}

@media (min-width: 481px) {
  #taskField{
    width : 400px;
  }
}
</style>