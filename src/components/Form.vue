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
    <input type="text" id="taskField" placeholder="Add Task" v-model="newTodo.name" />
    <div>
      <DropDown :priorities="priorities" @setPriority="setPriority" :toBeUpdated="false"/>
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
    width : 300px;
  }
}
</style>