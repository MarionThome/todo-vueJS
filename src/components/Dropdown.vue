<script>
export default {
    props: {
        priorities: {
            type: Array,
            required: true
        },
        toBeUpdated : {
            type: Boolean, 
            required : true
        }, 
        taskId : {
            type : Number, 
            required : false
        }, 
    },
    methods:{
        setPriority(event){
            if(!this.toBeUpdated){
                this.$emit('setPriority', event.target.value)
            }
        }
    }
}
</script>

<template>
    <select name="priority" id="priority" @change="setPriority">
        <option v-for="prio in priorities" :value="prio">{{ prio }}</option>
    </select>
</template>

<style></style>