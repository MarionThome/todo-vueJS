<script>
import { store } from '../store';
export default {
    props: {
        priorities: {
            type: Array,
            required: true
        },
        toBeUpdated: {
            type: Boolean,
            required: true
        },
        taskId: {
            type: Number,
            required: false
        },
    },
    methods: {
        setPriority(event) {
            console.log(event)
            this.$emit('setPriority', event.target.value)

        }
    }
}
</script>

<template>
    <select name="priority" id="priority" @change="setPriority">
        <option :value="default">Set priority</option>
        <option v-for="prio in priorities" :value="prio">{{ prio }}</option>
    </select>
</template>

<style>
select {
    width: 100%;
    text-align: center;
    height: 30px;
    border: none;
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    color: grey;
    font-size: 16px;
}

@media (min-width: 481px) {
    select {
        width: 300px;
    }
}
</style>