import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const useTodoStore = defineStore("todos", {
  state: () => ({
    dataTodos: [],
    detailTodos: [],
  }),
  actions: {
    async fetchTodos() {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/todos?_sort=title&_order=asc"
        );
        this.dataTodos = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTodosSearch(title) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/todos?title_like=${title}`
        );
        console.log(data);
        this.dataTodos = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchTodosFilter(filter) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/todos?is_complete_like=${filter}`
        );
        console.log(data);
        this.dataTodos = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTodos(id) {
      try {
        const { data } = await axios.delete(
          `http://localhost:3000/todos/${id}`
        );
        this.fetchTodos();
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Succesfully delete Todo",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchdetailTodos(id) {
      try {
        const { data } = await axios.get(`http://localhost:3000/todos/${id}`);
        console.log(data);
        this.detailTodos = data;
      } catch (error) {
        console.log(error);
      }
    },

    async updateTodo(id, title, description, created_at, is_complete) {
      try {
        await axios.put(`http://localhost:3000/todos/${id}`, {
          title,
          description,
          created_at,
          is_complete,
        });
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Succesfully update Todo",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(title, description, created_at, is_complete) {
      try {
        await axios.post(`http://localhost:3000/todos`, {
          title,
          description,
          created_at,
          is_complete,
        });
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Succesfully add Todo",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
