<script>
import CardTodo from "../components/CardTodo.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useTodoStore } from "../stores/todo";

export default {
  name: "HomePage",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapState(useTodoStore, ["dataTodos"]),
  },
  methods: {
    ...mapActions(useTodoStore, [
      "fetchTodos",
      "fetchTodosSearch",
      "fetchTodosFilter",
    ]),
  },
  components: { CardTodo },
  created() {
    this.fetchTodos();
  },
};
</script>

<template>
  <div class="home">
    <div class="text-center font-semibold py-6 text-3xl">
      <p>TODO LIST</p>
    </div>
    <!-- {{ dataTodos }} -->
    <div class="max-w-2xl mx-auto mt-6 mb-8">
      <form class="flex items-center">
        <div class="w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          ></div>
          <input
            v-model="title"
            @click.prevent="fetchTodos()"
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <button
          type="submit"
          @click.prevent="fetchTodosSearch(title)"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
    <div
      class="p-4 bg-white shadow-lg rounded-lg max-w-md md:max-w-2xl mx-auto mt-6 mb-8"
    >
      <h2 class="text-lg font-bold text-black ml-2">Filter by</h2>
      <div
        class="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400 ml-2"
      ></div>
      <select
        id="movie-rating"
        v-model="filter"
        @click.prevent="fetchTodosFilter(filter)"
        class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
      >
        <option value="Done">Done</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <button
        @click.prevent="fetchTodos()"
        type="button"
        class="px-2 py-auto rounded-md bg-blue-600 text-white text-md my-auto"
      >
        Reset
      </button>
    </div>
    <div>
      <CardTodo
        v-for="todoList in dataTodos"
        :key="todoList.id"
        :todoList="todoList"
      />
    </div>
  </div>
</template>
