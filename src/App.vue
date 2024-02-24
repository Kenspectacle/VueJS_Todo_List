<script setup>
import WelcomeMessage from './components/WelcomeMessage.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue'

const todoLists = ref([
  { id: 1, name: 'first todo list' },
  { id: 2, name: 'second todo list' }
])

const newTodoList = ref('')

function submitTodoList() {
  if (newTodoList.value.trim() !== '') {
    let newList = {
      id: 3,
      name: newTodoList.value.trim()
    }
    todoLists.value.push(newList);
    newTodoList.value = ''; // Clear the input field after submitting
  }
}

function clearTodoLists() {
  todoLists.value = []
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <WelcomeMessage />
    </div>


    <div class="todolists">
      <ul>
        <li v-for="todoList in todoLists">
          <button>{{ todoList.name }}</button>
        </li>
      </ul>
    </div>
  </header>

  <main>
    <TodoList v-for="todoList in todoLists" :name="todoList.name" />
  </main>

  <footer>
    <input type="text" placeholder="Enter TodoList " v-model="newTodoList" />
    <button @click="submitTodoList">Submit</button>
    <button @click="clearTodoLists">Clear All</button>
    <TodoFooter />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
