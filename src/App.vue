<script setup>
import WelcomeMessage from './components/WelcomeMessage.vue'

import { ref } from 'vue'

const items = ref(['foo', 'bar'])
const newTask = ref('');

function submitTask() {
  if (newTask.value.trim() !== '') {
    items.value.push(newTask.value.trim());
    newTask.value = ''; // Clear the input field after submitting
  }
}

function clearTasks() {
  items.value = []
}
</script>

<template>
  <header>

    <div class="wrapper">
      <WelcomeMessage />
    </div>
  </header>

  <main>
    List of items:
    <li v-for="item in items">
        {{ item }}
    </li>
  </main>

  <footer>
    <input type="text" placeholder="Enter task " v-model="newTask" />
    <button @click="submitTask">Submit</button>
    <button @click="clearTasks">Clear All</button>
  </footer>
</template>

<style scoped>

</style>
