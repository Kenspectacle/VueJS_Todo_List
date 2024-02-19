<script setup>
import TodoItem from './TodoItem.vue'
import { ref } from 'vue'

defineProps({
    name: {
        type: String,
        required: true
    }
})

const items = ref([
    { id: 1, message: 'Foo', detail: 'lorem ipsum' },
    { id: 2, message: 'Bar', detail: 'lorem ipsum' }])

const newTask = ref('');


function submitTask() {
    if (newTask.value.trim() !== '') {
        let newItem = {
            id: 3,
            message: newTask.value.trim(),
            detail: 'lorem ipsum'
        }
        items.value.push(newItem);
        newTask.value = ''; // Clear the input field after submitting
    }
}

function clearTasks() {
    items.value = []
}
</script>



<template>
    <h2>{{ name }}: </h2>
    <ul>
        <TodoItem v-for="item in items" :msg="item.message" :detail="item.detail" />
    </ul>
    <input type="text" placeholder="Enter task " v-model="newTask" />
    <button @click="submitTask">Submit</button>
    <button @click="clearTasks">Clear All</button>
</template>