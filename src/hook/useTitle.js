import { ref, watch } from "vue";
export function useTitle() {
  let title = ref("");
  document.title = title.value;
  watch(title, () => (document.title = title.value));
  return { title };
}
