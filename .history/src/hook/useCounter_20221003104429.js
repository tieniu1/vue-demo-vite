import { ref } from "vue";

let counter = ref(0);
function increment() {
  console.log(counter.value);
  counter.value += 1;
}
function decrement() {
  console.log(counter.value);
  counter.value -= 1;
}
export { counter, increment, decrement };
