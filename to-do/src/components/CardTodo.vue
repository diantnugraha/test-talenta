<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useTodoStore } from "../stores/todo";

export default {
  name: "CardTodo",
  props: ["todoList"],
  methods: {
    ...mapActions(useTodoStore, ["deleteTodos"]),
    clickHandler() {
      this.$router.push({
        name: "edit",
        params: {
          id: this.todoList.id,
        },
      });
    },
    clickHandlerDelete() {
      const id = this.todoList.id;
      this.deleteTodos(id);
    },
  },
};
</script>
<template>
  <div
    class="flex bg-white shadow-lg rounded-lg max-w-md md:max-w-2xl mx-auto mt-6 mb-8"
  >
    <div class="flex items-start px-4 py-6">
      <div class="">
        <div class="flex-cols items-center justify-left">
          <h2 class="text-lg font-semibold text-gray-900 mt-2 px-2">
            {{ todoList.title }}
          </h2>
          <div class="bg-gray-300 rounded-md w-20 ml-2">
            <h2 class="text-sm font-semibold text-gray-900 mt-2 text-center">
              {{ todoList.is_complete }}
            </h2>
          </div>
        </div>
        <div class="w-full mt-3 text-gray-700 text-sm mb-2 px-2">
          {{ todoList.description }}
        </div>
        <div class="flex-row px-2 py-2">
          <button
            @click="clickHandlerDelete"
            type="button"
            class="px-2 py-auto rounded-md bg-red-600 text-white text-sm my-auto"
          >
            Delete
          </button>
          <button
            @click="clickHandler"
            type="button"
            class="px-2 py-auto rounded-md bg-green-600 text-white text-sm ml-4 my-auto"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
