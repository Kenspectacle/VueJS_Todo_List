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

function detailToggle() {
    isShowingDetail.value = !isShowingDetail.value
}
</script>

<template>
    <li><button @click="detailToggle">{{ msg }}</button>
        
        <TodoDeleteButton />
        <ul>
            <li v-if="isShowingDetail"> {{ detail }} <TodoEditButton /> </li>
        </ul>
    </li>
</template>