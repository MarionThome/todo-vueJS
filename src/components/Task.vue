<script>
import { store } from "../store";
import DropDown from "./Dropdown.vue"

export default {
    components: {
        DropDown

    },
    props: {
        todo: {
            type: Object,
            required: true,
        },
        priorities: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            store,
            newTask: this.todo.task,
            toModify: false,
            updatePrio: false,
        }
    },
    methods: {
        modify() {
            if (this.toModify && this.newTask !== this.todo.task) {
                console.log(this.todo)
                store.modifyTask(this.todo.id, this.newTask)
            }
            // this.focusInput()
            this.toModify = !this.toModify
        },
        priorityUpdate(e){
            const newPrio = this.priorities.indexOf(e.target.value)
            store.updatePriority(this.todo.id, newPrio)
            this.updatePrio = false
        }
        // focusInput() {
        //     this.$nextTick(() => {
        //         this.$refs.updateTask.focus();
        //     });
        // }
    },

}
</script>

<template>
    <li :key="todo.id" :class="{ completed: todo.completed }">
        <div class="checkboxAndLabel">
            <input class="check" type="checkbox" v-model="todo.completed">
            <label class="task" v-if="!toModify" >
                {{ todo.task }}
            </label>
            <input class="newTaskInput" refs="updateTask" type="text" v-else v-model="newTask" :v-focus-input="toModify"
                @keyup.enter="modify()" />
            <div>
            </div>
            <div @click="modify()" v-if="!toModify" class="edit">edit</div>
            <div @click="modify()" v-else class="edit">save</div>
        </div>
        <div class="buttonAndPrio">
            <p class="priority">Priority :</p>
            <span v-if="!updatePrio" class="priority" id="prioritySpan" @click="this.updatePrio=true">{{ priorities[todo.priority] }}</span>
            <select v-else name="priority" id="priorityUpdate" @change="priorityUpdate">
                <option :value="default">Set priority</option>
                <option v-for="prio in priorities" :value="prio">{{ prio }}</option>
            </select>
            <button class="crossButton" @click="store.removeToDo(todo)">x</button>
        </div>
    </li>
</template>

<style>
.edit {
    margin-left: 10px;
    font-size: 12px;
    cursor: pointer
}

.edit:hover {
    text-decoration: underline;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task {
    max-width: 180px;
    line-height: normal;
    word-wrap: break-word;
    text-align: right;
}

.newTaskInput {
    border: none;
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    font-size: 16px;
    color: grey;
    text-align: left;
    max-width : 150px
}

.checkboxAndLabel {
    display: flex;
    align-items: center;
}

.buttonAndPrio {
    display: flex;
    align-items: center;
}

.priority {
    text-align: right;
    margin-right: 10px;
    font-size: 12px;
    color: #a698ae;
}
#prioritySpan{
    cursor: pointer;
}
.check {
    margin-bottom: 0px;
}

.crossButton {
    background-color: rgba(239, 181, 195, 1);
    border-radius: 50%;
    color: white;
    border: none
}
#priorityUpdate{
    text-align: right;
    margin-right: 10px;
    font-size: 12px;
    color: #a698ae;
    border: none; 
    border-bottom: 1px solid #a698ae;
}
</style>