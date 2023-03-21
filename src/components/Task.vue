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
        <input type="checkbox" v-model="todo.completed">
        <label>
            {{ todo.task }}
        </label>
        <p>Priority : {{ priorities[todo.priority] }}</p>
        <button @click="$emit('remove', todo)">x</button>
    </li>
</template>

<style></style>