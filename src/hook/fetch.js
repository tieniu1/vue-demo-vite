import { isRef, ref, unref, watchEffect } from "vue";
export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  function doFetch() {
    data.value = null;
    error.value = null;
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = { message: "报错了" }));
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }
  return { data, error };
}
