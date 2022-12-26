<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useTodoStore } from "../stores/todo";

export default {
  data() {
    return {
      created_at: new Date(),
    };
  },
  name: "EditTodo",
  computed: {
    ...mapState(useTodoStore, ["detailTodos"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["fetchdetailTodos", "updateTodo"]),
  },
  created() {
    const id = this.$route.params.id;
    this.fetchdetailTodos(id);
  },
};
</script>

<template>
  <div class="form-list">
    <div class="text-center font-semibold py-6 text-3xl">
      <p>EDIT TODO</p>
    </div>
  </div>
  <section class="py-4">
    <div class="max-w-4xl px-4 mx-auto">
      <div class="p-6 bg-white rounded-md shadow">
        <h2 class="mb-6 text-xl font-medium leading-6 text-black">Edit Todo</h2>
        <form action="#" method="post" class="">
          <div class="container px-4 mx-auto"></div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-black" for="">
              Title
            </label>
            <input
              v-model="detailTodos.title"
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
              v-model="detailTodos.description"
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded text-black dark:placeholder-gray-400"
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
              v-model="detailTodos.is_complete"
            >
              <option value="" selected disabled>-- Select Status --</option>
              <option value="Done">Done</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <div class="mt-7">
            <div class="flex justify-start space-x-2">
              <button
                @click.prevent="
                  updateTodo(
                    detailTodos.id,
                    detailTodos.title,
                    detailTodos.description,
                    created_at,
                    detailTodos.is_complete
                  )
                "
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
