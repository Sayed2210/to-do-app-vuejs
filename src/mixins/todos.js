import { ref, onMounted } from "vue";

const todoFunctions = () => {
  //Data
  const todoList = ref([]);

  //Methods

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

  return { todoList, addLocalSt };
};

export default todoFunctions;
