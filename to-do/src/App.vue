<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header class="sticky top-0 p-4 bg-gray-50 text-black shadow-md">
    <div class="container flex justify-between h-12 mx-auto">
      <div class="flex">
        <RouterLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          class="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="blue"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
        </RouterLink>
        <ul class="items-stretch hidden space-x-3 lg:flex ml-6">
          <li class="flex">
            <RouterLink
              rel="noopener noreferrer"
              to="/"
              class="flex items-center px-8 py-auto text-md font-semibold"
              >Home</RouterLink
            >
          </li>
          <li class="flex">
            <RouterLink
              rel="noopener noreferrer"
              to="/add"
              class="flex items-center px-6 py-auto text-md font-semibold"
              >New Todo</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <RouterView />
  <!-- <div class="home">
    <div class="text-center font-semibold py-6 text-3xl">
      <p>TODO LIST</p>
    </div>
    <div class="max-w-2xl mx-auto mt-6">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
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
      class="flex bg-white shadow-lg rounded-lg max-w-md md:max-w-2xl mx-auto mt-16"
    >
      <div class="flex items-start px-4 py-6">
        <div class="">
          <div class="flex items-center justify-left">
            <h2 class="text-lg font-semibold text-gray-900 mt-2 px-2">
              Menyanyi
            </h2>
          </div>
          <div class="w-full mt-3 text-gray-700 text-sm mb-2 px-2">
            <p>Menyanyi Lagu kebangsaan di setiap hari Senin besok</p>
          </div>
          <div class="flex-row px-2 py-2">
            <button
              type="button"
              class="px-2 py-auto rounded-md bg-red-600 text-white my-auto"
            >
              Delete
            </button>
            <button
              type="button"
              class="px-2 py-auto rounded-md bg-green-600 text-white ml-4 my-auto"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div class="form-list">
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
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-400"
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
              class="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-400"
              name="field-name"
              rows="5"
              placeholder="Description todo ..."
            ></textarea>
          </div>
          <div class="mt-7">
            <div class="flex justify-start space-x-2">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section> -->
</template>
