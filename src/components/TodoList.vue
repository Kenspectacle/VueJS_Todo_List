<script setup>
import TodoItem from './TodoItem.vue'
import { ref } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>



<template>
    <h2>The Todo List: </h2>
    <li v-for="item in items">
        {{ item.message }}
    </li>
</template>