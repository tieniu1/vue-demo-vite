export default function (app) {
  const appMessage = ref('hello');
  const updateAppMessage = (newValue) => {
    appMessage.value = newValue;
  };
  app.provide('appMessage', {
    appMessage,
    updateAppMessage,
  });
  app.provide('appName', 'hello vite vue3');
}
