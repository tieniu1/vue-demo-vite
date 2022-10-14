import { ref } from "vue";

let counter = ref(0);
function increment() {
  console.log(2222222);
  counter.value += 1;
}
function decrement() {
  console.log(11111);
  counter.value -= 1;
}
export { counter, increment, decrement };
