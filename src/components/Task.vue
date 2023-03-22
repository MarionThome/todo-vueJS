<script>
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
    }
}
</script>

<template>
    <li :key="todo.id" :class="{ completed: todo.completed }">
        <input class="check" type="checkbox" v-model="todo.completed">
        <label>
            {{ todo.task }}
        </label>
        <p>Priority : {{ priorities[todo.priority] }}</p>
        <button @click="$emit('remove', todo)">x</button>
    </li>
</template>

<style>
li{

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.check{
    margin-bottom: 0px;
}

</style>