import { ref } from "vue";

let counter = ref(0);
function increment() {
  counter.value += 1;
}
function decrement() {
  counter.value -= 1;
}
export { counter, increment, decrement };
