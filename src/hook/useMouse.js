import { ref } from "vue";
import { useEventListener } from "./event";
export function useMouse() {
  let x = ref(0);
  let y = ref(0);
  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });
  return {
    x,
    y,
  };
}
