<script setup>
import TodoDeleteButton from './buttons/TodoDeleteButton.vue'
import TodoEditButton from './buttons/TodoEditButton.vue'
import { ref } from 'vue'

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

const isShowingDetail = ref(false)
</script>

<template>
    <li>{{ msg }}
        <TodoEditButton />
        <TodoDeleteButton />
        <ul>
            <li v-if="isShowingDetail"> {{ detail }}</li>
        </ul>
    </li>
</template>