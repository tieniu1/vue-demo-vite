import { ref } from "vue";
export function useToDoList() {
  let list = ref([]);
  let message = ref("");

  function handleAdd() {
    if (!message.value.length) return;
    console.log(message);
    list.value.push({
      id: Math.random() * 1000,
      message: message.value,
    });
    message.value = "";
  }
  function handleRemove(id) {
    list.value.splice(list.value.findIndex((v) => v.id === id));
  }

  return { handleAdd, handleRemove, list, message };
}
