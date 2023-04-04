<script>
import { store } from "../store";
import DropDown from "./Dropdown.vue"

export default {
    components : {
        DropDown
    },
    props: {
        todo: {
            type: Object,
            required: true,
        },
        priorities:{
            type: Array, 
            required : true
        }
    },
    data() {
        return {store}
    }
    
}
</script>

<template>
    <li :key="todo.id" :class="{ completed: todo.completed }">
        <div class="checkboxAndLabel">
            <input class="check" type="checkbox" v-model="todo.completed">
            <label class="task">
                {{ todo.task }}
            </label>
        </div>
        <div class="buttonAndPrio">
            <p class="priority">Priority : {{ priorities[todo.priority] }}</p>
            <button class="crossButton" @click="store.removeToDo(todo)">x</button>
        </div>
    </li>
</template>

<style>
li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checkboxAndLabel{
    display: flex;
    align-items: center;
}

.buttonAndPrio{
    display: flex;
    align-items: center;
}
.priority{
    text-align: right;
    margin-right: 10px;
    font-size: 12px;
    color: #a698ae
;
}
.check{
    margin-bottom: 0px;
}
.crossButton{
    background-color: rgba(239,181,195,1);
    border-radius: 50%;
    color : white;
border : none
}

</style>