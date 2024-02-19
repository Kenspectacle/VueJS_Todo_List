<script setup>
import TodoDeleteButton from './buttons/TodoDeleteButton.vue'
import TodoEditButton from './buttons/TodoEditButton.vue'

defineProps({
    msg: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
})

</script>

<template>
    <li>{{ msg }}
        <TodoEditButton />
        <TodoDeleteButton />
        <ul>
            <li> {{ detail }}</li>
        </ul>
    </li>
</template>