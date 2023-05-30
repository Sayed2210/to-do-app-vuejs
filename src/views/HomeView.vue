<template>
  <div class="home">
    <h1>To Do Homepage</h1>
    <form @submit.prevent="pushData()">
      <input
        type="text"
        placeholder="Enter Your Task"
        v-model="todoListObj.text"
        required
      />
      <div class="timeline">
        <label for="from">From:</label>
        <input
          type="date"
          placeholder="From"
          name="from"
          v-model="todoListObj.from"
          required
        />
        <label for="to">To:</label>
        <input
          type="date"
          placeholder="to"
          name="to"
          v-model="todoListObj.to"
          required
        />
      </div>
      <button type="submit">+</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

//Data
const todoList = ref([]);
const todoListObj = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdDate: "",
});
//method

//Push data
const pushData = () => {
  todoListObj.value.id = todoList.value.length + 1;
  todoListObj.value.createdDate = new Date();
  todoList.value.push(todoListObj.value);
  addLocalSt();
  todoListObj.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdDate: "",
  };
  console.log(todoList.value);
};

//set a local storage
const addLocalSt = () => {
  localStorage.setItem("todolists", JSON.stringify(todoList.value));
};

//update localstorage
const updateLocalSt = () => {
  if (localStorage.getItem("todoLists")) {
    todoList.value = JSON.parse(localStorage.getItem("todolists"));
  }
};

onMounted(() => updateLocalSt());
</script>

<style lang="scss">
.home {
  text-align: center;
  padding: 50px 0;
  form {
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    ::placeholder {
      color: #f6f1f1;
    }
    .timeline {
      label {
        font-size: 1.2rem;
        margin-right: 15px;
      }
      input {
        margin-right: 15px;
      }
    }
    input {
      background-color: #19a7ce;
      border: none;
      outline: none;
      padding: 10px 15px;
      border: 1px solid #f6f1f1;
    }
    input[type="text"] {
      width: 100%;
      margin-bottom: 25px;
    }
    button[type="submit"] {
      background-color: #19a7ce;
      color: #f6f1f1;
      border: none;
      display: block;
      padding: 10px 25px;
      margin-left: auto;
      border: 1px solid #f6f1f1;
    }
  }
}
</style>
