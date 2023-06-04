<template>
  <div class="to-do">
    <h1>To Do Show</h1>
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>From</td>
          <td>To</td>
          <td>Created Date</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isComplate ? 'background: #19a7ce' : 'background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdDate).toLocaleDateString }}</td>
          <td>
            <div>
              <button class="complate" @click="complateTodo(todo)">
                {{ todo.isComplate ? "InComplate" : "Complate" }}
              </button>
              <button class="del" @click="deleteTodo(index)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="console.log(todoList.value)">Click</button>
</template>

<script setup>
import mixins from "@/mixins/todos";
const { todoList, addLocalSt } = mixins();

//delete todo
const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  addLocalSt();
};
//delete todo
const complateTodo = (todo) => {
  todo.isComplate = !todo.isComplate;
  addLocalSt();
};
</script>
