import { ref } from "vue";
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

export { handleAdd, handleRemove, list, message, handleCheckItem };
