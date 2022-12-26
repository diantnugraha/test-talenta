<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useTodoStore } from "../stores/todo";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      description: "",
      created_at: new Date(),
      is_complete: "",
    };
  },
  methods: {
    ...mapActions(useTodoStore, ["addTodo"]),
  },
};
</script>

<template>
  <div class="form-list">
    <div class="text-center font-semibold py-6 text-3xl">
      <p>ADD NEW TODO</p>
    </div>
  </div>
  <section class="py-4">
    <div class="max-w-4xl px-4 mx-auto">
      <div class="p-6 bg-white rounded-md shadow">
        <h2 class="mb-6 text-xl font-medium leading-6 text-black">New Todo</h2>
        <form action="#" method="post" class="">
          <div class="container px-4 mx-auto"></div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-black" for="">
              Title
            </label>
            <input
              v-model="title"
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
              type="text"
              name=""
              placeholder="Title todo ..."
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-black" for=""
              >Description</label
            >
            <textarea
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
              v-model="description"
              name="field-name"
              rows="5"
              placeholder="Description todo ..."
            ></textarea>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-black" for=""
              >Status</label
            >
            <select
              id="movie-rating"
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
              v-model="is_complete"
            >
              <option value="" selected disabled>-- Select Status --</option>
              <option value="Done">Done</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <div class="mt-7">
            <div class="flex justify-start space-x-2">
              <button
                type="button"
                @click.prevent="
                  addTodo(title, description, created_at, is_complete)
                "
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
